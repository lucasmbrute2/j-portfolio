import { HTMLAttributes } from 'react'
import { ImageWindow } from './img-window'

interface CourseCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  category: string
  year: number
  img: string
  width?: string
}

export function CourseCard({
  category,
  name,
  year,
  img,
  width,
  ...rest
}: CourseCardProps) {
  return (
    <div
      {...rest}
      className={`
      mb-10 flex flex-col
      ${width ?? 'w-[240px]'} flex-wrap items-center justify-center`}
    >
      <ImageWindow src={img} width={width} className="mb-6 w-32" />
      <p className="mb-12 text-center text-base font-bold leading-5 text-secondary">
        {name}
      </p>
      <span className="text-sm text-secondary">{category}</span>
      <time className="text-lg text-secondary">{year}</time>
    </div>
  )
}
