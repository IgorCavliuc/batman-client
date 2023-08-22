import "./style/index.scss";
import { useCallback, useState } from "react";
import { Select } from "../";
// import RomanianFlag from "../ico/romanian-flag.svg";
// import RussianFlag from "../ico/russian-flag.svg";
// import EnglishFlag from "../ico/english-flag.svg";

const LanguageSwitcher = () => {
  const languageLocal = sessionStorage.getItem("language_agent") ?? "ro";

  const [language, setLanguage] = useState({
    value: languageLocal?.toUpperCase() ?? "RO",
    id: languageLocal ?? "ro",
    // src: languageLocal === "ro" ? RomanianFlag : RussianFlag,
  }); // default language is Romanian

  const handleLanguage = useCallback(({ v }: any) => {
    setLanguage(v);
    if (v.id === "ru") {
      localStorage.setItem("language_agent", "ru");
    } else {
      localStorage.setItem("language_agent", "ro");
    }
    window.location.reload();
  }, []);

  const languageOptions = [
    { value: "RO", id: "ro" },
    { value: "RU", id: "ru" },
    // { value: "EN", id: "en", src: EnglishFlag },
  ];

  return (
    <div className="language-switcher">
      <Select
        value={language}
        onChange={handleLanguage}
        options={languageOptions}
      />
    </div>
  );
};

export default LanguageSwitcher;
