export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light px-6 py-12 text-brand-dark">
      <div className="mx-auto max-w-6xl">
        <div className="border-l-8 border-brand-accent pl-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
            SUBSIRITHADA CO., LTD.
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Brand Color Foundation
          </h1>

          <p className="mt-3 max-w-2xl text-base">
            Hardware Center . One Stop Service
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-brand-dark">
            <div className="h-36 bg-brand-primary" />

            <div className="bg-white p-4">
              <p className="font-bold">Primary Blue</p>
              <p className="mt-1 font-mono text-sm">#1f52a5</p>
            </div>
          </div>

          <div className="border border-brand-dark">
            <div className="h-36 bg-brand-accent" />

            <div className="bg-white p-4">
              <p className="font-bold">Accent Gold</p>
              <p className="mt-1 font-mono text-sm">#e9a93a</p>
            </div>
          </div>

          <div className="border border-brand-dark">
            <div className="h-36 bg-brand-dark" />

            <div className="bg-white p-4">
              <p className="font-bold">Dark</p>
              <p className="mt-1 font-mono text-sm">#201e1d</p>
            </div>
          </div>

          <div className="border border-brand-dark">
            <div className="h-36 bg-brand-light" />

            <div className="bg-white p-4">
              <p className="font-bold">Light Background</p>
              <p className="mt-1 font-mono text-sm">#f3f2f2</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
