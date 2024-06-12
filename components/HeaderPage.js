"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function HeaderPage() {
  const t = useTranslations ("home.header");

  return (
    <section className="header">
      <div className="content">
        <div className="part1">
          <Image width={1086} height={1030} src="/images/hero_design.svg" />
        </div>
        <div className="part2">
          <span className="spanOne">{t("title")} </span>
          <h1>
            {t("title1")}
            <span> {t("title11")}</span>
            <br />
            {t("title2")}
            <span> {t("title22")}</span>
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
