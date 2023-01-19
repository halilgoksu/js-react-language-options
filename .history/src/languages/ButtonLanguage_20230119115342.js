import React from 'react'
import i18n from "i18next";
import {translationsEn} from "./english";
import {translationsFr} from "./french";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsFr },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });


const ButtonLanguage = () => {
  return (
    <div>
      
    </div>
  )
}

export default ButtonLanguage
