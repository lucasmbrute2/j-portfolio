'use client'

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { HTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren &
  EmblaOptionsType &
  HTMLAttributes<HTMLDivElement>

export function Carousel({ children, className, ...options }: Props) {
  const [emblaRef] = useEmblaCarousel({
    ...options,
    align: 'start',
  })

  return (
    <div className={className} ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  )
}
