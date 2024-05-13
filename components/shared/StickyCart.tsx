import Image from "next/image"
import { Button } from "../ui/button"

const StickyCart = () => {
  return (
    <div className="fixed bottom-8 right-8 z-20 max-sm:bottom-4 max-sm:right-4">
        <Button className="bg-white rounded-full shadow-xl h-16 w-16 flex items-center justify-center border-2 border-white hover:bg-white hover:border-black max-sm:h-14 max-sm:w-14">
            <Image src="/assets/cart.svg" width={32} height={32} alt="cart-icon" className="drop-shadow-text-blue"/>
        </Button>
    </div>
  )
}

export default StickyCart;