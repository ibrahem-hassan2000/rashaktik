import React from "react";

function page() {
  return (
    <section className="contactUs">
      <div className="content">
        <div className="part1">
          <h2>يسعدنا تواصلك معانا</h2>
          <p>يسعدنا تواصلك معانا سيقوم أحد موظفينا بالرد عليك في أقرب وقت</p>
        </div>
        <div className="part2">
          <form className="contactUsForm">
            <div className="partInput">
              <label>الإسم</label>
              <input type="text" placeholder="أدخل الاسم بالكامل" />
            </div>

            <div className="partInput">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="أدخل البريد الالكترونى الخاص بك "
              />
            </div>
            <div className="partInput">
              <label>رقم الجوال</label>
              <input type="text" placeholder="رقم الجوال +966 " />
            </div>
            <div className="partInput">
              <label>ما الذي يدور ببالك ؟</label>
              <textarea placeholder="أدخل ما تريد الاستفسار عليه" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
