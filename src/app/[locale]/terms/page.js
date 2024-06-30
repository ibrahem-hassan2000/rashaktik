"use client";

import { useTranslations } from "next-intl";
import React from "react";

function page() {
    const t =useTranslations("home.footer")
    const t2 =useTranslations("home.about")
  return (
    <section className="aboutUS container">
      <h1 className="p_page wow fadeInUp">{t("terms")} </h1>
      <div className="descriptions">
        <div className="dec1">
          <p>{t2("dec1")}</p>
          <p>{t2("dec2")}</p>
        </div>
        <div className="dec1">  
          <p>{t2("dec3")}</p>
          <p>{t2("dec4")}</p>
          <p>{t2("dec5")}</p>
        </div>
      </div>
    </section>
  );
}

export default page;
