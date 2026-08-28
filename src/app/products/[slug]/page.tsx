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
    specifications: [
      {
        label: "ระบบแบตเตอรี่",
        value: "12Vmax",
      },
      {
        label: "ชุดเครื่องมือ",
        value: "DF333DZ + TD110DZ",
      },
      {
        label: "แบตเตอรี่",
        value: "1.5Ah ×2",
      },
      {
        label: "แท่นชาร์จ",
        value: "DC10WD",
      },
    ],
    documents: [
      {
        type: "Manual",
        title: "คู่มือการใช้งาน",
        fileName: "CLX224X1-manual.pdf",
        description: "คู่มือการใช้งานเครื่องมือภายในชุด",
      },
      {
        type: "Catalog",
        title: "แคตตาล็อกสินค้า",
        fileName: "CLX224X1-catalog.pdf",
        description: "ข้อมูลผลิตภัณฑ์และรายละเอียดของชุดเครื่องมือ",
      },
    ],
    faqs: [
      {
        question: "ชุดนี้มีเครื่องมืออะไรบ้าง?",
        answer:
          "ข้อมูล Mock Data ของหน้านี้ระบุชุดเครื่องมือ DF333DZ และ TD110DZ พร้อมแบตเตอรี่ 12Vmax 1.5Ah จำนวน 2 ก้อน และแท่นชาร์จ DC10WD",
      },
      {
        question: "สามารถขอราคาเป็นจำนวนหลายชุดได้หรือไม่?",
        answer:
          "สามารถระบุจำนวนที่ต้องการในส่วนขอใบเสนอราคาได้ โดยราคาจริงจะได้รับการยืนยันจากทีมงานในใบเสนอราคา",
      },
    ],
    relatedSlugs: [
      "makita-hr166dzx1",
      "makita-dhp485z",
      "makita-ga4031",
    ],
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
    specifications: [
      {
        label: "ระบบแบตเตอรี่",
        value: "12Vmax",
      },
      {
        label: "ขนาด",
        value: "16 มม.",
      },
      {
        label: "ระบบดอก",
        value: "SDS-PLUS",
      },
      {
        label: "ลักษณะงาน",
        value: "งานเจาะคอนกรีต",
      },
    ],
    documents: [
      {
        type: "Manual",
        title: "คู่มือการใช้งาน",
        fileName: "HR166DZX1-manual.pdf",
        description: "คู่มือการใช้งานและข้อควรระวัง",
      },
      {
        type: "Technical PDF",
        title: "ข้อมูลทางเทคนิค",
        fileName: "HR166DZX1-technical.pdf",
        description: "ข้อมูลทางเทคนิคและรายละเอียดผลิตภัณฑ์",
      },
    ],
    faqs: [
      {
        question: "รุ่นนี้รองรับดอกประเภทใด?",
        answer:
          "ข้อมูล Mock Data ของหน้านี้ระบุว่ารองรับระบบดอก SDS-PLUS",
      },
      {
        question: "เหมาะกับลักษณะงานแบบใด?",
        answer:
          "ข้อมูลเบื้องต้นใน Mock Data ระบุไว้สำหรับงานเจาะคอนกรีต โดยรายละเอียดการใช้งานจริงควรตรวจสอบจากคู่มือและข้อมูลผู้ผลิตอีกครั้ง",
      },
    ],
    relatedSlugs: [
      "makita-clx224x1",
      "makita-dhp485z",
      "makita-ga4031",
    ],
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
    specifications: [
      {
        label: "แรงบิดสูงสุด",
        value: "50 N·m",
      },
      {
        label: "ระบบไฟ",
        value: "18V",
      },
      {
        label: "ขนาดหัวจับ",
        value: "13 มม.",
      },
      {
        label: "ในกล่อง",
        value: "ตัวเปล่า",
      },
    ],
    documents: [
      {
        type: "Manual",
        title: "คู่มือการใช้งาน",
        fileName: "DHP485Z-manual.pdf",
        description: "คู่มือการใช้งานและข้อควรระวังของสินค้า",
      },
      {
        type: "Catalog",
        title: "แคตตาล็อกสินค้า",
        fileName: "DHP485Z-catalog.pdf",
        description: "ข้อมูลผลิตภัณฑ์สำหรับใช้อ้างอิง",
      },
      {
        type: "Technical PDF",
        title: "ข้อมูลทางเทคนิค",
        fileName: "DHP485Z-technical.pdf",
        description: "ข้อมูลสเปกและรายละเอียดทางเทคนิคของรุ่น",
      },
    ],
    faqs: [
      {
        question: "รุ่นนี้มาพร้อมแบตเตอรี่หรือไม่?",
        answer:
          "ข้อมูล Mock Data ของหน้านี้ระบุว่าเป็นตัวเปล่า ดังนั้นรายละเอียดอุปกรณ์ที่รวมจริงควรตรวจสอบอีกครั้งในใบเสนอราคาและข้อมูลสินค้าก่อนสั่งซื้อ",
      },
      {
        question: "ระบบไฟของรุ่นนี้เป็นเท่าไร?",
        answer:
          "ข้อมูล Specification ที่ใช้ในหน้าตัวอย่างนี้ระบุระบบไฟ 18V",
      },
      {
        question: "สามารถระบุจำนวนก่อนขอราคาได้หรือไม่?",
        answer:
          "ได้ สามารถระบุจำนวนในกล่อง Request for Quotation แล้วส่งต่อไปยังหน้าใบขอราคาได้",
      },
    ],
    relatedSlugs: [
      "makita-clx224x1",
      "makita-hr166dzx1",
      "makita-dvc750lzx1",
    ],
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
    specifications: [
      {
        label: "ขนาดใบ",
        value: "4 นิ้ว",
      },
      {
        label: "ชนิดสวิตช์",
        value: "สวิตช์โยก",
      },
      {
        label: "ลักษณะงาน",
        value: "งานเจียรและตัด",
      },
    ],
    documents: [
      {
        type: "Manual",
        title: "คู่มือการใช้งาน",
        fileName: "GA4031-manual.pdf",
        description: "คู่มือการใช้งานเครื่องเจียรอย่างถูกต้อง",
      },
      {
        type: "Catalog",
        title: "แคตตาล็อกสินค้า",
        fileName: "GA4031-catalog.pdf",
        description: "รายละเอียดและข้อมูลผลิตภัณฑ์",
      },
    ],
    faqs: [
      {
        question: "ขนาดใบที่แสดงในหน้านี้เท่าไร?",
        answer:
          "ข้อมูล Mock Specification ของสินค้ารุ่นนี้ระบุขนาดใบ 4 นิ้ว",
      },
      {
        question: "สินค้ารุ่นนี้จัดอยู่ในงานประเภทใด?",
        answer:
          "ข้อมูลตัวอย่างของหน้านี้จัดไว้สำหรับงานเจียรและตัด โดยการเลือกอุปกรณ์และการใช้งานจริงควรอ้างอิงคู่มือของผู้ผลิต",
      },
    ],
    relatedSlugs: [
      "makita-dhp485z",
      "makita-clx224x1",
      "makita-dvc750lzx1",
    ],
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
    specifications: [
      {
        label: "ประเภท",
        value: "เครื่องดูดฝุ่นไร้สาย",
      },
      {
        label: "ระบบแบตเตอรี่",
        value: "18V",
      },
      {
        label: "ในกล่อง",
        value: "ตัวเปล่า",
      },
    ],
    documents: [
      {
        type: "Manual",
        title: "คู่มือการใช้งาน",
        fileName: "DVC750LZX1-manual.pdf",
        description: "คู่มือการใช้งานและการดูแลรักษา",
      },
      {
        type: "Technical PDF",
        title: "ข้อมูลทางเทคนิค",
        fileName: "DVC750LZX1-technical.pdf",
        description: "รายละเอียดทางเทคนิคสำหรับใช้อ้างอิง",
      },
    ],
    faqs: [
      {
        question: "รุ่นนี้ใช้ระบบแบตเตอรี่เท่าไร?",
        answer:
          "ข้อมูล Mock Data ของหน้านี้ระบุระบบแบตเตอรี่ 18V",
      },
      {
        question: "ภายในกล่องมีแบตเตอรี่หรือไม่?",
        answer:
          "ข้อมูล Mock Specification ระบุว่าเป็นตัวเปล่า รายละเอียดอุปกรณ์ที่รวมจริงต้องยืนยันอีกครั้งจากข้อมูลสินค้าและใบเสนอราคา",
      },
    ],
    relatedSlugs: [
      "makita-dhp485z",
      "makita-ga4031",
      "makita-clx224x1",
    ],
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

  const relatedProducts = product.relatedSlugs.flatMap((relatedSlug) => {
    const relatedProduct = getProductBySlug(relatedSlug);

    return relatedProduct ? [relatedProduct] : [];
  });

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
                      required
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

        <section className="border-b-2 border-brand-dark bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                  Specifications
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                  ข้อมูลทางเทคนิค
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-brand-dark/60">
                  รายละเอียดคุณสมบัติของสินค้าแต่ละรุ่น
                  จะแตกต่างกันตามประเภทสินค้าและลักษณะการใช้งาน
                </p>

                <div className="mt-6 border-l-4 border-brand-accent pl-4">
                  <p className="text-xs leading-6 text-brand-dark/50">
                    ตอนนี้ข้อมูล Specification เป็น Mock Data
                    สำหรับพัฒนาโครงสร้าง UI ก่อนเชื่อมข้อมูลจริงจาก Database
                  </p>
                </div>
              </div>

              <div>
                <div className="border-l-2 border-t-2 border-brand-dark bg-white">
                  <div className="grid border-b-2 border-r-2 border-brand-dark bg-brand-dark text-white sm:grid-cols-[0.42fr_0.58fr]">
                    <div className="px-5 py-4 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 sm:border-r-2 sm:border-white/20">
                      Specification
                    </div>

                    <div className="px-5 py-4 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Value
                    </div>
                  </div>

                  <dl>
                    {product.specifications.map((specification) => (
                      <div
                        key={specification.label}
                        className="grid border-b-2 border-r-2 border-brand-dark sm:grid-cols-[0.42fr_0.58fr]"
                      >
                        <dt className="bg-brand-light px-5 py-4 text-sm font-bold text-brand-dark sm:border-r-2 sm:border-brand-dark">
                          {specification.label}
                        </dt>

                        <dd className="m-0 px-5 py-4 text-sm font-semibold text-brand-dark/70">
                          {specification.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="mt-4 text-xs leading-6 text-brand-dark/45">
                  ข้อมูลสเปกจริงจะต้องตรวจสอบจากข้อมูลสินค้า
                  เอกสารผู้ผลิต หรือข้อมูลที่ผู้ดูแลระบบบันทึกใน CMS
                  ก่อนนำไปใช้บน Production
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-brand-dark bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                  Documents
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                  คู่มือและเอกสาร
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-brand-dark/60">
                  เอกสารสำหรับใช้อ้างอิงข้อมูลสินค้า
                  การใช้งาน และรายละเอียดทางเทคนิค
                </p>

                <div className="mt-6 border-l-4 border-brand-accent pl-4">
                  <p className="text-xs leading-6 text-brand-dark/50">
                    ตอนนี้รายการเอกสารเป็น Mock Data
                    และยังไม่มีไฟล์จริงสำหรับดาวน์โหลด
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-t-2 border-brand-dark">
                {product.documents.map((document, index) => (
                  <article
                    key={`${document.type}-${document.fileName}`}
                    className={`grid gap-5 border-b-2 border-r-2 border-brand-dark p-5 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:p-6 ${
                      index % 2 === 0 ? "bg-brand-light" : "bg-white"
                    }`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center border-2 border-brand-dark bg-white">
                      <span className="font-display text-xs font-extrabold uppercase tracking-[0.12em] text-brand-primary">
                        PDF
                      </span>
                    </div>

                    <div>
                      <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                        {document.type}
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-brand-dark">
                        {document.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-brand-dark/60">
                        {document.description}
                      </p>

                      <p className="mt-3 break-all font-display text-[10px] font-semibold tracking-[0.08em] text-brand-dark/40">
                        {document.fileName}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-flex border-2 border-brand-dark/25 bg-white px-4 py-3 text-xs font-bold text-brand-dark/45">
                        ยังไม่มีไฟล์จริง
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6 border-2 border-dashed border-brand-dark/25 bg-brand-light p-5">
              <p className="text-xs leading-6 text-brand-dark/50">
                เมื่อระบบ Media Management และ Product Document พร้อม
                ปุ่มดาวน์โหลดจะเชื่อมกับไฟล์จริงที่ผู้ดูแลระบบอัปโหลด
                โดยไม่สร้าง URL หรือเอกสารตัวอย่างปลอมขึ้นมาในขั้นตอนนี้
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-brand-dark bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                  FAQ
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                  คำถามที่พบบ่อย
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-brand-dark/60">
                  รวมคำถามเบื้องต้นที่เกี่ยวข้องกับสินค้า
                  เพื่อช่วยตรวจสอบข้อมูลก่อนส่งรายการขอใบเสนอราคา
                </p>

                <div className="mt-6 border-l-4 border-brand-accent pl-4">
                  <p className="text-xs leading-6 text-brand-dark/50">
                    ตอนนี้ข้อมูล FAQ เป็น Mock Data
                    และต้องตรวจสอบคำตอบจริงก่อนนำไปใช้บน Production
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-t-2 border-brand-dark bg-white">
                {product.faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group border-b-2 border-r-2 border-brand-dark"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-5 sm:px-6 sm:py-6">
                      <span className="mt-0.5 font-display text-xs font-extrabold text-brand-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1 text-base font-bold leading-7 text-brand-dark">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-brand-dark font-display text-lg font-bold leading-none text-brand-dark group-open:bg-brand-dark group-open:text-white"
                      >
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>
                    </summary>

                    <div className="border-t-2 border-brand-dark bg-brand-light px-5 py-5 sm:px-6">
                      <div className="grid gap-4 sm:grid-cols-[32px_1fr]">
                        <span className="font-display text-xs font-extrabold text-brand-accent">
                          A.
                        </span>

                        <p className="m-0 max-w-3xl text-sm leading-7 text-brand-dark/65">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-brand-dark bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <div className="flex flex-col gap-5 border-b-2 border-brand-dark pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
                  Related Products
                </p>

                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
                  สินค้าที่เกี่ยวข้อง
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-dark/60">
                  สินค้ารุ่นอื่นที่อาจใช้ประกอบการเปรียบเทียบ
                  หรือเลือกเพิ่มเติมสำหรับรายการขอใบเสนอราคา
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex min-h-12 w-fit items-center justify-center border-2 border-brand-dark px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
              >
                ดูสินค้าทั้งหมด
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <article
                  key={relatedProduct.slug}
                  className="flex flex-col border-2 border-brand-dark bg-white"
                >
                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="group block"
                  >
                    <div className="relative flex aspect-[5/3] items-center justify-center overflow-hidden border-b-2 border-brand-dark bg-brand-light px-5">
                      <span className="font-display text-4xl font-extrabold tracking-tight text-brand-dark/10">
                        {relatedProduct.model}
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
                      {relatedProduct.brand} · {relatedProduct.model}
                    </p>

                    <h3 className="mt-3 text-lg font-bold leading-7 text-brand-dark">
                      <Link
                        href={`/products/${relatedProduct.slug}`}
                        className="transition-colors hover:text-brand-primary"
                      >
                        {relatedProduct.name}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-brand-dark/60">
                      {relatedProduct.shortDescription}
                    </p>

                    <div className="mt-5">
                      <span
                        className={`inline-flex border px-3 py-1.5 text-xs font-bold ${getStatusClass(
                          relatedProduct.status,
                        )}`}
                      >
                        {relatedProduct.status}
                      </span>
                    </div>

                    <p className="mt-5 border-t border-brand-dark/20 pt-4 text-xs font-semibold text-brand-dark/50">
                      ราคาแจ้งในใบเสนอราคา
                    </p>

                    <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
                      <Link
                        href={`/products/${relatedProduct.slug}`}
                        className="inline-flex min-h-12 items-center justify-center border-2 border-brand-dark bg-white px-4 py-3 text-center text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
                      >
                        ดูรายละเอียด
                      </Link>

                      <Link
                        href={`/quote?product=${encodeURIComponent(
                          relatedProduct.model,
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

            <div className="mt-6 border-l-4 border-brand-accent pl-4">
              <p className="text-xs leading-6 text-brand-dark/50">
                ตอนนี้ความสัมพันธ์ของสินค้าเป็น Mock Data
                และกำหนดผ่าน Related Slug ก่อนเชื่อม Product Relation
                จาก Database ในภายหลัง
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-light">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="border-l-4 border-brand-accent pl-5">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                Product Detail
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-brand-dark/60">
                Product Detail Foundation, Specifications, Documents, FAQ
                และ Related Products มีโครงสร้างพื้นฐานครบแล้ว
                โดยข้อมูลทั้งหมดจะทยอยเปลี่ยนจาก Mock Data เป็น Database
                ใน Phase ถัดไป
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}