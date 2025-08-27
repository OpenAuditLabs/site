import React from "react";

type Props = {
  title?: string;
};

export default function SectionHeading({ title = "Section Heading" }: Props) {
  return (
    <section
      aria-label="section-heading"
      className="placeholder-section-heading"
    >
      <h2>{title}</h2>
    </section>
  );
}
