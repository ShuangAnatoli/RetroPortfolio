import React from 'react';
import { FolderIcon, TrashIcon, ComputerIcon, DocumentIcon } from './RetroIcons';

interface DesktopItemProps {
  label: string;
  iconType?: 'folder' | 'trash' | 'image' | 'document';
  customIconSrc?: string; 
  onClick: () => void;
  // New prop to allows changing the icon size (defaults to w-12 h-12)
  iconClassName?: string;
}

export const DesktopItem: React.FC<DesktopItemProps> = ({ 
  label, 
  iconType, 
  customIconSrc, 
  onClick,
  iconClassName = "w-12 h-12" // Default size (48px)
}) => {
  
  // Combine the size class with spacing margin
  const finalIconClass = `${iconClassName} mb-1`;

  const renderIcon = () => {
    if (customIconSrc) {
      return (
        <img 
          src={customIconSrc} 
          alt={label} 
          className={`${finalIconClass} object-contain pixel-antialiasing-off`} 
        />
      );
    }

    switch (iconType) {
      case 'folder':
        return <FolderIcon className={finalIconClass} />;
      case 'trash':
        return <TrashIcon className={finalIconClass} />;
      case 'document':
        return <DocumentIcon className={finalIconClass} />;
      case 'image':
      default:
        return <ComputerIcon className={finalIconClass} />;
    }
  };

  return (
    <div 
      onClick={onClick}
      // Changed from fixed height (h-24) to min-height so it expands if icon is huge
      className="group flex flex-col items-center justify-start w-24 min-h-[6rem] cursor-pointer hover:bg-retro-dark/10 rounded-sm active:translate-y-0.5 transition-all p-1"
    >
      <div className="text-retro-darkest group-hover:text-retro-dark transition-colors">
        {renderIcon()}
      </div>
      <span className="font-pixel text-lg text-retro-darkest bg-retro-lightest/80 px-1 border border-transparent group-hover:border-retro-darkest group-hover:border-dashed text-center leading-none">
        {label}
      </span>
    </div>
  );
};