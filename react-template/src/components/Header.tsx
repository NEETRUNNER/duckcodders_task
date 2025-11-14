import logo from '@/assets/images/logo.png'
import type { Dispatch, SetStateAction } from 'react'

export default function Header({open, setOpen}: {open: boolean,setOpen: Dispatch<SetStateAction<boolean>>}) {
  const navigation = [
    {id: 1, key: 'main', label: 'Головна'},
    {id: 2, key: 'carriers', label: 'Перевізникам'},
    {id: 3, key: 'about-us', label: 'Про нас'},
    {id: 4, key: 'profile', label: 'Профіль перевізника'}
  ]

  return (
    <header className="header">
      <div className="header-container xl:px-28 md:px-10 px-4 h-20 flex items-center justify-between max-w-[1440px] mx-auto">
        <img src={logo} alt="" />
        <div className='xl:block hidden'>
          <nav>
            <ul className="flex gap-x-6">
              {navigation.map(item => (
                <li className={item.id === 4 ? 'text-primary-200 font-bold border-b-2 border-primary-200' : 'text-primary-100 font-bold'} key={item.key}>{item.label}</li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='items-center gap-x-4 xl:flex hidden'>
          <button className='text-primary-200 font-bold mr-4'>Створити профіль</button>
          <div className='separator h-11 w-px bg-black block'/>
          <button className='bg-primary-200 text-white py-3 px-6 font-bold'>Увійти</button>
        </div>

        <div
          className={`burger xl:hidden block ${open ? 'burger--open' : ''}`}
          onClick={() => setOpen(p => !p)}
        >
          <span className="line"></span>
        </div>
      </div>
    </header>
  )
}
