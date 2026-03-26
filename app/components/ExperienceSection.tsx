type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    company: "Company One",
    role: "Product Designer",
    period: "2023 — Present",
    description:
      "Working on design systems and building thoughtful product experiences across web and mobile.",
  },
  {
    company: "Company Two",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    description:
      "Focused on performance, accessibility, and building scalable UI systems.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="mt-20">
      {/* Section Heading */}
      <h2 className="text-xl md:text-2xl mb-10">Work</h2>

      {/* Experience List */}
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index}>
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <p className="text-base md:text-lg leading-tight">
                <span className="font-medium">{exp.company}</span>{" "}
                <span className="opacity-70">— {exp.role}</span>
              </p>

              <p className="text-sm opacity-60">{exp.period}</p>
            </div>

            {/* Description */}
            <p className="mt-4 leading-relaxed max-w-2xl">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
