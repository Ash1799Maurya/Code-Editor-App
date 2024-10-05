import React, { useState } from 'react';
import useCodeStorage from './hooks/useCodeStorage';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import FileExplorer from './components/FileExplorer';

const App: React.FC = () => {
  const { code, langCode: rawLangCode, saveCodeToLocalStorage, clearCodeFromLocalStorage } = useCodeStorage();
  const [langCode, setLangCode] = useState<"JS" | "TS" | "HTML" | "CSS">(rawLangCode as "JS" | "TS" | "HTML" | "CSS");
  const [isDarkTheme, setIsDarkTheme] = useState(false); 

  const handleSave = () => {
    saveCodeToLocalStorage(code, langCode);
  };

  const handleReset = () => {
    clearCodeFromLocalStorage();
  };

  const handleLangChange = (lang: "JS" | "TS" | "HTML" | "CSS") => {
    console.log(`Language changed to: ${lang}`);
    setLangCode(lang); 
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme); 
  };

  console.log(`Current langCode: ${langCode}`); 

  return (
    <div className={`h-screen w-screen flex flex-col ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
      <Header 
        langCode={langCode} 
        onSave={handleSave} 
        onReset={handleReset} 
        onLangChange={handleLangChange} 
        onToggleTheme={toggleTheme} 
        isDarkTheme={isDarkTheme} 
      />
      <div className="flex-1 flex">
        <FileExplorer />
        <CodeEditor langCode={langCode} code={code} isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
};

export default App;
