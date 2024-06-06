"use client";

import Image from "next/image";
import { Link, usePathname } from "../src/navigation";
import React from "react";
import { useTranslations } from "next-intl";

function LayNav({ locale }) {
  const t =useTranslations("home.nav")
  const pathname = usePathname();
  return (
    <nav className="navbar  navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image  width={174} height={74}  src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="navbar-toggler2">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                {t('home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/aboutUs" ? "active" : ""
                }`}
                href="/aboutUs"
              >
               {t('about')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname === "/contactUs" ? "active" : ""
                }`}
                href="/contactUs"
              >
                  {t('contact')}
              </Link>
            </li>

            <li className="nav-item lang">
              {locale === "en" ? (
                <Link href={pathname} locale="ar" className={"active"}>
                  <Image width={70} height={70} src="/images/ar.svg" alt="Ar" />
                </Link>
              ) : (
                <Link href={pathname} locale="en" className={"active"}>
                  
                  <Image width={70} height={70} src="/images/eng.svg" alt="en" />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default LayNav;
