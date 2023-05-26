import Image from 'next/image'
import { ImgHTMLAttributes } from 'react'

interface ImageWindowProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: string
  height?: string
}

export function ImageWindow({ width, height, ...props }: ImageWindowProps) {
  return (
    <Image
      src={props.src as string}
      alt={props.alt as string}
      className={`${props.className} 
      ${height ?? 'h-[134px]'}
      ${width ?? 'w-[134px]'}  rounded-full`}
    />
  )
}
