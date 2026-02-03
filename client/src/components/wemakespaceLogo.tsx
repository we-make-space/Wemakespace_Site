import React from "react";

type WemakeSpaceLogoProps = {
  size?: number;        // width & height in px
  className?: string;   // extra Tailwind classes
  alt?: string;
};

export const WemakeSpaceLogo: React.FC<WemakeSpaceLogoProps> = ({
  size = 24,
  className = "",
  alt = "WemakeSpace",
}) => {
  return (
    <img
      src="/Wemakespace_logo.png"
      alt={alt}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
};
