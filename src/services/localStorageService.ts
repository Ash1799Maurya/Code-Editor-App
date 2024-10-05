const localStorageService = {
    saveCode: (code: string, langCode: string) => {
      localStorage.setItem('code', code);
      localStorage.setItem('langCode', langCode);
    },
  
    getCode: () => {   
      const code = localStorage.getItem('code');
      const langCode = localStorage.getItem('langCode');
  
      return { code, langCode };
    },
  
    clearCode: () => {
      localStorage.removeItem('code');
      localStorage.removeItem('langCode');
    },
  };
  
  export default localStorageService;
  