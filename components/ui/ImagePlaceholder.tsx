/**
 * ImagePlaceholder Component
 * 
 * Platzhalter für Bilder mit:
 * - Grauer Hintergrund
 * - Icon in der Mitte
 * - Optionaler Text mit Bildnamen
 * - Responsive Aspect Ratio
 */

'use client';

import React from 'react';
import { Image } from 'lucide-react';

interface ImagePlaceholderProps {
  text?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  className?: string;
  showIcon?: boolean;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  text,
  aspectRatio = 'video',
  className = '',
  showIcon = true,
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    auto: '',
  };

  return (
    <div
      className={`
        ${aspectRatioClasses[aspectRatio]}
        bg-gray-200 
        flex flex-col items-center justify-center
        border-2 border-dashed border-gray-300
        ${className}
      `}
    >
      {showIcon && (
        <Image className="w-12 h-12 text-gray-400 mb-3" />
      )}
      {text && (
        <span className="text-sm text-gray-500 font-medium">
          {text}
        </span>
      )}
    </div>
  );
};

export default ImagePlaceholder;
