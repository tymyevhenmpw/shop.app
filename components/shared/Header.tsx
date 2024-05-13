
import Link from "next/link"
import Auth from "./Auth"

const Header = () => {
 
  

  return (
    <header className="flex justify-between max-w-screen-2xl mx-auto items-center pt-10 px-3">
    {/* <Image src='/banner.png' width={150} height={10} alt="" ></Image> */}
    <p className="font-bold text-[18px]">SANTEHVAN</p>
    <div className="flex gap-10">
    <nav className="items-center gap-10 hidden lg:flex">
        <Link href='/' className="Underline">Головна</Link>
        <Link href='' className="Underline">Каталог</Link>
        <Link href='' className="Underline">Контакти</Link>
        <Link href='' className="Underline">Доставка та оплата</Link>
        <Link href='' className="Underline">Гарантія та сервіси</Link>
    </nav>
    <div className="flex items-center gap-5">
      <Auth></Auth>
    
    </div>
    </div>
    </header>
  )
} 

export default Header