import Link from "next/link";

const services = [
  {
    number: "01",
    label: "QUALITY INSPECTION",
    title: "ตรวจคุณภาพก่อนส่งมอบ",
    description:
      "เพิ่มความมั่นใจก่อนส่งสินค้า ด้วยการตรวจสอบคุณภาพและความถูกต้องด้วยเครื่องมือวัดทางมาตรวิทยา",
  },
  {
    number: "02",
    label: "LABORATORY SUPPORT",
    title: "ประสานงานทดสอบตามมาตรฐาน",
    description:
      "รองรับการประสานงานส่งทดสอบผ่านห้องปฏิบัติการในเครือที่ได้รับรองมาตรฐาน ISO/IEC 17025 ตามความเหมาะสมของงาน",
  },
  {
    number: "03",
    label: "TECHNICAL SUPPORT",
    title: "ช่วยแนะนำสเปกและวัสดุ",
    description:
      "ช่วยเทียบรุ่น สเปก และคุณสมบัติของวัสดุ เพื่อให้เหมาะกับลักษณะงานและเงื่อนไขของโครงการ",
  },
] as const;

export default function HomeServices() {
  return (
    <section className="border-b-2 border-brand-dark bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">
                One Stop Service
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                มากกว่าการขายสินค้า
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
                เราช่วยตั้งแต่การเลือกสินค้า ตรวจสอบคุณภาพ
                ไปจนถึงการประสานงานด้านเทคนิค
                เพื่อให้ลูกค้าได้สินค้าและสเปกที่เหมาะกับงานจริง
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center border-2 border-brand-accent bg-brand-accent px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-white hover:text-brand-dark"
              >
                ดูงานบริการทั้งหมด
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="border-l-2 border-t-2 border-white/30">
            {services.map((service) => (
              <div
                key={service.number}
                className="grid gap-5 border-b-2 border-r-2 border-white/30 p-6 sm:grid-cols-[80px_1fr] sm:p-8"
              >
                <div>
                  <span className="font-display text-3xl font-extrabold text-brand-accent">
                    {service.number}
                  </span>
                </div>

                <div>
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {service.label}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}