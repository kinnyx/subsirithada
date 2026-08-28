import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "สินค้า",
  description:
    "แคตตาล็อกสินค้า SUBSIRITHADA รวมเครื่องมือช่าง อุปกรณ์ฮาร์ดแวร์ และวัสดุสำหรับงานธุรกิจและงานโครงการ",
};

const products = [
  {
    brand: "MAKITA",
    model: "CLX224X1",
    name: "คอมโบเซ็ต สว่านเจาะไร้สาย + ไขควงกระแทกไร้สาย",
    description:
      "DF333DZ + TD110DZ · แบตเตอรี่ 12Vmax 1.5Ah ×2 · แท่นชาร์จ DC10WD",
    status: "พร้อมส่ง",
    slug: "makita-clx224x1",
  },
  {
    brand: "MAKITA",
    model: "HR166DZX1",
    name: "สว่านโรตารี่ไร้สาย 12Vmax 16 มม.",
    description: "สำหรับงานเจาะคอนกรีต · รองรับดอก SDS-PLUS",
    status: "พร้อมส่ง",
    slug: "makita-hr166dzx1",
  },
  {
    brand: "MAKITA",
    model: "DHP485Z",
    name: "สว่านกระแทกไร้สาย 18V 13 มม.",
    description: "แรงบิดสูงสุด 50 N·m · ตัวเปล่า",
    status: "พร้อมส่ง",
    slug: "makita-dhp485z",
  },
  {
    brand: "MAKITA",
    model: "GA4031",
    name: "เครื่องเจียร 4 นิ้ว สวิตช์โยก",
    description: "สำหรับงานเจียรและตัด · รุ่นใช้งานหนัก",
    status: "พร้อมส่ง",
    slug: "makita-ga4031",
  },
  {
    brand: "MAKITA",
    model: "DVC750LZX1",
    name: "เครื่องดูดฝุ่นไร้สาย 18V",
    description: "ใช้แบตเตอรี่ร่วมกับกลุ่มเครื่องมือ MAKITA 18V · ตัวเปล่า",
    status: "สั่งเข้า 3–5 วัน",
    slug: "makita-dvc750lzx1",
  },
] as const;

function getStatusClass(status: string) {
  if (status === "พร้อมส่ง") {
    return "border-brand-primary bg-brand-primary text-white";
  }

  return "border-brand-dark bg-brand-light text-brand-dark";
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="border-b-2 border-brand-dark bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-semibold text-brand-dark/50"
            >
              <Link
                href="/"
                className="transition-colors hover:text-brand-primary"
              >
                หน้าแรก
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-brand-dark">สินค้า</span>
            </nav>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                  Product Catalog
                </p>

                <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                  สินค้าทั้งหมด
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-brand-dark/65">
                  ค้นหาเครื่องมือช่าง อุปกรณ์ฮาร์ดแวร์
                  และวัสดุสำหรับงานธุรกิจและงานโครงการ
                  พร้อมส่งรายการเพื่อขอใบเสนอราคา
                </p>
              </div>

              <div className="border-l-4 border-brand-accent pl-4">
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-dark/45">
                  Pricing
                </p>

                <p className="mt-1 text-sm font-bold text-brand-dark">
                  ราคาแจ้งในใบเสนอราคา
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <div className="flex flex-col gap-4 border-b-2 border-brand-dark pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Catalog
                </p>

                <h2 className="mt-2 font-display text-2xl font-extrabold text-brand-dark sm:text-3xl">
                  รายการสินค้า
                </h2>
              </div>

              <p className="text-sm font-semibold text-brand-dark/50">
                แสดง {products.length} รายการ
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.model}
                  className="flex flex-col border-2 border-brand-dark bg-white"
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden border-b-2 border-brand-dark bg-brand-light px-5">
                      <span className="font-display text-4xl font-extrabold tracking-tight text-brand-dark/10">
                        {product.model}
                      </span>

                      <span className="absolute left-4 top-4 bg-brand-dark px-2 py-1 font-display text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                        Product Image
                      </span>

                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 right-0 h-10 w-10 bg-brand-accent transition-transform duration-200 group-hover:scale-125"
                      />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                      {product.brand} · {product.model}
                    </p>

                    <h3 className="mt-3 text-lg font-bold leading-7 text-brand-dark">
                      <Link
                        href={`/products/${product.slug}`}
                        className="transition-colors hover:text-brand-primary"
                      >
                        {product.name}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-brand-dark/60">
                      {product.description}
                    </p>

                    <div className="mt-5">
                      <span
                        className={`inline-flex border px-3 py-1.5 text-xs font-bold ${getStatusClass(
                          product.status,
                        )}`}
                      >
                        {product.status}
                      </span>
                    </div>

                    <p className="mt-5 border-t border-brand-dark/20 pt-4 text-xs font-semibold text-brand-dark/50">
                      ราคาแจ้งในใบเสนอราคา
                    </p>

                    <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex min-h-12 items-center justify-center border-2 border-brand-dark bg-white px-4 py-3 text-center text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
                      >
                        ดูรายละเอียด
                      </Link>

                      <Link
                        href={`/quote?product=${encodeURIComponent(
                          product.model,
                        )}`}
                        className="inline-flex min-h-12 items-center justify-center bg-brand-primary px-4 py-3 text-center text-sm font-bold text-white transition-opacity hover:opacity-90"
                      >
                        เพิ่มในใบขอราคา
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 border-2 border-dashed border-brand-dark/30 bg-brand-light p-5">
              <p className="text-sm leading-7 text-brand-dark/60">
                ตอนนี้ข้อมูลเป็น Mock Data — Search, Filter, Sort และ Pagination
                จะเพิ่มทีละ Step ก่อนเชื่อมข้อมูลจริงจาก Database
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}