import logo from '@/assets/images/logo-2.png'
import CustomButton from './ui/CustomButton'
import { Dribbble, Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'

export default function Footer() {
  const socials = [
    {id: 1, icon: <Facebook size={20} color='#fff'/>},
    {id: 2, icon: <Instagram  size={20} color='#fff' />},
    {id: 3, icon: <Dribbble size={20} color='#fff' />},
    {id: 4, icon: <Linkedin size={20} color='#fff' />},
    {id: 5, icon: <Twitter size={20} color='#fff' />},
  ]

  return (
    <footer className="bg-primary-700">
      <div className="max-width mx-auto px-6 md:px-12 lg:px-24 xl:px-32 pt-16 pb-10">

        {/* GRID  → 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">

          {/* Logo + text */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="" className="max-w-40 h-max" />
            <p className="text-white max-w-60">
              Платформа пошуку перевізників та бронювання поїздок
            </p>
          </div>

          {/* Clients */}
          <ul className="flex flex-col gap-2">
            <li className="font-bold text-white mb-2">Клієнтам</li>
            {["Головна","Про нас","Ціни","Маршрути","Політика приватності"].map(item => (
              <li key={item} className="text-white hover:opacity-80 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Partners */}
          <ul className="flex flex-col gap-2">
            <li className="font-bold text-white mb-2">Перевізникам</li>
            {["Help Docs","Особистий кабінет","Оновлення","Контакти"].map(item => (
              <li key={item} className="text-white hover:opacity-80 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white font-medium">Зворотній зв’язок</p>
              <p className="text-white text-sm">
                Маєш пропозиції щодо покращення сервісу — пиши нам!
              </p>
            </div>

            {/* Input + button */}
            <div className="flex mt-2 gap-x-2">
              <input
                type="text"
                className="bg-white px-4 py-2 outline-none flex-1"
                placeholder="Email Address"
              />
              <CustomButton classname="rounded-l-none">
                Надіслати
              </CustomButton>
            </div>

            <div className="flex items-center gap-x-2">
              <Phone color="#26A4FF" />
              <span className="text-primary-800 text-sm">+ 38 (073) 555 55 55</span>
            </div>

            <div className="flex items-center gap-x-2">
              <Mail color="#26A4FF" />
              <span className="text-primary-800 text-sm">info@company.com</span>
            </div>
          </div>
        </div>

        {/* Line separator */}
        <div className="w-full h-[1px] bg-white mt-16 mb-10 max-w-[1200px] mx-auto" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-primary-800 text-center">
            2024 @ Sprinters. All rights reserved.
          </p>

          <div className="flex gap-x-3">
            {socials.map(item => (
              <div key={item.id} className="bg-gray-900 p-3 rounded-full cursor-pointer hover:opacity-80 transition">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
