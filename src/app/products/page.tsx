import type { Metadata } from "next";
import Link from "next/link";

import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "สินค้า",
  description:
    "แคตตาล็อกสินค้า SUBSIRITHADA รวมเครื่องมือช่าง อุปกรณ์ฮาร์ดแวร์ และวัสดุสำหรับงานธุรกิจและงานโครงการ",
};

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
    slug: "safety",
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
    slug: "electrical",
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
  {
    number: "13",
    name: "งานบริการ",
    slug: "services",
  },
] as const;

const products = [
  {
    brand: "MAKITA",
    model: "CLX224X1",
    name: "คอมโบเซ็ต สว่านเจาะไร้สาย + ไขควงกระแทกไร้สาย",
    description:
      "DF333DZ + TD110DZ · แบตเตอรี่ 12Vmax 1.5Ah ×2 · แท่นชาร์จ DC10WD",
    status: "พร้อมส่ง",
    slug: "makita-clx224x1",
    categoryName: "เครื่องมือไฟฟ้า",
    categorySlug: "power-tools",
  },
  {
    brand: "MAKITA",
    model: "HR166DZX1",
    name: "สว่านโรตารี่ไร้สาย 12Vmax 16 มม.",
    description: "สำหรับงานเจาะคอนกรีต · รองรับดอก SDS-PLUS",
    status: "พร้อมส่ง",
    slug: "makita-hr166dzx1",
    categoryName: "เครื่องมือไฟฟ้า",
    categorySlug: "power-tools",
  },
  {
    brand: "MAKITA",
    model: "DHP485Z",
    name: "สว่านกระแทกไร้สาย 18V 13 มม.",
    description: "แรงบิดสูงสุด 50 N·m · ตัวเปล่า",
    status: "พร้อมส่ง",
    slug: "makita-dhp485z",
    categoryName: "เครื่องมือไฟฟ้า",
    categorySlug: "power-tools",
  },
  {
    brand: "MAKITA",
    model: "GA4031",
    name: "เครื่องเจียร 4 นิ้ว สวิตช์โยก",
    description: "สำหรับงานเจียรและตัด · รุ่นใช้งานหนัก",
    status: "พร้อมส่ง",
    slug: "makita-ga4031",
    categoryName: "เครื่องมือไฟฟ้า",
    categorySlug: "power-tools",
  },
  {
    brand: "MAKITA",
    model: "DVC750LZX1",
    name: "เครื่องดูดฝุ่นไร้สาย 18V",
    description:
      "ใช้แบตเตอรี่ร่วมกับกลุ่มเครื่องมือ MAKITA 18V · ตัวเปล่า",
    status: "สั่งเข้า 3–5 วัน",
    slug: "makita-dvc750lzx1",
    categoryName: "เครื่องมือทำความสะอาด",
    categorySlug: "cleaning-tools",
  },
] as const;

type ProductUrlOptions = {
  query?: string;
  category?: string;
};

function getStatusClass(status: string) {
  if (status === "พร้อมส่ง") {
    return "border-brand-primary bg-brand-primary text-white";
  }

  return "border-brand-dark bg-brand-light text-brand-dark";
}

function productMatchesSearch(
  product: (typeof products)[number],
  query: string,
) {
  const searchableText = [
    product.brand,
    product.model,
    product.name,
    product.description,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(query);
}

function normalizeSearchParam(
  value: string | string[] | undefined,
) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

function buildProductsUrl({
  query = "",
  category = "",
}: ProductUrlOptions) {
  const params = new URLSearchParams();

  if (query.trim()) {
    params.set("q", query.trim());
  }

  if (category.trim()) {
    params.set("category", category.trim());
  }

  const queryString = params.toString();

  return queryString
    ? `/products?${queryString}`
    : "/products";
}

function getCategoryProductCount(categorySlug: string) {
  return products.filter(
    (product) => product.categorySlug === categorySlug,
  ).length;
}

export default async function ProductsPage({
  searchParams,
}: PageProps<"/products">) {
  const params = await searchParams;

  const rawQuery = normalizeSearchParam(params.q);
  const rawCategory = normalizeSearchParam(params.category);

  const searchQuery = rawQuery.trim();
  const normalizedQuery = searchQuery.toLowerCase();

  const selectedCategory = categories.find(
    (category) => category.slug === rawCategory.trim(),
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !normalizedQuery ||
      productMatchesSearch(product, normalizedQuery);

    const matchesCategory =
      !selectedCategory ||
      product.categorySlug === selectedCategory.slug;

    return matchesSearch && matchesCategory;
  });

  const hasSearch = searchQuery.length > 0;
  const hasCategory = Boolean(selectedCategory);
  const hasFilters = hasSearch || hasCategory;

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

              <span className="text-brand-dark">
                สินค้า
              </span>
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

        <section className="border-b-2 border-brand-dark bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Product Search
                </p>

                <h2 className="mt-2 font-display text-2xl font-extrabold text-brand-dark sm:text-3xl">
                  ค้นหาสินค้า
                </h2>

                <p className="mt-3 text-sm leading-7 text-brand-dark/55">
                  ค้นหาจากชื่อสินค้า แบรนด์ หรือรหัสรุ่น
                </p>
              </div>

              {hasFilters && (
                <Link
                  href="/products"
                  className="inline-flex min-h-12 w-fit items-center justify-center border-2 border-brand-dark bg-white px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
                >
                  ล้างทั้งหมด
                </Link>
              )}
            </div>

            <form
              action="/products"
              method="get"
              role="search"
              className="mt-6"
            >
              {selectedCategory && (
                <input
                  type="hidden"
                  name="category"
                  value={selectedCategory.slug}
                />
              )}

              <label
                htmlFor="product-search"
                className="sr-only"
              >
                ค้นหาสินค้า
              </label>

              <div className="grid border-2 border-brand-dark bg-white sm:grid-cols-[1fr_auto]">
                <input
                  id="product-search"
                  name="q"
                  type="search"
                  defaultValue={searchQuery}
                  placeholder="ค้นหาสินค้า หรือรหัสรุ่น"
                  autoComplete="off"
                  className="min-h-14 w-full bg-white px-5 text-base font-semibold text-brand-dark outline-none placeholder:font-normal placeholder:text-brand-dark/35 focus:bg-brand-light"
                />

                <button
                  type="submit"
                  className="min-h-14 border-t-2 border-brand-dark bg-brand-primary px-8 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:border-l-2 sm:border-t-0"
                >
                  ค้นหา
                </button>
              </div>
            </form>

            {hasFilters && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-sm font-semibold text-brand-dark/50">
                  ตัวกรอง:
                </span>

                {hasSearch && (
                  <div className="inline-flex items-center border border-brand-dark bg-brand-light">
                    <span className="px-3 py-1.5 text-xs font-bold text-brand-dark">
                      ค้นหา: {searchQuery}
                    </span>

                    <Link
                      href={buildProductsUrl({
                        category: selectedCategory?.slug,
                      })}
                      aria-label="ล้างคำค้นหา"
                      className="border-l border-brand-dark px-3 py-1.5 text-xs font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
                    >
                      ×
                    </Link>
                  </div>
                )}

                {selectedCategory && (
                  <div className="inline-flex items-center border border-brand-primary bg-brand-primary text-white">
                    <span className="px-3 py-1.5 text-xs font-bold">
                      หมวด: {selectedCategory.name}
                    </span>

                    <Link
                      href={buildProductsUrl({
                        query: searchQuery,
                      })}
                      aria-label="ล้างตัวกรองหมวดหมู่"
                      className="border-l border-white/40 px-3 py-1.5 text-xs font-bold transition-colors hover:bg-white hover:text-brand-dark"
                    >
                      ×
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
              <aside className="border-2 border-brand-dark bg-white">
                <div className="border-b-2 border-brand-dark bg-brand-dark p-5 text-white">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                    Category Filter
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    หมวดหมู่
                  </h2>
                </div>

                <nav
                  aria-label="Product categories"
                  className="grid grid-cols-2 gap-px bg-brand-dark/20 p-px lg:grid-cols-1"
                >
                  <Link
                    href={buildProductsUrl({
                      query: searchQuery,
                    })}
                    aria-current={
                      !selectedCategory ? "page" : undefined
                    }
                    className={`flex min-h-14 items-center justify-between gap-3 px-4 py-3 text-sm transition-colors ${
                      !selectedCategory
                        ? "bg-brand-primary font-bold text-white"
                        : "bg-white font-semibold text-brand-dark hover:bg-brand-light"
                    }`}
                  >
                    <span>ทั้งหมด</span>

                    <span
                      className={`font-display text-xs font-bold ${
                        !selectedCategory
                          ? "text-white/70"
                          : "text-brand-dark/35"
                      }`}
                    >
                      {products.length}
                    </span>
                  </Link>

                  {categories.map((category) => {
                    const isActive =
                      selectedCategory?.slug === category.slug;

                    const productCount =
                      getCategoryProductCount(category.slug);

                    return (
                      <Link
                        key={category.slug}
                        href={buildProductsUrl({
                          query: searchQuery,
                          category: category.slug,
                        })}
                        aria-current={
                          isActive ? "page" : undefined
                        }
                        className={`flex min-h-14 items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          isActive
                            ? "bg-brand-primary font-bold text-white"
                            : "bg-white font-semibold text-brand-dark hover:bg-brand-light"
                        }`}
                      >
                        <span
                          className={`font-display text-[10px] font-bold ${
                            isActive
                              ? "text-white/60"
                              : "text-brand-primary"
                          }`}
                        >
                          {category.number}
                        </span>

                        <span className="min-w-0 flex-1 leading-5">
                          {category.name}
                        </span>

                        <span
                          className={`font-display text-xs font-bold ${
                            isActive
                              ? "text-white/70"
                              : "text-brand-dark/35"
                          }`}
                        >
                          {productCount}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="border-t-2 border-brand-dark bg-brand-light p-4">
                  <p className="text-xs leading-6 text-brand-dark/50">
                    จำนวนสินค้าในแต่ละหมวดเป็น Mock Data
                    จาก Catalog ตัวอย่างในขั้นตอนนี้
                  </p>
                </div>
              </aside>

              <div className="min-w-0">
                <div className="flex flex-col gap-4 border-b-2 border-brand-dark pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                      Catalog
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-extrabold text-brand-dark sm:text-3xl">
                      {selectedCategory
                        ? selectedCategory.name
                        : hasSearch
                          ? "ผลการค้นหา"
                          : "รายการสินค้า"}
                    </h2>
                  </div>

                  <div className="sm:text-right">
                    <p className="text-sm font-semibold text-brand-dark/50">
                      {hasFilters
                        ? `พบ ${filteredProducts.length} จาก ${products.length} รายการ`
                        : `แสดง ${products.length} รายการ`}
                    </p>

                    {selectedCategory && (
                      <p className="mt-1 text-xs font-semibold text-brand-primary">
                        หมวด {selectedCategory.number}
                      </p>
                    )}
                  </div>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
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
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                              {product.brand} · {product.model}
                            </p>

                            <span className="text-brand-dark/20">
                              /
                            </span>

                            <p className="text-[10px] font-semibold text-brand-dark/45">
                              {product.categoryName}
                            </p>
                          </div>

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
                ) : (
                  <div className="mt-8 border-2 border-brand-dark bg-brand-light">
                    <div className="p-6 sm:p-8 lg:p-10">
                      <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
                        No Results
                      </p>

                      <h3 className="mt-3 font-display text-2xl font-extrabold text-brand-dark sm:text-3xl">
                        ไม่พบสินค้าที่ตรงกับเงื่อนไข
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-dark/60">
                        ตอนนี้ไม่มีสินค้าใน Mock Data
                        ที่ตรงกับคำค้นหาหรือหมวดหมู่ที่เลือก
                        ลองเปลี่ยนคำค้นหา
                        หรือเลือกหมวดหมู่อื่น
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {selectedCategory && (
                          <Link
                            href={buildProductsUrl({
                              query: searchQuery,
                            })}
                            className="inline-flex min-h-12 items-center justify-center border-2 border-brand-dark bg-white px-5 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
                          >
                            ล้างหมวดหมู่
                          </Link>
                        )}

                        <Link
                          href="/products"
                          className="inline-flex min-h-12 items-center justify-center bg-brand-dark px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85"
                        >
                          ดูสินค้าทั้งหมด
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 border-2 border-dashed border-brand-dark/30 bg-brand-light p-5">
                  <p className="text-sm leading-7 text-brand-dark/60">
                    ตอนนี้ข้อมูลเป็น Mock Data — Search และ Category
                    Filter ทำงานร่วมกันผ่าน URL Query Parameter
                    ส่วน Brand Filter, Stock Filter, Sort,
                    Grid/List และ Pagination
                    จะเพิ่มแยกทีละ Step
                    ก่อนเชื่อมข้อมูลจริงจาก Database
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}