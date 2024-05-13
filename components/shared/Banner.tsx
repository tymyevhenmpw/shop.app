
import Image from "next/image";
import { Button } from "../ui/button"

const Banner = () => {
  return (
    <section className="w-full rounded-sm">
      <div className="w-full flex justify-center items-center">
          <Image src="/banner.png" width={768} height={504} alt="Hero" priority/>
      </div>
    </section>
  )
}

export default Banner;