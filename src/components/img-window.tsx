import Image from 'next/image'
import { ImgHTMLAttributes } from 'react'

interface ImageWindowProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: number
  height?: number
}

export function ImageWindow({ height, width, ...props }: ImageWindowProps) {
  return (
    <Image
      src={props.src as string}
      alt={props.alt as string}
      className={props.className}
      width={width}
      height={height}
    />
  )
}
