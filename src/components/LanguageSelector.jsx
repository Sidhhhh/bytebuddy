import { useState } from "react";
import { LANGUAGE_VERSIONS } from "./constats";
import '../css/laguage.css'


const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleSelect = (lang) => {
    onSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <label className="language-label">Language:</label>
      <div className="menu">
        <button className="menu-button" onClick={toggleMenu}>
          {language}
        </button>
        {isOpen && (
          <ul className="menu-list">
            {languages.map(([lang, version]) => (
              <li
                key={lang}
                className={`menu-item ${lang === language ? "active" : ""}`}
                onClick={() => handleSelect(lang)}
              >
                {lang}
                <span className="version">({version})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
