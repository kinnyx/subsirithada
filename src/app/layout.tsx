import type { Metadata } from "next";
import { Archivo, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SUBSIRITHADA | Hardware Center · One Stop Service",
    template: "%s | SUBSIRITHADA",
  },
  description:
    "บริษัท ทรัพย์สิริธาดา จำกัด ศูนย์รวมเครื่องมือช่าง อุปกรณ์ฮาร์ดแวร์ วัสดุอุตสาหกรรม และบริการสำหรับลูกค้าธุรกิจ พร้อมระบบขอใบเสนอราคา",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${archivo.variable} ${notoSansThai.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}