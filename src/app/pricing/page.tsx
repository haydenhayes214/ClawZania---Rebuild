import Image from "next/image";
import { PageHero } from "@/components/page-hero";

const tokenPackages = [
  "$1 - 1 token",
  "$5 - 5 tokens",
  "$10 - 10 tokens",
  "$25 - 28 tokens + 1 drawstring backpack",
  "$50 - 60 tokens + 2 drawstring backpacks",
  "$100 - 125 tokens + up to 4 drawstring backpacks",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Token packages"
        copy="Choose the package that fits your visit. Most small plush machines are 1-2 tokens per play."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <Image
              src="/images/token-packages.png"
              alt="Clawzania token package pricing"
              width={792}
              height={1024}
              className="h-auto w-full rounded-md"
            />
          </div>
          <div className="self-center">
            <h2 className="text-4xl font-black uppercase text-[#10183f]">
              Easy token options
            </h2>
            <div className="mt-8 grid gap-3">
              {tokenPackages.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white p-4 font-bold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-bold uppercase text-[#ff2f93]">
              No refunds.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
