"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function HeaderPage({locale}) {
  const t = useTranslations ("home.header");
console.log(locale);
  return (
    <section className="header">
      <div className="content">
        <div className="part1">
          {
            locale === 'ar' ?   <Image width={1086} height={1030} src="/images/hero_design.svg" />: <Image width={1086} height={1030} src="/images/hero_design2.svg" />
          }
         
        </div>
        <div className="part2">
          <span className="spanOne" data-aos="fade-up" data-aos-duration="2000">{t("title")} </span>
          <h1 data-aos="fade-up">
            {t("title1")}
            <span data-aos="zoom-in" data-aos-duration="2000"> {t("title11")}</span>
            <br />
            {t("title2")}
            <span data-aos="zoom-in" data-aos-duration="2000"> {t("title22")}</span>
          </h1>
          <div className="QRcode">
            <h3>{t("qr")}</h3>
            <div className="QRImg">
              <Image
                alt="QRcode"
                src={"/images/QR.svg"}
                width={105}
                height={105}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderPage;
