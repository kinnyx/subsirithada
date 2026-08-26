import Link from "next/link";

const brands = [
  {
    number: "01",
    name: "MAKITA",
    description: "เครื่องมือไฟฟ้าและอุปกรณ์สำหรับงานช่าง",
  },
  {
    number: "02",
    name: "SHIN-ETSU POLYMER",
    description: "ผลิตภัณฑ์สำหรับงานประปา ฉนวน และงานอุตสาหกรรม",
  },
  {
    number: "03",
    name: "มอก. STEEL",
    description: "เหล็กเส้น เหล็กโครงสร้าง และวัสดุเหล็กสำหรับงานโครงการ",
  },
  {
    number: "04",
    name: "SPC FLOORING",
    description: "วัสดุสำหรับงานตกแต่งพื้นผิวและงานพื้น",
  },
] as const;

export default function HomeBrands() {
  return (
    <section className="border-b-2 border-brand-dark bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 border-b-2 border-brand-dark pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Brands &amp; Product Lines
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl">
              แบรนด์และกลุ่มสินค้าที่เราดูแล
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-dark/65 sm:text-base">
              ครอบคลุมเครื่องมือช่าง วัสดุอุตสาหกรรม เหล็ก
              และวัสดุตกแต่งสำหรับงานธุรกิจและงานโครงการ
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex min-h-12 w-fit items-center justify-center border-2 border-brand-dark bg-white px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
          >
            ดูสินค้าทั้งหมด
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="mt-8 grid border-l-2 border-t-2 border-brand-dark sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <article
              key={brand.number}
              className="group flex min-h-56 flex-col border-b-2 border-r-2 border-brand-dark bg-white p-6 transition-colors hover:bg-brand-light sm:min-h-64"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-xs font-bold tracking-[0.16em] text-brand-dark/40">
                  {brand.number}
                </span>

                <div
                  aria-hidden="true"
                  className="h-3 w-3 bg-brand-accent transition-transform group-hover:scale-125"
                />
              </div>

              <div className="my-auto py-8">
                <p className="font-display text-2xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-3xl">
                  {brand.name}
                </p>
              </div>

              <p className="border-t border-brand-dark/20 pt-4 text-sm leading-6 text-brand-dark/60">
                {brand.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3">
          <div className="mt-2 h-2 w-2 shrink-0 bg-brand-primary" />

          <p className="max-w-3xl text-xs leading-6 text-brand-dark/50">
            โลโก้และข้อมูลแบรนด์ในส่วนนี้เป็น Placeholder สำหรับการพัฒนา UI
            และจะเปลี่ยนเป็นข้อมูลจาก Brand Management เมื่อระบบ CMS พร้อม
          </p>
        </div>
      </div>
    </section>
  );
}