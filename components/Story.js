"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Story() {
  const t = useTranslations("home.story");

  return (
    <section className="story">
      <div className="con">
        <div className="content">
          <div className="part1">
            <span>{t("title1")}</span>
            <h2>{t("title2")} </h2>
            <p className="pStory">{t("title3")}</p>
            <div className="box box1">
              <h3>{t("storyTitle")}</h3>
              <p>{t("storyDec")}</p>
              <Image
                width={612}
                height={224}
                src="/images/story1.png"
                alt="story1"
              />
            </div>
          </div>
          <div className="part2">
            <div className="box box2">
              <h3> {t("vision")}</h3>
              <p>{t("visionDec")}</p>
            </div>
            <div className="box box3">
              <h3> {t("message")}</h3>
              <p>{t("messageDec")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
