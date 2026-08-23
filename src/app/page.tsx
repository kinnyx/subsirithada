import SiteHeader from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-brand-light px-6 py-12 text-brand-dark">
        <div className="mx-auto max-w-6xl">
          <div className="border-l-8 border-brand-accent pl-5">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
              SUBSIRITHADA CO., LTD.
            </p>

            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
              HARDWARE CENTER
            </h1>

            <p className="mt-3 text-xl font-semibold">
              ศูนย์รวมเครื่องมือช่างและอุปกรณ์อุตสาหกรรม
            </p>

            <p className="mt-2 max-w-2xl text-base leading-7">
              บริการครบจบในที่เดียวสำหรับงานช่าง งานอุตสาหกรรม
              และความต้องการของลูกค้าธุรกิจ
            </p>
          </div>

          <section className="mt-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
              Brand System
            </p>

            <h2 className="mt-2 font-display text-3xl font-bold">
              Color Foundation
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-brand-dark">
                <div className="h-36 bg-brand-primary" />
                <div className="bg-white p-4">
                  <p className="font-semibold">Primary Blue</p>
                  <p className="mt-1 font-mono text-sm">#1f52a5</p>
                </div>
              </div>

              <div className="border border-brand-dark">
                <div className="h-36 bg-brand-accent" />
                <div className="bg-white p-4">
                  <p className="font-semibold">Accent Gold</p>
                  <p className="mt-1 font-mono text-sm">#e9a93a</p>
                </div>
              </div>

              <div className="border border-brand-dark">
                <div className="h-36 bg-brand-dark" />
                <div className="bg-white p-4">
                  <p className="font-semibold">Dark</p>
                  <p className="mt-1 font-mono text-sm">#201e1d</p>
                </div>
              </div>

              <div className="border border-brand-dark">
                <div className="h-36 bg-brand-light" />
                <div className="bg-white p-4">
                  <p className="font-semibold">Light Background</p>
                  <p className="mt-1 font-mono text-sm">#f3f2f2</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}