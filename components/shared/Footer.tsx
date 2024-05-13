
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="min-h-80 bg-black mt-20 text-white ">
       <div className="max-w-screen-2xl mx-auto px-4 flex flex-col w-full">
            <div className="flex flex-col lg:flex-row pt-10 justify-between mx-auto w-full max-w-2xl lg:max-w-full"> 
                <div className="flex gap-2 lg:gap-20 justify-between w-full lg:w-fit">
                    <ul>
                        <li className="mb-3">Фіз. особам</li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Контакти</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Установка</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Доставка та оплата</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Гарантія та сервіс</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Вакансії</Link></li>
                    </ul>
                    <ul>
                        <li>Юр. особам</li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Виробники</Link></li>
                    </ul>
                    <ul>
                        <li>Каталоги</li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Брошура</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Juventa</Link></li>
                        <li className="text-md font-thin my-1 underline"><Link href=''>Botticelli</Link></li>
                    </ul>
                </div>

                <div className="flex lg:gap-20 mt-10 lg:mt-0 lg:w-fit flex-col sm:flex-row mx-auto lg:mx-0 w-fit sm:w-full justify-between">
                    <div className="font-thin">
                        <p>Телефон:(000) 000-00-00,<br></br>(111) 111-11-11,(222) 222-22-22</p>
                        <br />
                        <p>Email:randomemail@gmail.com</p>
                        <br />
                        <p>Адреса: тут має бути адреса</p>
                    </div>
                    <div>
                        <p className="text-center mt-5 sm:mt-0">Ми в соцмережах</p>
                        <div className="flex gap-5 mt-5 sm:mt-20 mx-auto w-fit">
                            <Image alt="" width={30} height={30} src="/icons8-telegram-app.svg"></Image>
                            <Image alt="" width={30} height={30} src="/icons8-instagram.svg"></Image>
                            <Image alt="" width={30} height={30} src="/icons8-facebook.svg"></Image>
                            <Image alt="" width={30} height={30} src="/icons8-twitter.svg"></Image>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-10 lg:mt-16 flex justify-between font-thin flex-col lg:flex-row mx-auto max-w-screen-2xl lg:w-full mb-5">
                <div>Меблі для ванної інтернет магазин <span className="font-normal">SANTEHVAN</span> ©2024</div>
                <div>Представник українських виробників меблів для ванної:</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer