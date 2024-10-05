
import React from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-2 rounded shadow-lg">
      {message}
      <button onClick={onClose} className="ml-4 bg-red-600 p-1 rounded">X</button>
    </div>
  );
};

export default Notification;
