import Link from "next/link";

const popularSearches = [
  {
    label: "MAKITA ไร้สาย",
    query: "MAKITA ไร้สาย",
  },
  {
    label: "DHP485Z",
    query: "DHP485Z",
  },
  {
    label: "เหล็กเส้น มอก.",
    query: "เหล็กเส้น มอก.",
  },
  {
    label: "ท่อ PPR",
    query: "ท่อ PPR",
  },
];

export default function HomeProductSearch() {
  return (
    <section className="border-b-2 border-brand-dark bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Product Search
            </p>

            <h2 className="mt-3 max-w-lg font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl">
              ค้นหาสินค้าที่คุณต้องการ
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-brand-dark/70 sm:text-base">
              ค้นหาจากชื่อสินค้า รหัสรุ่น หรือแบรนด์
              เพื่อเข้าสู่แคตตาล็อกสินค้าและขอใบเสนอราคา
            </p>
          </div>

          <div>
            <form
              action="/products"
              method="get"
              className="flex border-2 border-brand-dark bg-white"
            >
              <label htmlFor="home-product-search" className="sr-only">
                ค้นหาสินค้า
              </label>

              <input
                id="home-product-search"
                name="q"
                type="search"
                placeholder="ค้นหาชื่อสินค้า รหัสรุ่น หรือแบรนด์ เช่น DHP485Z"
                className="min-h-16 min-w-0 flex-1 bg-transparent px-4 text-base text-brand-dark outline-none placeholder:text-brand-dark/40 sm:px-5"
              />

              <button
                type="submit"
                className="shrink-0 border-l-2 border-brand-dark bg-brand-primary px-5 font-bold text-white transition-opacity hover:opacity-90 sm:px-8"
              >
                ค้นหา
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold text-brand-dark/60">
                ค้นบ่อย:
              </span>

              {popularSearches.map((item) => (
                <Link
                  key={item.query}
                  href={`/products?q=${encodeURIComponent(item.query)}`}
                  className="border border-brand-primary px-3 py-2 text-xs font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}