import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#10183f]/95 text-white backdrop-blur">
      <div className="bg-[#ff2f93] px-4 py-2 text-center text-sm font-bold uppercase tracking-wide">
        Ft. Worth Soft Opening Sat Mar 28th
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/clawzania-logo.png"
            alt="Clawzania"
            width={72}
            height={72}
            priority
            className="h-14 w-14 object-contain"
          />
          <span className="text-xl font-black uppercase text-[#29c8f3]">
            Clawzania
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#29c8f3]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-[#10183f] hover:bg-[#29c8f3]"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
