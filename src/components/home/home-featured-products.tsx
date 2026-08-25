import Link from "next/link";

const featuredProducts = [
  {
    brand: "MAKITA",
    model: "CLX224X1",
    name: "คอมโบเซ็ต สว่านเจาะไร้สาย + ไขควงกระแทกไร้สาย",
    description:
      "DF333DZ + TD110DZ · แบต 12Vmax 1.5Ah ×2 · แท่นชาร์จ DC10WD",
    status: "พร้อมส่ง",
    slug: "makita-clx224x1",
  },
  {
    brand: "MAKITA",
    model: "DHP485Z",
    name: "สว่านกระแทกไร้สาย 18V 13 มม.",
    description: "แรงบิด 50 N·m · ตัวเปล่า",
    status: "พร้อมส่ง",
    slug: "makita-dhp485z",
  },
  {
    brand: "MAKITA",
    model: "GA4031",
    name: "เครื่องเจียร 4 นิ้ว สวิตช์โยก",
    description: "รุ่นใช้งานหนัก · มีรุ่น 9500NB / 9553BX ให้เทียบ",
    status: "พร้อมส่ง",
    slug: "makita-ga4031",
  },
  {
    brand: "MAKITA",
    model: "DVC750LZX1",
    name: "เครื่องดูดฝุ่นไร้สาย 18V",
    description: "ตัวเปล่า · ใช้แบตร่วมกับไลน์ 18V",
    status: "สั่งเข้า 3–5 วัน",
    slug: "makita-dvc750lzx1",
  },
] as const;

export default function HomeFeaturedProducts() {
  return (
    <section className="border-b-2 border-brand-dark bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-5 border-b-2 border-brand-dark pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Featured Products
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              สินค้าแนะนำ
            </h2>

            <p className="mt-3 text-sm font-semibold text-brand-dark/60">
              ราคาแจ้งในใบเสนอราคาเท่านั้น
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-dark"
          >
            ดูสินค้าทั้งหมด
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.model}
              className="flex flex-col border-2 border-brand-dark bg-white"
            >
              <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden border-b-2 border-brand-dark bg-brand-light px-4">
                <span className="font-display text-3xl font-extrabold tracking-tight text-brand-dark/15 sm:text-4xl">
                  {product.model}
                </span>

                <span className="absolute left-4 top-4 bg-brand-dark px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                  Product Image
                </span>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-8 w-8 bg-brand-accent"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                  {product.brand} · {product.model}
                </p>

                <h3 className="mt-3 text-base font-bold leading-6 text-brand-dark">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-brand-dark/60">
                  {product.description}
                </p>

                <div className="mt-4">
                  <span
                    className={
                      product.status === "พร้อมส่ง"
                        ? "inline-flex border border-brand-primary bg-brand-primary px-3 py-1.5 text-xs font-bold text-white"
                        : "inline-flex border border-brand-dark bg-brand-light px-3 py-1.5 text-xs font-bold text-brand-dark"
                    }
                  >
                    {product.status}
                  </span>
                </div>

                <p className="mt-5 border-t border-brand-dark/20 pt-4 text-xs font-semibold text-brand-dark/60">
                  ราคาแจ้งในใบเสนอราคา
                </p>

                <div className="mt-auto flex flex-col gap-2 pt-5">
                  <Link
                    href={`/quote?product=${encodeURIComponent(product.model)}`}
                    className="inline-flex min-h-11 items-center justify-center bg-brand-primary px-4 py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
                  >
                    เพิ่มในใบขอราคา
                  </Link>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex min-h-11 items-center justify-center border-2 border-brand-dark bg-white px-4 py-3 text-center text-sm font-bold text-brand-dark transition-colors duration-200 hover:border-brand-dark hover:bg-brand-dark hover:text-white"
                  >
                    ดูรายละเอียด
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}