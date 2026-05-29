import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { events, faqs } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#10183f] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex rounded-full bg-[#ff2f93] px-4 py-2 text-sm font-black uppercase">
              1-2 tokens per play
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-none sm:text-7xl">
              Catch, Trade, and Upgrade!
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              At Clawzania, every grab gets you closer to bigger rewards. Snap
              fun photos, explore collectibles, and turn small wins into massive
              prizes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/locations"
                className="rounded-full bg-[#29c8f3] px-6 py-3 font-black text-[#10183f]"
              >
                Locate Your Store
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-white/30 px-6 py-3 font-black text-white"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-[#29c8f3]/20 blur-3xl" />
            <Image
              src="/images/clawzania-logo.png"
              alt="Clawzania claw machine bear logo"
              width={760}
              height={960}
              priority
              className="relative h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events"
          title="Upcoming at Clawzania"
          copy="Stay updated on the latest news, openings, and community popups."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <article
              key={`${event.title}-${event.location}`}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-black uppercase text-[#ff2f93]">
                {event.location}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase text-[#10183f]">
                {event.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{event.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="FAQ"
          copy="Quick answers for tokens, trade-ins, points, and prize help."
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5">
              <summary className="cursor-pointer list-none text-lg font-black text-[#10183f]">
                {faq.question}
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg bg-[#ff2f93] p-8 text-white md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-black uppercase">
              Join the Clawzania family
            </h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Interested in working with us or opening your own Clawzania
              franchise? Start here.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/franchising"
              className="rounded-full bg-white px-5 py-3 font-black text-[#10183f]"
            >
              Franchise a Store
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-5 py-3 font-black text-white"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
