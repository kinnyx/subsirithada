import Link from "next/link";

const mainLinks = [
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
];

const supportLinks = [
  {
    label: "ข่าวสาร",
    href: "/news",
  },
  {
    label: "ติดต่อ",
    href: "/contact",
  },
  {
    label: "ขอใบเสนอราคา",
    href: "/quote",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t-8 border-brand-accent bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center bg-brand-primary font-display text-xl font-extrabold">
                SST
              </div>

              <div>
                <p className="font-display text-xl font-extrabold leading-none">
                  SUBSIRITHADA
                </p>

                <p className="mt-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-accent">
                  Hardware Center · One Stop Service
                </p>
              </div>
            </div>

            <div className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              <p>บริษัท ทรัพย์สิริธาดา จำกัด</p>
              <p>เลขที่ 1589/85 ซอยเพชรเกษม 63</p>
              <p>แขวงหลักสอง เขตบางแค</p>
              <p>กรุงเทพมหานคร 10160</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-accent">
              เมนูหลัก
            </h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer primary navigation"
            >
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-brand-accent">
              ติดต่อและช่วยเหลือ
            </h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer support navigation"
            >
              {supportLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/quote"
              className="mt-6 inline-flex bg-brand-accent px-5 py-3 text-sm font-bold text-brand-dark transition-opacity hover:opacity-85"
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/20 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© SUBSIRITHADA CO., LTD. All rights reserved.</p>

          <p className="font-display uppercase tracking-[0.12em]">
            Hardware Center · One Stop Service
          </p>
        </div>
      </div>
    </footer>
  );
}