"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const t = useTranslations("home.footer");
  const t2 = useTranslations("home.about");
  const [Terms, setTerms] = useState([]);
  useEffect(() => {
    GetTerms();
  }, []);
  const GetTerms = () => {
    const po = axios
      .get("https://staging-rashektk.newlovrspa.com/api/terms", {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.data[0]);
        setTerms(res.data.data[0]);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  return (
    <section className="aboutUS container">
      <h1 className="p_page wow fadeInUp">{t("terms")} </h1>
      <div className="descriptions">
        <div className="dec1">
          {
            Terms?.Details?  <div
            dangerouslySetInnerHTML={{ __html: Terms.Details[params.locale] }}
          />:null
          }
         
        </div>
      </div>
    </section>
  );
}

export default page;
