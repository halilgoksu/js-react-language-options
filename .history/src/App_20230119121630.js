import { Suspense } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import "./App.css";
import { ButtonLanguage } from "./languages/ButtonLanguage";


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

const App = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <header className="App-header">
          <h1>{t("welcome")}</h1>
          <p>{t("love")}</p>
          <ButtonLanguage />
        </header>
      </div>
    </Suspense>
  );
};

export default App;
