
import { useState } from 'react';

interface File {
  name: string;
  code: string;
  langCode: string;
}

const useFileExplorer = () => {
  const [files, setFiles] = useState<File[]>([]);

  const createFile = (name: string, code: string, langCode: string) => {
    const newFile = { name, code, langCode };
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const deleteFile = (fileToDelete: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileToDelete.name));
  };

  return { files, createFile, deleteFile };
};

export default useFileExplorer;
