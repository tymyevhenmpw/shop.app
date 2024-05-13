'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { useState } from "react"

const Auth = () => {
  const { data:session, status} = useSession();
  const [burger, setBurger] = useState('burger-lines');
  const [bgBurger, setBgBurger] = useState('bg-burger')

  function burgerClass(){
    if(burger === 'burger-lines'){
      setBurger('burger-lines burger-button');
      setBgBurger('bg-burger bg-burger-active')
    }else{
      setBurger('burger-lines');
      setBgBurger('bg-burger')
    }
  }
  return (
    <>
      {status === "authenticated"?<Button onClick={signOut} variant="outline" className="hover:border-black transition-colors duration-300 ">Вийти</Button>:<Link href='/login'><Button variant="default" className="z-40 relative ">Увійти</Button></Link>}
      <div onClick={burgerClass} className="py-3">
        <div className={burger}></div>
      </div>
     
      <div className={bgBurger}>
        <p className="py-5 px-5 border-black"><Link href='/' className="Underline ">Головна</Link></p>
        <p className="py-5 px-5 border-b  border-white"><Link href='' className="Underline">Каталог</Link></p>
        <p className="py-5 px-5  border-b  border-white"><Link href='' className="Underline">Контакти</Link></p>
        <p className="py-5 px-5  border-b  border-white"><Link href='' className="Underline">Доставка та оплата</Link></p>
        <p className="py-5 px-5  border-b  border-white"><Link href='' className="Underline">Гарантія та сервіси</Link></p>
    </div>
    </>
  )
}

export default Auth