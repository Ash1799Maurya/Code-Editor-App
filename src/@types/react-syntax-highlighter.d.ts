type CSSProperties = {
    color?: string;
    backgroundColor?: string;
    fontWeight?: string | number;
    fontSize?: string;
  };
  

  type PrismStyle = CSSProperties & {
    [key: string]: string | number | undefined; 
  };
  

  declare module 'react-syntax-highlighter' {
    import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
    export { SyntaxHighlighter };
  }

  declare module 'react-syntax-highlighter/dist/esm/styles/prism/*' {
    const styles: Record<string, PrismStyle>;
    export default styles;
  }

  declare module 'react-syntax-highlighter/dist/esm/styles/prism/docco' {
    const docco: PrismStyle;
    export default docco;
  }
  
  declare module 'react-syntax-highlighter/dist/esm/styles/prism/solarizedlight' {
    const solarizedlight: PrismStyle;
    export default solarizedlight;
  }
  