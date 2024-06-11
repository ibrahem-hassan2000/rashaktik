import Image from "next/image";
import React from "react";

function HeaderPage() {
  return (
    <section className="header">
      <div className="content">
        <div className="part1">
            <img src="/images/hero_design.svg"/>
        </div>
        <div className="part2">
          <span className="spanOne">أبدأي ببناء جسمك</span>
          <h1>
            لدينا كل ما تحتاجه <span>لياقتك</span>
            <br />
            من أجلكِ وجد <span>رشاقتك</span>
          </h1>
          <div className="QRcode">
            <h3>
              قومي بتحميل تطبيقنا من خلال الاب ستور وجوجل بلاي ليصلك كل جديد
            </h3>
            <div className="QRImg">
              <Image
                alt="QRcode"
                src={"/images/QR.svg"}
                width={105}
                height={105}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderPage;
