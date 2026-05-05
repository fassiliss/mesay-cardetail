import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "/public/assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cross Shine Car Detailing",
  description:
    "Cross Shine Car Detailing offers mobile interior and exterior car detailing, paint correction, ceramic coating, and premium auto care in Nashville.",

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>{children}</body>
    </html>
  );
}
