"use client";
import { LoadingOverlay } from "@mantine/core";
import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

function page({params}) {
  const t = useTranslations("contactUS");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
/*errors*/ 
  const [nameErorr, setNameErorr] = useState("");
  const [emailErorr, setEmailErorr] = useState("");
  const [phoneErorr, setPhoneErorr] = useState("");
  const [subjectError, setSubjectError] = useState("");

  const [Loading, setLoading] = useState(false);

  const handelContactUS = () => {
   
    setLoading(true)
    const po = axios
      .post(
        "https://staging-rashektk.newlovrspa.com/api/contact_message",
        {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            'lang':params.locale
          },
        }
      )
      .then((res) => {
    setLoading(false)
        console.log(res);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setNameErorr("");
        setEmailErorr("");
        setPhoneErorr("");
        setSubjectError("");
      })
      .catch((res) => {
    setLoading(false)

        setNameErorr(
          res.response.data?.errors?.name
            ? res.response.data.errors.name[0]
            : null
        );
        setEmailErorr(
          res.response.data?.errors?.email
            ? res.response.data.errors.email[0]
            : null
        );
        setPhoneErorr(
          res.response?.data?.errors?.mobile
            ? res.response?.data?.errors?.mobile[0]
            : null
        );
        setSubjectError(
          res.response?.data?.errors?.subject
            ? res.response?.data?.errors?.subject[0]
            : null
        );
        console.log(res);
      });
  };
  return (
    <section className="contactUs">
         <LoadingOverlay
          visible={Loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: 'hsla(277, 40%, 63%, 1)',type:'bars'}}
        />
      <div className="content">
        <div className="part1">
          <h2>{t("title1")}</h2>
          <p>{t("title2")}</p>
        </div>
        <div className="part2">
          <form className="contactUsForm">
            <div className="partInput">
              <label>{t("name")}</label>
              <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder={t("namePlace")}/>
            </div>

            <div className="partInput">
              <label>{t("email")} </label>
              <input
                type="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder={t("emailPlace")}
              />
            </div>
            <div className="partInput">
              <label>{t("pohne")} </label>
              <input  onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder={t("pohnePlace")} />
            </div>
            <div className="partInput">
              <label>{t("mes")}</label>
              <textarea  onChange={(e)=>{setSubject(e.target.value)}} placeholder={t("mesPlace")} />
            </div>
            <div className="partInput">
           
             <input className="send" type="submit" value={'ارسال'} onClick={(e)=>{e.preventDefault();handelContactUS()}} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
