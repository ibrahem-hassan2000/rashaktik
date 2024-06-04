import { useTranslations } from "next-intl";
import React from "react";

function page() {
    const t =useTranslations("home.about")
  return (
    <section className="aboutUS container">
      <h1 className="p_page wow fadeInUp">{t("title")} </h1>
      <div className="descriptions">
        <div className="dec1">
          <p>{t("dec1")}</p>
          <p>{t("dec2")}</p>
        </div>
        <div className="dec1">
          <p>{t("dec3")}</p>
          <p>{t("dec4")}</p>
          <p>{t("dec5")}</p>
        </div>
      </div>
    </section>
  );
}

export default page;
