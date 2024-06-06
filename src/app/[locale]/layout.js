
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import LayNav from "../../../components/LayNav";
import LayFooter from "../../../components/LayFooter";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Script from "next/script";

export const metadata = {
  title: "Rashaktik",
  description: "لدينا كل ما تحتاجه لياقتك",
};

export default function RootLayout({ children, params }) {
  const messages = useMessages();


  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <LayNav locale={params.locale} />
          <main>{children}</main>
          <LayFooter locale={params.locale}/>
        </NextIntlClientProvider>
        <Script src="/bootstrap.js" />
      </body>
    </html>
  );
}
