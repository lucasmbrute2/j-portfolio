import { HTMLAttributes } from 'react'
import Image from 'next/image'

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
    <div className="relative mr-5 flex h-[260px] items-center justify-center rounded-md border-0 border-solid border-gray-500 object-contain p-5 shadow-md  hover:opacity-70">
      <div
        {...rest}
        className={`
      mb-10
      flex
      flex-col
      ${width ?? 'w-[240px]'} flex-wrap items-center justify-center `}
      >
        <Image src={img} alt="" className="mb-5 w-32 sepia-[.50]" />
        <p className="mb-5 text-center text-base font-bold leading-5 text-primary">
          {name}
        </p>
        <div className="absolute bottom-2 flex items-center gap-2">
          <span className="text-sm">Concluído em:</span>
          <time className="right-3 top-3 block text-sm text-primary">
            {year}
          </time>
        </div>
      </div>
    </div>
  )
}
