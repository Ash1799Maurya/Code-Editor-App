// Header.tsx
import React from 'react';

interface HeaderProps {
  langCode: "JS" | "TS" | "HTML" | "CSS";
  onSave: () => void;
  onReset: () => void;
  onLangChange: (lang: "JS" | "TS" | "HTML" | "CSS") => void;
  onToggleTheme: () => void; 
  isDarkTheme: boolean; 
}

const Header: React.FC<HeaderProps> = ({ langCode, onSave, onReset, onLangChange, onToggleTheme, isDarkTheme }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-cyan-600 text-white">
      <select
        value={langCode}
        onChange={(e) => onLangChange(e.target.value as "JS" | "TS" | "HTML" | "CSS")}
        className="bg-blue-700 text-white p-2 rounded"
      >
        <option value="JS">JavaScript</option>
        <option value="TS">TypeScript</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
      </select>
      <div>
        <button onClick={onToggleTheme} className="bg-blue-700 hover:bg-blue-300 text-white px-4 py-2 rounded mr-2">
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'} {/* Toggle text */}
        </button>
        <button onClick={onSave} className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded mr-2">
          Save
        </button>
        <button onClick={onReset} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Header;
