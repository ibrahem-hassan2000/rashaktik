"use client";
import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
function SliderPackg() {
  return (
    <>
      <div className="latestOffers">
        <h2 className="titleOffer">العروض</h2>
        <h3 className="titleOffer2">أحدث العروض</h3>
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
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="part bestOffer">
                <div className="titleBest">
                  <p>أفضل العروض</p>
                </div>
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color2 ">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color3">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color2">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color3">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part bestOffer">
                <div className="titleBest">
                  <p>أفضل العروض</p>
                </div>
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color3 ">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color2">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color3">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="part color3">
                <h2>نص سنوي</h2>
                <h3 className="price">١٠٠٠ ر.س</h3>
                <ul>
                  <li>دخول غير محدود إلى صالة الألعاب الرياضية</li>
                  <li>4x مستشار لياقة بدنية</li>
                  <li>تتبع التغذية</li>
                  <li>3x ملحق مجاني</li>
                  <li>5 أيام في الأسبوع</li>
                  <li>مدرب شخصي</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SliderPackg;
