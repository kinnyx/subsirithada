import Link from "next/link";

export default function HomeRfqCta() {
    return (
        <section className="border-b-2 border-brand-dark bg-brand-primary text-white">
            <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                    <div>
                        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">
                            Request for Quotation
                        </p>

                        <h2 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                            มีรายการหลายหมวด
                            <span className="block text-brand-accent">
                                ส่งมาในใบขอราคาเดียว
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                            แจ้งสินค้า รหัสรุ่น จำนวน หรือรายละเอียดโครงการที่ต้องการ
                            ทีมงานช่วยตรวจสอบสเปก สถานะสินค้า
                            และรวบรวมรายการก่อนจัดทำใบเสนอราคาให้คุณ
                        </p>
                    </div>

                    <div className="border-l-2 border-t-2 border-white/30">
                        <div className="border-b-2 border-r-2 border-white/30 p-6 sm:p-8">
                            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                                B2B Quotation
                            </p>

                            <p className="mt-3 text-xl font-bold leading-8 text-white">
                                เหมาะสำหรับงานจัดซื้อ
                                งานโครงการ และรายการสินค้าหลายประเภท
                            </p>
                        </div>

                        <div className="border-b-2 border-r-2 border-white/30 p-6 sm:p-8">
                            <p className="text-sm leading-7 text-white/65">
                                เว็บไซต์ไม่มีระบบชำระเงินออนไลน์
                                ราคาจะยืนยันผ่านใบเสนอราคาตามจำนวน
                                สเปก และเงื่อนไขของแต่ละงาน
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t-2 border-white/30 pt-8 sm:flex-row sm:items-center">
                    <Link
                        href="/quote"
                        className="inline-flex min-h-14 items-center justify-center border-2 border-brand-accent bg-brand-accent px-7 py-4 text-sm font-bold text-brand-dark transition-colors hover:bg-white hover:text-brand-dark"
                    >
                        ขอใบเสนอราคา
                        <span className="ml-2" aria-hidden="true">
                            →
                        </span>
                    </Link>

                    <Link
                        href="/how-to-order"
                        className="inline-flex min-h-14 items-center justify-center border-2 border-white bg-transparent px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-dark"
                    >
                        ดูวิธีสั่งซื้อ
                    </Link>

                    <p className="text-sm leading-6 text-white/50 sm:ml-auto sm:max-w-xs sm:text-right">
                        ไม่มีการชำระเงินผ่านเว็บไซต์
                        ทีมงานจะตรวจสอบและยืนยันรายละเอียดก่อนออกใบเสนอราคา
                    </p>
                </div>
            </div>
        </section>
    );
}