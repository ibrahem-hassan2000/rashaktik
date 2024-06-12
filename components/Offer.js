"use client";
import { useTranslations } from "next-intl";
import React from "react";

function Offer() {
  const t = useTranslations("home.offer");

  return (
    <section className="offer" id="offer">
      <div className="con">
        <div className="content">
          <div className="part">
            <h2>
            {t('discountTitle')}
            </h2>
            <div className="partOffer">
              <h3>
              {t('discountDec')}
                <span>%٣٥</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
