"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import axios from "axios";

function Programs({locale}) {
  const t = useTranslations("home.program");

  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const [Programs, setPrograms] = useState([]);
  useEffect(() => {
    GetSubscription();
  }, [locale]);
  const GetSubscription = () => {
    const po = axios
      .get("https://staging-rashektk.newlovrspa.com/api/programs", {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          lang: locale,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setPrograms(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <section className="programs" id="programs">
      <div className="con">
        <div className="content">
          <div className="part1">
            <div className="Titles">
              <h2>{t('programTitle')}</h2>
              <h3>{t('programDec')} </h3>
            </div>
            <div className="arrwo ">
              <button className="swiper-button-prev" onClick={goPrev}></button>
              <button className="swiper-button-next" onClick={goNext}></button>
            </div>
          </div>
         
        </div>
      </div>
      <div className="part2">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              dir={locale==='en'?'ltr':'rtl'}
              slidesPerView={'auto'}
              slidesPerGroup={1}
              spaceBetween={30}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 6,
                },
                500: {
                  slidesPerView: 'auto',
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              {
                Programs.length>1? Programs.map((item ,i)=>{
                  return(
                    <SwiperSlide key={i}>
                    {" "}
                    <div className="box">
                      <img src={item.Image} alt={item.MainAddress}/>
                      <h2> {item.MainAddress} </h2>
                      <div dangerouslySetInnerHTML={{ __html: item.Details }} />
                     
                    </div>
                  </SwiperSlide>
                  )
                }):<></>
              }
             
            </Swiper>
          </div>
    </section>
  );
}

export default Programs;
