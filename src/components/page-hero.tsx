type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="bg-[#10183f] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {eyebrow ? (
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff2f93]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-black uppercase sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{copy}</p>
      </div>
    </section>
  );
}
