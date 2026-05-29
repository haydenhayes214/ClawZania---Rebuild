import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Get hooked on the claw!"
        copy="At Clawzania, you do not just play. You play to upgrade."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Play, collect, and trade up"
              copy="Win small prizes and trade them for bigger rewards. Along with claw machines, guests can snap memorable moments in photo booths and browse collectibles like anime figures, blind boxes, trading cards, and unique trinkets."
            />
          </div>
          <div className="mx-auto max-w-sm">
            <Image
              src="/images/clawzania-logo.png"
              alt="Clawzania logo"
              width={760}
              height={960}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
