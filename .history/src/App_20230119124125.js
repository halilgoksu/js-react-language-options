import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { ButtonLanguage } from "./languages/ButtonLanguage";


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
