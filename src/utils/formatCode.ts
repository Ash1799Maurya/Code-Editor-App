import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-html';
import parserCss from 'prettier/parser-postcss';

const formatCode = (code: string, langCode: 'JS' | 'TS' | 'HTML' | 'CSS') => {
  try {
    switch (langCode) {
      case 'JS':
      case 'TS':
        return prettier.format(code, {
          parser: 'babel',
          plugins: [parserBabel],
          singleQuote: true,
          semi: true,
        });

      case 'HTML':
        return prettier.format(code, {
          parser: 'html',
          plugins: [parserHtml],
        });

      case 'CSS':
        return prettier.format(code, {
          parser: 'css',
          plugins: [parserCss],
        });

      default:
        return code; 
    }
  } catch (error) {
    console.error('Error formatting code:', error);
    return code; 
  }
};

export default formatCode;
