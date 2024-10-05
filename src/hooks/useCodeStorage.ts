import { useEffect, useState } from 'react';
import localStorageService from '../services/localStorageService'; 

const useCodeStorage = () => {
  const [code, setCode] = useState<string>('');
  const [langCode, setLangCode] = useState<string>('JS');

  useEffect(() => {
    const { code: savedCode, langCode: savedLangCode } = localStorageService.getCode();
    if (savedCode) {
      setCode(savedCode);
    }
    
    if (savedLangCode) {
      setLangCode(savedLangCode);
    }
  }, []);

  const saveCodeToLocalStorage = (code: string, langCode: string) => {
    localStorageService.saveCode(code, langCode);
    setCode(code);
    setLangCode(langCode);
  };

  const clearCodeFromLocalStorage = () => {
    localStorageService.clearCode();
    setCode('');
    setLangCode('JS'); 
  };

  return { code, langCode, saveCodeToLocalStorage, clearCodeFromLocalStorage };
};

export default useCodeStorage;
