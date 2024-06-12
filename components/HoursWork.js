"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function HoursWork() {
  const t = useTranslations("home.hoursWork");

  return (
    <section className="hoursWork" id="hoursWork">
      <div className="content">
        <div className="partImg">
            <Image src={'/images/lifestyle1.png'} height={550} width={634} alt="lifestyle"/>
        </div>
        <div className="partInfo">
          <Image
            src={"/images/Hour.svg"}
            width={110}
            height={110}
            alt="hours Gym"
          />
          <div className="hoursTitle">
            <span></span>
            <h2>{t("title")} </h2>
            <span></span>
          </div>
          <div className="hoursDetils">
          <p>
          {t("hoursDec1")}
          </p>
          <p>
          {t("hoursDec2")}
          </p>
          </div>
          
        </div>
        <div className="partImg">
            <Image src={'/images/lifestyle2.png'} height={550} width={634} alt="lifestyle"/>
        </div>
      </div>
    </section>
  );
}

export default HoursWork;
