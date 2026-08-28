import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

const products = [
  {
    brand: "MAKITA",
    model: "CLX224X1",
    name: "คอมโบเซ็ต สว่านเจาะไร้สาย + ไขควงกระแทกไร้สาย",
    shortDescription:
      "DF333DZ + TD110DZ · แบตเตอรี่ 12Vmax 1.5Ah ×2 · แท่นชาร์จ DC10WD",
    description:
      "ชุดเครื่องมือไร้สายสำหรับงานช่างที่ต้องการทั้งงานเจาะและงานขันในชุดเดียว เหมาะสำหรับนำไปใช้เป็นชุดเครื่องมือประจำงานหรือสำหรับงานภาคสนาม",
    status: "พร้อมส่ง",
    category: "เครื่องมือไฟฟ้า",
    slug: "makita-clx224x1",
  },
  {
    brand: "MAKITA",
    model: "HR166DZX1",
    name: "สว่านโรตารี่ไร้สาย 12Vmax 16 มม.",
    shortDescription: "สำหรับงานเจาะคอนกรีต · รองรับดอก SDS-PLUS",
    description:
      "สว่านโรตารี่ไร้สายขนาดกะทัดรัดสำหรับงานเจาะ เหมาะกับงานที่ต้องการความคล่องตัวและใช้งานร่วมกับระบบแบตเตอรี่ 12Vmax",
    status: "พร้อมส่ง",
    category: "เครื่องมือไฟฟ้า",
    slug: "makita-hr166dzx1",
  },
  {
    brand: "MAKITA",
    model: "DHP485Z",
    name: "สว่านกระแทกไร้สาย 18V 13 มม.",
    shortDescription: "แรงบิดสูงสุด 50 N·m · ตัวเปล่า",
    description:
      "สว่านกระแทกไร้สายสำหรับงานเจาะและขันสกรู รองรับงานช่างและงานติดตั้งที่ต้องการเครื่องมือในระบบแบตเตอรี่ 18V",
    status: "พร้อมส่ง",
    category: "เครื่องมือไฟฟ้า",
    slug: "makita-dhp485z",
  },
  {
    brand: "MAKITA",
    model: "GA4031",
    name: "เครื่องเจียร 4 นิ้ว สวิตช์โยก",
    shortDescription: "สำหรับงานเจียรและตัด · รุ่นใช้งานหนัก",
    description:
      "เครื่องเจียรสำหรับงานตัดและงานเจียรทั่วไป เหมาะกับงานช่าง งานติดตั้ง และงานที่ต้องใช้เครื่องมือขนาดกะทัดรัด",
    status: "พร้อมส่ง",
    category: "เครื่องมือไฟฟ้า",
    slug: "makita-ga4031",
  },
  {
    brand: "MAKITA",
    model: "DVC750LZX1",
    name: "เครื่องดูดฝุ่นไร้สาย 18V",
    shortDescription:
      "ใช้แบตเตอรี่ร่วมกับกลุ่มเครื่องมือ MAKITA 18V · ตัวเปล่า",
    description:
      "เครื่องดูดฝุ่นไร้สายสำหรับงานทำความสะอาดพื้นที่ทำงาน รองรับการใช้งานร่วมกับระบบแบตเตอรี่ 18V",
    status: "สั่งเข้า 3–5 วัน",
    category: "เครื่องมือทำความสะอาด",
    slug: "makita-dvc750lzx1",
  },
] as const;

function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

function getStatusClass(status: string) {
  if (status === "พร้อมส่ง") {
    return "border-brand-primary bg-brand-primary text-white";
  }

  return "border-brand-dark bg-brand-light text-brand-dark";
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "ไม่พบสินค้า",
    };
  }

  return {
    title: `${product.brand} ${product.model}`,
    description: `${product.name} — ${product.shortDescription}`,
  };
}

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="bg-white">
        <section className="border-b-2 border-brand-dark bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-dark/50"
            >
              <Link
                href="/"
                className="transition-colors hover:text-brand-primary"
              >
                หน้าแรก
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/products"
                className="transition-colors hover:text-brand-primary"
              >
                สินค้า
              </Link>

              <span aria-hidden="true">/</span>

              <span>{product.category}</span>

              <span aria-hidden="true">/</span>

              <span className="text-brand-dark">
                {product.brand} {product.model}
              </span>
            </nav>
          </div>
        </section>

        <section className="border-b-2 border-brand-dark">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b-2 border-brand-dark p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10">
              <div className="relative flex aspect-[31/20] items-center justify-center overflow-hidden border-2 border-brand-dark bg-brand-light">
                <span className="font-display text-5xl font-extrabold tracking-tight text-brand-dark/10 sm:text-6xl">
                  {product.model}
                </span>

                <span className="absolute left-4 top-4 bg-brand-dark px-3 py-2 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                  Main Product Image
                </span>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-16 w-16 bg-brand-accent"
                />
              </div>

              <div className="mt-3 grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((imageNumber) => (
                  <div
                    key={imageNumber}
                    className={`flex aspect-[4/3] items-center justify-center bg-brand-light ${
                      imageNumber === 1
                        ? "border-2 border-brand-primary"
                        : "border-2 border-brand-dark/25"
                    }`}
                  >
                    <span className="font-display text-xs font-bold text-brand-dark/30">
                      {String(imageNumber).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-6 text-brand-dark/45">
                ตอนนี้รูปสินค้าเป็น Placeholder
                และ Thumbnail ยังไม่สามารถกดสลับรูปได้
              </p>
            </div>

            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex border px-3 py-1.5 text-xs font-bold ${getStatusClass(
                    product.status,
                  )}`}
                >
                  {product.status}
                </span>

                <span className="inline-flex border border-brand-dark/25 px-3 py-1.5 text-xs font-semibold text-brand-dark/60">
                  {product.category}
                </span>
              </div>

              <p className="mt-7 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
                {product.brand} · {product.model}
              </p>

              <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-brand-dark/70">
                {product.shortDescription}
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-brand-dark/60 sm:text-base">
                {product.description}
              </p>

              <div className="mt-8 border-y-2 border-brand-dark py-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Pricing
                </p>

                <p className="mt-2 text-2xl font-bold text-brand-dark">
                  ราคาแจ้งในใบเสนอราคา
                </p>

                <p className="mt-2 text-sm leading-6 text-brand-dark/55">
                  ตีราคาตามปริมาณ สเปกสินค้า
                  และเงื่อนไขการจัดส่งของแต่ละงาน
                </p>
              </div>

              <form
                action="/quote"
                method="get"
                className="mt-8 border-2 border-brand-dark"
              >
                <input
                  type="hidden"
                  name="product"
                  value={product.model}
                />

                <div className="border-b-2 border-brand-dark bg-brand-light p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                    Request for Quotation
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-brand-dark">
                    เพิ่มสินค้าในใบขอราคา
                  </h2>
                </div>

                <div className="p-5">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-bold text-brand-dark"
                  >
                    จำนวนที่ต้องการ
                  </label>

                  <div className="mt-3 grid gap-3 sm:grid-cols-[140px_1fr]">
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      defaultValue="1"
                      inputMode="numeric"
                      className="min-h-14 w-full border-2 border-brand-dark bg-white px-4 text-base font-bold text-brand-dark outline-none focus:border-brand-primary"
                    />

                    <button
                      type="submit"
                      className="min-h-14 bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                    >
                      เพิ่มในใบขอราคา
                    </button>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-brand-dark/50">
                    ขั้นตอนนี้ยังไม่ได้บันทึก RFQ จริง
                    ระบบจะพาไปหน้าใบขอราคาพร้อมรหัสรุ่นและจำนวนที่ระบุ
                  </p>
                </div>
              </form>

              <Link
                href="/products"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-dark"
              >
                ← กลับไปสินค้าทั้งหมด
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="border-l-4 border-brand-accent pl-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                Next Development
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-brand-dark/60">
                Specifications, เอกสารดาวน์โหลด, FAQ และสินค้าที่เกี่ยวข้อง
                จะพัฒนาแยกทีละ Step หลัง Product Detail Foundation ผ่านแล้ว
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}