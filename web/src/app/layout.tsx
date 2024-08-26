import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavHeader from "@/features/NavHeader";
import { cn } from "@/lib/utils";
import Header from "@/features/Header";

const inter = Roboto({
  subsets: ['cyrillic'],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Lazada - Mua Sắm Hàng Chất Lượng Giá Tốt Online",
  description: "Mua sắm hàng chất lượng giá tốt online tại Lazada Việt Nam. Tìm kiếm thông tin sản phẩm, đánh giá, chất lượng với giá tốt nhất từ hàng nghìn cửa hàng bán hàng trực tuyến.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-backgroundDefault text-foreground')}>
        <NavHeader />
        <Header />
        <main className="max-w-screen-2xl mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}
