"use client";

import Image from "next/image"
import { Button } from "../ui/button"
import Beaker from "../svg/Beaker"
import { useRef, useState } from "react";

const AboutUs = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(cardsRef.current !== null){
      const rect = cardsRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y })
    }
  }

  return (
    <section className="h-[700px] flex flex-1 max-xl:flex-col max-xs:mb-0 max-md:h-[500px]">
        <article className="w-1/2 h-full flex flex-col gap-7  max-xl:w-full">
            <h1 className="text-heading2-bold drop-shadow-text-blue pl-2 mt-36">Чому ми?</h1>
            <p>Короткий слоган, 1-3 речення, 15-18 слів. Короткий слоган, 1-3 речення, 15-18 слів. Короткий слоган, 1-3 речення, 15-18 слів.</p>
            <div className="w-full flex gap-3 mt-4">
                <Button className="px-8 w-full shadow-md">До товарів</Button>
                <Button className="px-8 w-full shadow-md" variant="outline">Бестселери</Button>
            </div>
        </article>
        <article className="w-1/2 h-full flex items-center justify-center max-xl:w-full max-xl:justify-start max-xl:px-12 max-xl:mt-36 max-md:hidden">
          <div ref={cardsRef} onMouseMove={(event) => handleMouseMove(event)} className="xl:max-w-[40rem] max-w-[90%] h-[26rem] rounded-lg border border-neutral-600 absolute flex flex-row p-8 shadow-xl stroke-[1.5] hover:stroke-[2]">
            <div className="flex flex-col w-2/5 justify-between">
              <div className="flex flex-col gap-5"> 
                <Image src="/assets/thin-right-arrow.svg" width={32} height={32} alt="right arrow" className="p-2 shadow-inner rounded-lg border"/>
                <h1 className="text-heading3-bold tracking-wide">Заголовок</h1>
                <p>Короткий текст, близько десяти-п'ятнадцяти слів.</p>
              </div>
              <div className="flex flex-col tracking-wide">
                <span className="flex flex-row gap-2">
                  <Image src="/assets/checked.svg" width={24} height={24} alt="Checked"/>
                  <p>Перевага</p>
                </span>
                <span className="flex flex-row gap-2">
                  <Image src="/assets/checked.svg" width={24} height={24} alt="Checked"/>
                  <p>Перевага</p>
                </span>
                <span className="flex flex-row gap-2">
                  <Image src="/assets/checked.svg" width={24} height={24} alt="Checked"/>
                  <p>Перевага</p>
                </span>
              </div>
            </div>
            <div className="w-3/5 flex flex-col items-center justify-center">
              <Beaker cursor={cursor} cardRef={cardsRef}/>
            </div>
          </div>
        </article>
    </section>
  )
}

export default AboutUs;