import React, { useEffect, useState, useCallback } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import solarizedlight from 'react-syntax-highlighter/dist/esm/styles/prism/solarizedlight';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';
import useCodeEditor from '../hooks/useCodeEditor';
import Notification from './Notification';

interface CodeEditorProps {
  langCode: 'JS' | 'TS' | 'HTML' | 'CSS';
  code: string;
  isDarkTheme: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ langCode, code, isDarkTheme }) => {
  const [editorCode, setEditorCode] = useState(code);
  const [editorHeight, setEditorHeight] = useState(300); 
  const { formatCode } = useCodeEditor();
  const [notification, setNotification] = useState<string | null>(null); 

  useEffect(() => {
    setEditorCode(code);
  }, [code]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorCode(e.target.value);
  };

  const handleFormatCode = useCallback(async () => {
    const formattedCode = await formatCode(editorCode, langCode);
    setEditorCode(formattedCode);
  }, [editorCode, formatCode, langCode]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault(); 
      handleSave(); 
    }
  };

  const handleSave = () => {
    localStorage.setItem(langCode, editorCode); 
    setNotification("Code saved successfully!"); 
    setTimeout(() => setNotification(null), 3000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY; 

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newHeight = editorHeight + (startY - moveEvent.clientY);
      setEditorHeight(Math.max(newHeight, 100)); 
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className={`relative w-full h-full flex flex-col ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
      <textarea
        className={`w-full h-[${editorHeight}px] p-4 border-b ${isDarkTheme ? 'text-white bg-gray-900 border-gray-600' : 'text-black bg-white'}`}
        value={editorCode}
        onChange={handleCodeChange}
        onKeyDown={handleKeyDown}
        placeholder="Start typing your code here..."
      />
      <div
        className="cursor-ns-resize my-1 bg-gray-500"
        onMouseDown={handleMouseDown}
        style={{ height: '5px', width: '100%' }}
      />
      <div className="flex justify-between p-4">
        <button
          className={`px-4 py-2 rounded ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
          onClick={handleFormatCode}
        >
          Format Code
        </button>
        <button
          className={`px-4 py-2 rounded ${isDarkTheme ? 'bg-blue-700 text-white' : 'bg-blue-500 text-black'}`}
          onClick={handleSave}
        >
          Save Code
        </button>
      </div>
      <div className={`flex-1 p-4 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <h3 className="text-lg font-bold">Preview:</h3>
        <SyntaxHighlighter
          language={langCode.toLowerCase()}
          style={isDarkTheme ? okaidia : solarizedlight}
        >
          {editorCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;
