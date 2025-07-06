
import React, { useEffect } from 'react';

interface LightboxProps {
  imageSrc: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <span 
        className="absolute top-4 right-6 text-white text-4xl cursor-pointer hover:opacity-80"
      >
        &times;
      </span>
      <img 
        src={imageSrc} 
        alt="Enlarged view" 
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};

export default Lightbox;
