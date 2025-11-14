import Image from 'next/image';

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

      {/* Quick Stats Band */}
      <div className="mt-20 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { value: '100+', label: 'Projects Completed' },
          { value: '500K+', label: 'Lines of Code Audited' },
          { value: '99.9%', label: 'Client Satisfaction' },
          { value: '24/7', label: 'Support Available' },
        ].map((stat, index) => (
          <div key={index} className="backdrop-blur-md bg-background/70 border border-border rounded-xl p-6 shadow-lg">
            <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-lg text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Team Grid */}
      <div className="mt-20 w-full max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-muted-foreground">
          Meet Our Visionaries
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          A dedicated group of engineers, designers, and strategists, united by a passion for innovation and a commitment to excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: 'Alice Johnson',
              role: 'Co-founder & CEO',
              image: '/image/contactDesign.png', // Placeholder image
              description: 'Leading with a vision for accessible and powerful developer tools,',
            }
            {
              name: 'Bob Williams',
              role: 'Lead Engineer',
              image: '/image/contractCode.svg', // Placeholder image
              description: 'Crafting robust and scalable solutions with a focus on performance,',
            }
            {
              name: 'Charlie Brown',
              role: 'Product Designer',
              image: '/image/research_image.svg', // Placeholder image
              description: 'Designing intuitive user experiences that delight and empower,',
            }
          ].map((member) => (
            <div key={member.name} className="backdrop-blur-md bg-background/70 border border-border rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={`Avatar of ${member.name}`}
                width={120}
                height={120}
                className="rounded-full mb-6 border-4 border-primary/50 shadow-md"
              />
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">{member.name}</h3>
              <p className="text-primary mb-3 text-base font-medium">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
