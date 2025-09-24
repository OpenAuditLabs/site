export default function About() {
  return (
    <section className="relative container mx-auto py-24 px-4 flex flex-col items-center justify-center min-h-[80vh]">
      {/* Futuristic blurred gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-primary/10 to-foreground/5 blur-2xl opacity-80" />
      </div>

      <div className="max-w-3xl mx-auto text-center p-10">
        <h2 className="text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-muted-foreground">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          We build thoughtful, well-crafted products that empower teams to ship faster and with confidence.<br />
          Our vision is to redefine developer experience with clarity, performance, and futuristic design.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-background/70 border border-border rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-3 tracking-wide">Our Mission</h3>
          <p className="text-muted-foreground text-base">
            Make developer tooling and design accessible to teams of all sizes.<br />
            We focus on clarity, performance, and developer experience.
          </p>
        </div>
        <div className="backdrop-blur-md bg-background/70 border border-border rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-3 tracking-wide">Core Values</h3>
          <ul className="space-y-2 text-muted-foreground text-base">
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary" />Clarity: simple APIs and clear docs</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary" />Reliability: predictable behavior and strong defaults</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary" />Empathy: build for real users and workflows</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center backdrop-blur-lg bg-background/80 border border-border rounded-2xl shadow-xl p-10">
        <h3 className="text-2xl font-semibold mb-4 tracking-wide">Team</h3>
        <p className="text-muted-foreground mb-6 text-base">
          A small group of engineers and designers passionate about building the future.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-xl bg-primary px-6 py-2 text-sm font-semibold text-white shadow-md hover:scale-105 transition-transform"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
