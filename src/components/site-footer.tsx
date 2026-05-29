import Link from "next/link";
import { navItems, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#10183f] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-black text-[#29c8f3]">Get Hooked on the Claw!</p>
          <p className="mt-3 max-w-sm text-sm text-white/75">
            Catch prizes, trade up, snap photos, and discover collectibles at Clawzania.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-[#ff2f93]">Quick Links</h2>
          <div className="mt-4 grid gap-2 text-sm">
            <Link href="/">How it Works</Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-[#ff2f93]">Contact Us</h2>
          <div className="mt-4 grid gap-2 text-sm">
            <a href="mailto:info@clawzania.com">info@clawzania.com</a>
            <a href="mailto:franchise@clawzania.com">franchise@clawzania.com</a>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
