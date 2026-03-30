import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "NZM Motors | Oto Tamir ve Servis",
    template: "%s | NZM Motors",
  },
  description:
    "NZM Motors; Nazım Ateş liderliğinde mekanik, elektrik, kaporta, bakım, fren, yürüyen aksam ve arıza tespit hizmetleri sunan profesyonel oto servistir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}