import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "@mantine/core/styles.css";
import "./globals.css";
import LayNav from "../../../components/LayNav";
import LayFooter from "../../../components/LayFooter";
import UseAnimation from "../../../components/UseAnimation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Script from "next/script";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rashaktik",
  description: "لدينا كل ما تحتاجه لياقتك",
};

export default function RootLayout({ children, params }) {
  const messages = useMessages();


  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <UseAnimation/>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
        <MantineProvider>

          <LayNav locale={params.locale} />
          <main>{children}</main>
          <LayFooter locale={params.locale}/>
        </MantineProvider>

        </NextIntlClientProvider>
        <Script src="/bootstrap.js" />
      </body>
    </html>
  );
}
