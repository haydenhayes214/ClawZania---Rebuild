type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff2f93]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-black uppercase text-[#10183f] sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-slate-600">{copy}</p> : null}
    </div>
  );
}
