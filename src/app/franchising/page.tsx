import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { franchiseBenefits } from "@/data/site";

export default function FranchisingPage() {
  return (
    <>
      <PageHero
        eyebrow="Franchising"
        title="Bring Clawzania to your community"
        copy="A colorful amusement experience built around claw machines, collectibles, photo moments, and prize upgrades."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why choose Clawzania?"
          copy="The franchise model is designed for entrepreneurs who want a fun, repeat-visit concept with a focused operating footprint."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {franchiseBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-black uppercase text-[#10183f]">
                {benefit.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {benefit.text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black uppercase text-[#10183f]">
            Ready to franchise?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            If you are passionate about entertainment and ready to invest in a
            growing business, Clawzania would love to hear from you.
          </p>
          <Link
            href="mailto:franchise@clawzania.com"
            className="mt-8 inline-flex rounded-full bg-[#ff2f93] px-6 py-3 font-black text-white"
          >
            Email Us
          </Link>
        </div>
      </section>
    </>
  );
}
