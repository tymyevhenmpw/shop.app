import Image from "next/image"
import { Button } from "../ui/button"
import Badge from "../badges/Badge"

const ProductCard = () => {
  return (
    <article className="w-72 h-96 border-[1.5px] border-black rounded-2xl flex items-center justify-center shadow-bottom mx-auto">
        <div className="w-11/12 h-[90%]">
            <div className="w-full h-56 flex justify-center">
                <Image src="/komod.png" width={200} height={200} alt="Product image" className="absolute rounded-2xl"/>
                <div className="w-full h-full flex justify-between items-start">
                    <Badge/>
                    <Image src="/assets/heart-gray.svg" width={24} height={24} alt="Like" className="cursor-pointer"/> 
                </div>
            </div>
            <h1 className="text-body-bold ml-1">Комод BOTTICELLI SEQUETTO</h1>
            <p className="ml-1">Description...</p>
            <div className="flex flex-1 justify-around items-center mt-2">
                <p className="text-base-semibold">₴20400</p>
                <Button className="border-[1px] border-black shadow-bottom mr-1 px-9">У кошик</Button>
            </div>
        </div>
    </article>
  )
}

export default ProductCard