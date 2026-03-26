export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="text-6xl font-head text-center bg-background">
          Soupologist
        </h1>

        <a className="text-sans">
          This is the landing page for Soupologist, a tool to help you find the
          best soup recipes. Click here to get started!
        </a>
      </main>
    </div>
  );
}
