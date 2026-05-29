import { PageHero } from "@/components/page-hero";
import { locations } from "@/data/site";

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations and Hours"
        title="Find your Clawzania"
        copy="Browse open stores and coming soon locations across Texas, Arizona, Florida, and Colorado."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-lg border border-dashed border-[#29c8f3] bg-white p-6">
            <h2 className="text-2xl font-black uppercase text-[#10183f]">
              Store Locator
            </h2>
            <p className="mt-2 text-slate-600">
              Map and zip-code search will be added in the next pass. The full
              store list is ready below.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location) => (
              <article
                key={location.name}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="rounded-full bg-[#29c8f3]/15 px-3 py-1 text-xs font-black uppercase text-[#10183f]">
                  {location.status}
                </span>
                <h2 className="mt-4 text-2xl font-black text-[#10183f]">
                  {location.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {location.address}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {location.hours}
                </p>
                <p className="mt-4 font-bold text-[#ff2f93]">
                  {location.instagram}
                </p>
                {location.status === "Open" ? (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.address,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex rounded-full bg-[#10183f] px-4 py-2 text-sm font-black text-white"
                  >
                    Get Directions
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
