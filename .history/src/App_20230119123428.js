import { Suspense } from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import "./App.css";
import { ButtonLanguage } from "./languages/ButtonLanguage";




const App = () => {
  console.log({i18n});
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
