import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "เครื่องมือไฟฟ้า",
    slug: "power-tools",
  },
  {
    number: "02",
    name: "อุปกรณ์เสริมเครื่องมือไฟฟ้า",
    slug: "power-tool-accessories",
  },
  {
    number: "03",
    name: "เครื่องมือช่าง",
    slug: "hand-tools",
  },
  {
    number: "04",
    name: "เครื่องมือทำความสะอาด",
    slug: "cleaning-tools",
  },
  {
    number: "05",
    name: "อุปกรณ์นิรภัย",
    slug: "safety-equipment",
  },
  {
    number: "06",
    name: "วัสดุก่อสร้าง · เคมีภัณฑ์",
    slug: "construction-chemicals",
  },
  {
    number: "07",
    name: "ประปา · สุขภัณฑ์",
    slug: "plumbing-sanitary",
  },
  {
    number: "08",
    name: "ฮาร์ดแวร์ · อุปกรณ์ยึด",
    slug: "hardware-fasteners",
  },
  {
    number: "09",
    name: "ประตู · หน้าต่าง",
    slug: "doors-windows",
  },
  {
    number: "10",
    name: "อุปกรณ์ไฟฟ้า",
    slug: "electrical-equipment",
  },
  {
    number: "11",
    name: "เหล็ก",
    slug: "steel",
  },
  {
    number: "12",
    name: "งานตกแต่งพื้นผิว",
    slug: "surface-finishing",
  },
] as const;

export default function HomeCategories() {
  return (
    <section className="border-b-2 border-brand-dark bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-5 border-b-2 border-brand-dark pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Product Categories
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              หมวดหมู่สินค้า
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-dark/70 sm:text-base">
              เลือกดูสินค้าตามประเภทงานและอุปกรณ์ที่คุณต้องการ
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-dark"
          >
            ดูแคตตาล็อกทั้งหมด
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid border-l-2 border-t-2 border-brand-dark sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.number}
              href={`/products?category=${category.slug}`}
              className="group flex min-h-44 flex-col border-b-2 border-r-2 border-brand-dark bg-white p-5 transition-colors hover:bg-brand-primary sm:min-h-48 sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-xs font-bold tracking-[0.18em] text-brand-dark/50 transition-colors group-hover:text-white/60">
                  {category.number}
                </span>

                <span
                  aria-hidden="true"
                  className="text-lg font-bold text-brand-primary transition-colors group-hover:text-brand-accent"
                >
                  ↗
                </span>
              </div>

              <div className="mt-auto pt-8">
                <h3 className="max-w-[16rem] text-lg font-bold leading-snug text-brand-dark transition-colors group-hover:text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}