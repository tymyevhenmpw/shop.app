'use client'

import Image from "next/image"
import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import ProductCard from "../cards/ProductCard"

const Latest = () => {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <section className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm max-w-[294px]  mx-auto">
        <h2 className="text-heading2-semibold mb-20 text-center drop-shadow-text-blue">Новинки</h2>
        <Carousel setApi={setApi} className="w-ful mx-auto">
          <CarouselContent className="-ml-1 flex flex-1 ">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1   md:basis-1/2 xl:basis-1/3">
                <div className="p-1">
                      <ProductCard/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-[420px]:hidden"/>
          <CarouselNext className="max-[420px]:hidden"/>
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
        Товар {current} з {count}
      </div>
    </section>
  )
}

export default Latest