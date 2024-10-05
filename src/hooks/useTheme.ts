import { useState } from 'react';

interface Theme {
  editorBackground: string;
  editorText: string;
  headerBackground: string;
  selectBackground: string;
  buttonBackground: string;
  isDark: boolean;
}

interface UseTheme {
  theme: Theme;
  toggleTheme: () => void; 
}

const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Theme>({
    editorBackground: 'bg-gray-100',
    editorText: 'text-gray-800',
    headerBackground: 'bg-blue-500',
    selectBackground: 'bg-gray-200',
    buttonBackground: 'bg-blue-500',
    isDark: false,
  });

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      isDark: !prevTheme.isDark,
      editorBackground: prevTheme.isDark ? 'bg-gray-100' : 'bg-gray-900',
      editorText: prevTheme.isDark ? 'text-gray-800' : 'text-gray-200',
      headerBackground: prevTheme.isDark ? 'bg-blue-500' : 'bg-gray-700',
      selectBackground: prevTheme.isDark ? 'bg-gray-200' : 'bg-gray-800',
      buttonBackground: prevTheme.isDark ? 'bg-blue-500' : 'bg-blue-700',
    }));
  };

  return { theme, toggleTheme }; 
};

export default useTheme;
