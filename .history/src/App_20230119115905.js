import { Suspense, useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import "./App.css";
import ButtonLanguage from "./languages/ButtonLanguage";




const App = () => {
  
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <header className="App-header">
          <h1>{t("welcome")}</h1>
          <p>
            <Trans components={{ bold: <strong />, italic: <i /> }}>
              sample-text
            </Trans>
          </p>
          <p>{t("changed", { count })}</p>
          <p>{t("love")}</p>

          <ButtonLanguage />
        </header>
      </div>
    </Suspense>
  );
};

export default App;
