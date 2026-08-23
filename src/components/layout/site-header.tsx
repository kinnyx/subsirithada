import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b-2 border-brand-dark bg-white">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center px-6">
        <Link
          href="/"
          className="flex items-center gap-4"
          aria-label="SUBSIRITHADA Homepage"
        >
          <div className="flex h-14 w-14 items-center justify-center bg-brand-primary font-display text-xl font-extrabold tracking-tight text-white">
            SST
          </div>

          <div>
            <p className="font-display text-lg font-extrabold leading-none tracking-tight text-brand-dark">
              SUBSIRITHADA
            </p>

            <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-primary">
              Hardware Center · One Stop Service
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}