import React, { useState } from 'react';

/**
 * Optimized Image Component with lazy loading and blur placeholder
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {boolean} eager - Disable lazy loading for above-fold images
 * @param {string} aspectRatio - Aspect ratio (e.g., '16/9', '4/3', '1/1')
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  eager = false,
  aspectRatio = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const containerStyle = aspectRatio 
    ? { aspectRatio } 
    : {};

  return (
    <div 
      className={`relative overflow-hidden bg-surface-container ${className}`}
      style={containerStyle}
    >
      {/* Blur placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container" />
      )}
      
      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-container">
          <div className="text-center text-on-surface-variant p-4">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">
              broken_image
            </span>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
