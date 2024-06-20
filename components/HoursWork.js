"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect } from "react";

function HoursWork() {
  const t = useTranslations("home.hoursWork");

  return (
    <section className="hoursWork" id="hoursWork">
      <div className="content">
        <div className="partImg" data-aos="fade-down">
            <Image src={'/images/lifestyle1.png'} height={550} width={634} alt="lifestyle"/>
        </div>
        <div className="partInfo" data-aos="fade-up" >
          <Image
            src={"/images/Hour.svg"}
            width={110}
            height={110}
            alt="hours Gym"
          />
          <div className="hoursTitle">
            <span data-aos="fade-down"></span>
            <h2 data-aos="zoom-in-up">{t("title")} </h2>
            <span data-aos="fade-down"></span>
          </div>
          <div className="hoursDetils">
          <p data-aos="fade-up">
          {t("hoursDec1")}
          </p>
          <p data-aos="fade-up"  data-aos-duration="1000">
          {t("hoursDec2")}
          </p>
          </div>
          
        </div>
        <div className="partImg" data-aos="fade-down">
            <Image src={'/images/lifestyle2.png'} height={550} width={634} alt="lifestyle"/>
        </div>
      </div>
    </section>
  );
}

export default HoursWork;
