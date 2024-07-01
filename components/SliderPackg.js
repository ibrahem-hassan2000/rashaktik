"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useTranslations } from "next-intl";
import axios from "axios";

function SliderPackg({ locale }) {
  const t = useTranslations("home.offer");
  const [Subscription, setSubscription] = useState([]);
  useEffect(() => {
    GetSubscription();
  }, [locale]);
  const GetSubscription = () => {
    const po = axios
      .get("https://staging-rashektk.newlovrspa.com/api/get_Subscription", {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          lang: locale,
        },
      })
      .then((res) => {
        console.log(res.data.data);

        setSubscription(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="latestOffers" id="latestOffers">
        <h2 className="titleOffer">{t("title1")}</h2>
        <h3 className="titleOffer2">{t("title2")} </h3>
        <div className="allOffers">
          <Swiper
            slidesPerView={5}
            spaceBetween={70}
            centeredSlides={true}
            loop={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 10,
              modifier: 0,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 6,
              },
              430: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              800: {
                spaceBetween: 20,
                slidesPerView: 3.1,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 3.5,
              },
              1600: {
                spaceBetween: 60,
                slidesPerView: 4.5,
              },
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {Subscription.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  {" "}
                  <div className="part bestOffer">
                  {item.isBast ? (
                      <div className="titleBest">
                        <p>{t("bestOffer")} </p>
                      </div>
                    ) : null}
                    <h2>{item.category} </h2>
                    <h3 className="price">{item.price} ر.س</h3>
                    <ul>
                      {item.Details_tag.map((details, i) => {
                        return <li>{details.value}</li>;
                      })}
                    </ul>
                  </div>
                </SwiperSlide>
              );
            })}
            {Subscription.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  {" "}
                  <div className="part bestOffer">
                    {item.isBast ? (
                      <div className="titleBest">
                        <p>{t("bestOffer")} </p>
                      </div>
                    ) : null}

                    <h2>{item.category} </h2>
                    <h3 className="price">{item.price} ر.س</h3>
                    <ul>
                      {item.Details_tag.map((details, i) => {
                        return <li>{details.value}</li>;
                      })}
                    </ul>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SliderPackg;
