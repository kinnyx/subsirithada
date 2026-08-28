import Link from "next/link";

const featuredArticle = {
  type: "ความรู้ช่าง",
  title: "เหล็กมี มอก. กับไม่มี มอก. ต่างกันตรงไหนในหน้างานจริง",
  excerpt:
    "กำลังรับแรงดึง ความสม่ำเสมอของหน้าตัด และการตรวจรับของผู้คุมงาน คือปัจจัยสำคัญที่ควรพิจารณาก่อนเลือกใช้เหล็กในงานโครงการ",
  slug: "steel-tis-vs-non-tis",
} as const;

const articles = [
  {
    type: "ความรู้ช่าง",
    title: "เลือกไลน์แบตเตอรี่ MAKITA 12Vmax หรือ 18V ให้เหมาะกับงาน",
    slug: "makita-12vmax-vs-18v",
    number: "01",
  },
  {
    type: "ความรู้ช่าง",
    title: "ท่อ PVC กับ PPR ใช้งานต่างกันอย่างไร",
    slug: "pvc-vs-ppr",
    number: "02",
  },
  {
    type: "ข่าวสาร",
    title: "ทำความรู้จักกลุ่มสินค้า SPC Flooring สำหรับงานตกแต่งพื้น",
    slug: "spc-flooring-product-line",
    number: "03",
  },
] as const;

export default function HomeNews() {
  return (
    <section className="border-b-2 border-brand-dark bg-brand-light">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-5 border-b-2 border-brand-dark pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              News &amp; Articles
            </p>

            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
              ข่าวสารและบทความ
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-dark/65 sm:text-base">
              ความรู้ด้านเครื่องมือ วัสดุ และข้อมูลที่ช่วยให้เลือกสินค้า
              และวางแผนงานได้เหมาะสมยิ่งขึ้น
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-primary transition-colors hover:text-brand-dark"
          >
            ดูบทความทั้งหมด
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid border-2 border-brand-dark bg-white lg:grid-cols-[1.4fr_0.6fr]">
          <article className="border-b-2 border-brand-dark lg:border-b-0 lg:border-r-2">
            <Link
              href={`/news/${featuredArticle.slug}`}
              className="group block h-full"
            >
              <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-b-2 border-brand-dark bg-brand-dark sm:min-h-80">
                <div className="absolute inset-0">
                  <div className="absolute inset-x-0 top-1/3 border-t border-white/10" />
                  <div className="absolute inset-x-0 top-2/3 border-t border-white/10" />
                  <div className="absolute bottom-0 left-1/3 top-0 border-l border-white/10" />
                  <div className="absolute bottom-0 left-2/3 top-0 border-l border-white/10" />
                </div>

                <div className="relative text-center">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                    Featured Article
                  </p>

                  <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-white/10 sm:text-6xl">
                    KNOWLEDGE
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-12 w-12 bg-brand-accent transition-transform duration-200 group-hover:scale-125"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="inline-flex border border-brand-primary bg-brand-primary px-3 py-1.5 text-xs font-bold text-white">
                  {featuredArticle.type}
                </span>

                <h3 className="mt-5 max-w-3xl font-display text-2xl font-extrabold leading-tight tracking-tight text-brand-dark transition-colors group-hover:text-brand-primary sm:text-3xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-dark/65 sm:text-base">
                  {featuredArticle.excerpt}
                </p>

                <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
                  อ่านบทความ
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          </article>

          <div className="flex flex-col">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className={`group flex flex-1 gap-5 p-6 transition-colors hover:bg-brand-light sm:p-7 ${
                  index < articles.length - 1
                    ? "border-b-2 border-brand-dark"
                    : ""
                }`}
              >
                <span className="shrink-0 font-display text-xs font-bold tracking-[0.16em] text-brand-dark/35">
                  {article.number}
                </span>

                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-brand-primary">
                    {article.type}
                  </p>

                  <h3 className="mt-2 text-base font-bold leading-6 text-brand-dark transition-colors group-hover:text-brand-primary sm:text-lg">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs font-bold text-brand-dark/40">
                    อ่านต่อ →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-start gap-3">
          <div className="mt-2 h-2 w-2 shrink-0 bg-brand-primary" />

          <p className="max-w-3xl text-xs leading-6 text-brand-dark/50">
            บทความและภาพประกอบในส่วนนี้เป็น Mock Content สำหรับพัฒนา UI
            และจะเปลี่ยนเป็นข้อมูลจาก News Management เมื่อระบบ CMS พร้อม
          </p>
        </div>
      </div>
    </section>
  );
}