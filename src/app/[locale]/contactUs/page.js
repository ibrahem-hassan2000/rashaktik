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
  const [doneSend, setDoneSend] = useState("");
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
        setDoneSend(res.data.message)
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");

    setLoading(false)
        console.log(res.data.message);
        
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
          res.response?.data?.data?.name
            ? res.response.data.data.name
            : null
        );
        setEmailErorr(
          res.response.data?.data?.email
            ? res.response.data.data.email
            : null
        );
        setPhoneErorr(
          res.response?.data?.data?.phone
            ? res.response?.data?.data?.phone
            : null
        );
        setSubjectError(
          res.response?.data?.data?.subject
            ? res.response?.data?.data?.subject
            : null
        );
        console.log(res.response.data.data);
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
              <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder={t("namePlace")}/>
              <p className="errorMes">{nameErorr}</p>
            </div>

            <div className="partInput">
              <label>{t("email")} </label>
              <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder={t("emailPlace")}
              />
               <p className="errorMes">{emailErorr}</p>
            </div>
            <div className="partInput">
              <label>{t("pohne")} </label>
              <input value={phone}  onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder={t("pohnePlace")} />
              <p className="errorMes">{phoneErorr}</p>
            </div>
            <div className="partInput">
              <label>{t("mes")}</label>
              <textarea  value={subject} onChange={(e)=>{setSubject(e.target.value)}} placeholder={t("mesPlace")} />
              <p className="errorMes">{subjectError}</p>
            </div>
            <div className="partInput">
           
             <input className="send" type="submit" value={t("send")} onClick={(e)=>{e.preventDefault();handelContactUS()}} />
             <p style={{textAlign:'center'}}>{doneSend}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
