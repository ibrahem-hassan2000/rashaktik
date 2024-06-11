"use client";
import { useTranslations } from "next-intl";
import React from "react";

function page() {
  const t = useTranslations("contactUS");
  
  return (
    <section className="contactUs">
      <div className="content">
        <div className="part1">
          <h2>{t("title1")}</h2>
          <p>{t("title2")}</p>
        </div>
        <div className="part2">
          <form className="contactUsForm">
            <div className="partInput">
              <label>{t("name")}</label>
              <input type="text" placeholder={t("namePlace")}/>
            </div>

            <div className="partInput">
              <label>{t("email")} </label>
              <input
                type="email"
                placeholder={t("emailPlace")}
              />
            </div>
            <div className="partInput">
              <label>{t("pohne")} </label>
              <input type="text" placeholder={t("pohnePlace")} />
            </div>
            <div className="partInput">
              <label>{t("mes")}</label>
              <textarea placeholder={t("mesPlace")} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
