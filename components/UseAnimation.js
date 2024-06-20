"use client";
import Aos from 'aos';
import React, { useEffect } from 'react'

function UseAnimation() {
    useEffect(() => {
        Aos.init({duration:700});
      }, []);
  
}

export default UseAnimation