"use client";


import { usePathname } from '../src/navigation';
import Link from 'next/link'
import React from 'react'

function LayNav({locale}) {
  const pathname = usePathname();
  return (
    <nav className="navbar  navbar-expand-lg ">
    <div className="container">
      <Link className="navbar-brand" href="/">
       <img src='./images/logo.svg' alt='logo'/>
       
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
              الرئيسية
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${pathname === "/aboutUs" ? "active" : ""}`}
              href="/aboutUs"
            >
               نبذة عنا
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                pathname === "/contactUS" ? "active" : ""
              }`}
              href="/contactUS"
            >
              تواصل معانا
            </Link>
          </li>
         
          <li className="nav-item lang">
            {
              locale === "en" ?  <Link
              href={pathname}
              locale="ar"
              className={ "active" }
            >
              العربيه
            </Link> : <Link
              href={pathname}
              locale="en"
              className={ "active" }
            >
              الانجليزيه
            </Link>
            }


          </li>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}

export default LayNav