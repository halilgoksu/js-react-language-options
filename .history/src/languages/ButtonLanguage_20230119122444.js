import React, { useState } from "react";
import i18n from "i18next";
import { translationsEn } from "./english";
import { translationsFr } from "./french";
import { useTranslation, initReactI18next, Trans } from "react-i18next";


  export const i119 =()=>{

  }

export const ButtonLanguage = () => {
  const { t } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select name="language" onChange={onChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};
