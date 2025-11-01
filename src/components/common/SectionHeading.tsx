import React from "react";

type Props = {
  title?: string;
  id?: string;
};

export default function SectionHeading({ title = "Section Heading", id }: Props) {
  return (
    <section
      aria-label="section-heading"
      className="placeholder-section-heading"
    >
      <h2 id={id}>{title}</h2>
    </section>
  );
}
