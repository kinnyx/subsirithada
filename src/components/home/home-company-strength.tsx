import Link from "next/link";

const strengths = [
  {
    label: "CERTIFIED QUALITY",
    title: "คุณภาพที่พิสูจน์ได้",
    description:
      "สินค้าผ่านการคัดสรรโดยทีมงาน และสามารถประสานงานส่งทดสอบผ่านห้องปฏิบัติการในเครือตามความเหมาะสมของงาน",
  },
  {
    label: "PRECISION MATTERS",
    title: "วัดได้ ไม่ใช่เดา",
    description:
      "ให้ความสำคัญกับการตรวจสอบด้วยเครื่องมือวัดทางมาตรวิทยา เพื่อเพิ่มความมั่นใจก่อนส่งมอบสินค้า",
  },
  {
    label: "MATERIAL KNOWLEDGE",
    title: "เข้าใจวัสดุและสเปก",
    description:
      "ช่วยพิจารณารุ่น คุณสมบัติ และวัสดุให้เหมาะกับเงื่อนไขการใช้งานของลูกค้าและโครงการ",
  },
] as const;

export default function HomeCompanyStrength() {
  return (
    <section className="border-b-2 border-brand-dark bg-brand-light">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-14 sm:py-16 lg:border-r-2 lg:border-brand-dark lg:px-10 lg:py-20">
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              Why Subsirithada
            </p>

            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-5xl">
              คุณภาพที่พิสูจน์ได้ ไม่ใช่แค่คำโฆษณา
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-brand-dark/70">
              เราให้ความสำคัญกับคุณภาพ ความถูกต้องของสเปก
              และการตรวจสอบก่อนส่งมอบ
              พร้อมความเชื่อมโยงด้านองค์ความรู้ทางโลหะวิทยา
              วัสดุศาสตร์ และมาตรวิทยา
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-brand-dark/70">
              จุดมุ่งหมายคือช่วยให้ลูกค้าธุรกิจเลือกสินค้าได้เหมาะกับงาน
              และมีข้อมูลประกอบการตัดสินใจที่ชัดเจนมากขึ้น
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex min-h-12 items-center justify-center border-2 border-brand-dark bg-white px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              อ่านเรื่องของเรา
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          <div className="relative min-h-[340px] overflow-hidden border-t-2 border-brand-dark bg-white lg:min-h-full lg:border-t-0">
            <div className="absolute inset-0">
              <div className="absolute inset-x-0 top-1/3 border-t border-brand-dark/15" />
              <div className="absolute inset-x-0 top-2/3 border-t border-brand-dark/15" />
              <div className="absolute bottom-0 left-1/3 top-0 border-l border-brand-dark/15" />
              <div className="absolute bottom-0 left-2/3 top-0 border-l border-brand-dark/15" />
            </div>

            <div className="relative flex min-h-[340px] h-full flex-col justify-between p-8 sm:p-10 lg:min-h-[500px] lg:p-12">
              <div className="flex items-start justify-between gap-6">
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
                  Quality · Metrology · Material
                </p>

                <span className="font-display text-5xl font-extrabold text-brand-dark/10">
                  17025
                </span>
              </div>

              <div>
                <div className="h-2 w-24 bg-brand-accent" />

                <p className="mt-5 max-w-md font-display text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl">
                  ENGINEERING
                  <span className="block text-brand-primary">
                    CONFIDENCE
                  </span>
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-brand-dark/60">
                  พื้นที่สำหรับภาพห้องปฏิบัติการ เครื่องมือวัด
                  หรือกระบวนการตรวจสอบคุณภาพจริงของบริษัท
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-t-2 border-brand-dark md:grid-cols-3">
          {strengths.map((strength, index) => (
            <article
              key={strength.label}
              className={`p-6 sm:p-8 ${
                index < strengths.length - 1
                  ? "border-b-2 border-brand-dark md:border-b-0 md:border-r-2"
                  : ""
              }`}
            >
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary">
                {strength.label}
              </p>

              <h3 className="mt-3 text-xl font-bold text-brand-dark">
                {strength.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-brand-dark/65">
                {strength.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}