'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils' // I need to create this or use clsx directly

type PropType = {
  slides: React.ReactNode[]
  options?: any
  className?: string
}

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, className } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <div className={cn("overflow-hidden", className)} ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="flex-[0_0_100%] min-w-0" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}

