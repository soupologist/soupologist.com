"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { mediaUrl } from "@/lib/media";

type Photo = { src: string; alt?: string; caption?: string };

type Props = {
  /** Either bare paths or objects. Bare paths get an empty alt (decorative). */
  images: (string | Photo)[];
  columns?: 2 | 3 | 4;
};

const COLUMNS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

function normalise(input: string | Photo): Photo {
  return typeof input === "string" ? { src: input } : input;
}

export default function Gallery({ images, columns = 3 }: Props) {
  const photos = images.map(normalise);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // So focus goes back where it came from when the lightbox closes.
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + photos.length) % photos.length;
      });
    },
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    // Stop the page scrolling behind the overlay.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  if (photos.length === 0) return null;

  const active = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <div className={`my-10 grid gap-px border border-(--border) bg-(--border) ${COLUMNS[columns]}`}>
        {photos.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setOpenIndex(index);
            }}
            className="group relative aspect-square cursor-zoom-in overflow-hidden bg-(--bg)"
            aria-label={photo.alt ? `Open: ${photo.alt}` : `Open photo ${index + 1}`}
          >
            <Image
              src={mediaUrl(photo.src)}
              alt={photo.alt ?? ""}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-[transform,opacity] duration-300 group-hover:scale-[1.03] group-hover:opacity-85"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-100 flex flex-col bg-[#0d0d0d]/97 p-4 md:p-8"
          onClick={close}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted) tabular-nums">
              {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted) transition-colors hover:text-(--foreground)"
            >
              close ✕
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1"
            // The backdrop closes; the image itself should not.
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={mediaUrl(active.src)}
              alt={active.alt ?? ""}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div
            className="flex items-center justify-between gap-6 pt-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted) transition-colors hover:text-(--foreground)"
            >
              ← prev
            </button>

            {active.caption && (
              <p className="max-w-[52ch] text-center font-mono text-[11px] leading-[1.7] text-(--text)">
                {active.caption}
              </p>
            )}

            <button
              type="button"
              onClick={() => step(1)}
              className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.25em] text-(--muted) transition-colors hover:text-(--foreground)"
            >
              next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
