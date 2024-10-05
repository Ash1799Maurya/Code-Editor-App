import React from 'react';
import useFileExplorer from '../hooks/useFileExplorer';

interface File {
  name: string;
  code: string;
  langCode: string;
}

const FileExplorerComponent: React.FC = () => {
  const { files, createFile, deleteFile } = useFileExplorer();

  const handleCreateFile = () => {
    const fileName = prompt('Enter file name:');
    const fileCode = prompt('Enter initial code:') || ''; 
    const fileLangCode = prompt('Enter language code (e.g., JS, HTML, CSS):') || 'JS'; 

    if (fileName) {
      createFile(fileName, fileCode, fileLangCode);
    }
  };

  return (
    <div className="bg-blue-900 text-white p-4 ">
      <h1 className="text-xl font-bold mb-4">File Explorer</h1>
      <button 
        onClick={handleCreateFile} 
        className="bg-blue-300 hover:bg-blue-500 text-white px-4 py-2 rounded transition mb-4"
      >
        Create File
      </button>
      <ul className="space-y-2">
        {files.map((file: File) => (
          <li key={file.name} className="flex justify-between items-center p-2 bg-gray-800 rounded hover:bg-gray-700">
            <div>
              <strong>{file.name}</strong> ({file.langCode}): {file.code}
            </div>
            <button 
              onClick={() => deleteFile(file)} 
              className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorerComponent;
