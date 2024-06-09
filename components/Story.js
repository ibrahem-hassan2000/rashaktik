import Image from "next/image";
import React from "react";

function Story() {
  return (
    <section className="story">
      <div className="con">
        <div className="content">
          <div className="part1">
            <span>مرحبا</span>
            <h2>القصة وراء مركزنا</h2>
            <p className="pStory">
              إنها حقيقة مثبتة منذ زمن طويل أن القارئ سوف يصرف انتباهه من خلال
              المحتوى المقروء للصفحة عند النظر إلى تخطيطها. نقطة استخدام لوريم
              إيبسوم.
            </p>
            <div className="box box1">
              <h3>القصة</h3>
              <p>
                إنها حقيقة مثبتة منذ زمن طويل أن القارئ سوف يصرف انتباهه من خلال
                المحتوى المقروء للصفحة عند النظر إلى تخطيطها. نقطة استخدام لوريم
                إيبسوم.
              </p>
             <Image width={612} height={224} src="/images/story1.png" alt="story1" />
            </div>
          </div>
          <div className="part2">
            <div className="box box2">
              <h3>رؤيتنا</h3>
              <p>
                إنها حقيقة مثبتة منذ زمن طويل أن القارئ سوف يصرف انتباهه من خلال
                المحتوى المقروء للصفحة عند النظر إلى تخطيطها. نقطة استخدام لوريم
                إيبسوم.
              </p>
            </div>
            <div className="box box3">
              <h3>رسالتنا</h3>
              <p>
                إنها حقيقة مثبتة منذ زمن طويل أن القارئ سوف يصرف انتباهه من خلال
                المحتوى المقروء للصفحة عند النظر إلى تخطيطها. نقطة استخدام لوريم
                إيبسوم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
