import { useState, useEffect } from 'react';

export default function ErrorPopup({ message, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="error-popup">
      {message}
      <style jsx>{`
        .error-popup {
          position: fixed;
          top: 10px;
          right: 10px;
          background: red;
          color: white;
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}