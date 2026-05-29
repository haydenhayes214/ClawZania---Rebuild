import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We would love to hear from you"
        copy="Questions, feedback, franchise interest, or store help? Reach out and the team will get back to you."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black uppercase text-[#10183f]">Email</h2>
            <a
              href="mailto:info@clawzania.com"
              className="mt-4 inline-flex font-bold text-[#ff2f93]"
            >
              info@clawzania.com
            </a>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black uppercase text-[#10183f]">
              Instagram
            </h2>
            <a
              href="https://www.instagram.com/clawzania/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex font-bold text-[#ff2f93]"
            >
              @Clawzania
            </a>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black uppercase text-[#10183f]">
              Locations
            </h2>
            <Link
              href="/locations"
              className="mt-4 inline-flex font-bold text-[#ff2f93]"
            >
              View all stores
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
