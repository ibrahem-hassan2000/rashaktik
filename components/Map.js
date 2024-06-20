"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

function Map() {
  const t = useTranslations("home.map");

  return (
    <section className='map' data-aos="zoom-in" id='map'>
        <div className='con'> 
        <div className='content'>
            <div className='imgMap'>
                <Image  height={620} width={1720} src='/images/Basemap.png' alt='map'/>
            </div>
            <div className='titleMap' data-aos="fade-up" data-aos-duration="2000">
                <h2>{t("title")}</h2>
                <p>{t("locationDec")} </p>
            </div>
            <div className="pulse">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
          </div> 
        </div>

        </div>

    </section>
  )
}

export default Map