import Link from "next/link";

const navigationItems = [
  {
    label: "สินค้า",
    href: "/products",
  },
  {
    label: "งานบริการ",
    href: "/services",
  },
  {
    label: "วิธีสั่งซื้อ",
    href: "/how-to-order",
  },
  {
    label: "เกี่ยวกับเรา",
    href: "/about",
  },
  {
    label: "ข่าวสาร",
    href: "/news",
  },
  {
    label: "ติดต่อ",
    href: "/contact",
  },
];

export default function SiteHeader() {
  return (
    <header className="border-b-2 border-brand-dark bg-white">
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-8 px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-4"
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

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-semibold text-brand-dark transition-colors hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/quote"
            className="whitespace-nowrap bg-brand-accent px-4 py-3 text-sm font-bold text-brand-dark transition-opacity hover:opacity-85"
          >
            ขอใบเสนอราคา
          </Link>
        </nav>
      </div>
    </header>
  );
}