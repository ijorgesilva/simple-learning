"use client"
import Image, { ImageProps, StaticImageData } from "next/image";
import { useState } from "react";

export function ImageWithFallback({fallback, src, alt, ...p}: ImageProps & { fallback: StaticImageData}){
  const [imgSrc, setImage ] = useState(src);
  return (
      <Image {...p} 
        src={imgSrc}
        onError={ (e) => {
          setImage(fallback.src)
        }}
        alt={alt}
      />
    )
}