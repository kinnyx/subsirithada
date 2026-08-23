import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="border-b-2 border-brand-dark bg-brand-light">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.12fr_0.88fr]">
        <div className="px-6 py-16 sm:py-20 lg:py-24 lg:pr-12">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            SUBSIRITHADA CO., LTD.
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
            หาอะไรไม่ได้
            <span className="mt-2 block text-brand-primary">
              นึกถึงเราเป็นคนแรก
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-brand-dark sm:text-xl">
            Hardware Center &amp; One Stop Service
          </p>

          <p className="mt-3 max-w-2xl text-base leading-7 text-brand-dark/70">
            ศูนย์รวมเครื่องมือช่าง อุปกรณ์อุตสาหกรรม วัสดุ
            และโซลูชันสำหรับงานธุรกิจ พร้อมช่วยค้นหาสินค้าที่เหมาะกับงานของคุณ
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center bg-brand-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              ดูสินค้าทั้งหมด
            </Link>

            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center border-2 border-brand-dark bg-brand-accent px-6 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-white"
            >
              ขอใบเสนอราคา
            </Link>
          </div>

          <div className="mt-12 grid border-y-2 border-brand-dark sm:grid-cols-3">
            <div className="border-b border-brand-dark/30 py-4 sm:border-b-0 sm:border-r sm:pr-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                Hardware
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-dark">
                เครื่องมือและอุปกรณ์
              </p>
            </div>

            <div className="border-b border-brand-dark/30 py-4 sm:border-b-0 sm:border-r sm:px-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                Industrial
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-dark">
                รองรับงานอุตสาหกรรม
              </p>
            </div>

            <div className="py-4 sm:pl-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                B2B Service
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-dark">
                ดูแลลูกค้าธุรกิจ
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden border-t-2 border-brand-dark bg-brand-primary lg:min-h-full lg:border-l-2 lg:border-t-0">
          <div className="absolute left-8 right-8 top-8 border-t border-white/30" />
          <div className="absolute left-8 right-8 top-16 border-t border-white/15" />

          <div className="absolute bottom-8 left-8 top-8 border-l border-white/30" />
          <div className="absolute bottom-8 left-16 top-8 border-l border-white/15" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 border-[32px] border-brand-accent" />

          <div className="relative flex h-full min-h-[380px] flex-col justify-between p-8 text-white sm:p-10 lg:min-h-[620px] lg:p-12">
            <div className="flex items-start justify-between">
              <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                Hardware Center
              </p>

              <p className="font-display text-5xl font-extrabold leading-none text-brand-accent">
                01
              </p>
            </div>

            <div>
              <p className="font-display text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
                HARDWARE
                <span className="block">CENTER</span>
              </p>

              <div className="mt-6 inline-flex border-2 border-white px-4 py-3">
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
                  One Stop Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}