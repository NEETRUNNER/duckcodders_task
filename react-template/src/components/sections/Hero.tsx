import car from '@/assets/images/hero-logo.png'
import { Building2, Bus, Flame, Globe, MapPin, Phone, Users } from 'lucide-react'

export default function Hero() {
  const options = [
    {icon: <Flame color='#26A4FF' />, title: 'На ринку від:', descr: 'Травень  31, 2011'},
    {icon: <Users color='#26A4FF' />, title: 'Перевезених пасажирів', descr: '4000+'},
    {icon: <Bus color='#26A4FF' />, title: 'Автопарк', descr: '8 бусів'},
    {icon: <MapPin color='#26A4FF' />, title: 'Обслуговуємо', descr: '8 країн'},
    {icon: <Building2 color='#26A4FF' />, title: 'Місто', descr: 'Львів'}
  ]

  return (
    <section className="main bg-primary-400 xl:mb-24 md:mb-12 mb-4">
      <div className="main-container max-width mx-auto flex flex-col justify-center items-start xl:px-32 px-4 min-h-[350px] max-h-full py-4">
        <p className="breadcrumbs text-primary-100 xl:mt-10 mt-0">Головна / Профіль перевізника / <span className='text-primary-700'>Stripe</span></p>
        <div className='flex gap-x-8 items-center flex-wrap w-full mt-10'>
        <img src={car} alt="" className='h-max'/>

        <div className='flex items-start flex-col'>
          <div className='flex items-center gap-x-3 h-14'>
            <h1 className='text-primary-300 font-bold md:text-6xl text-4xl'>Stripe</h1>
            <button className='py-1 border-[1px] border-primary-200 text-primary-200 md:text-base text-sm px-3'>43 поїздок</button>
          </div>

          <div className='flex gap-x-8 mt-5 md:flex-row flex-col gap-y-4'>
            <div className='flex gap-x-2'>
              <Globe color='#4640DE' />
              <span className='text-primary-200 font-bold'>https://stripe.com</span>
            </div>
            <div className='flex gap-x-2'>
              <Phone color='#4640DE' />
              <a className='text-primary-200 font-bold' href="tel:380735555555">+38 (073) 555 55 55</a>
            </div>
          </div>
          
          <div className='flex gap-x-8 mt-10 flex-wrap'>
            {options.map(item => (
              <div key={item.descr} className='flex gap-x-2 items-center'>
                <div className='bg-white w-max p-3 h-max rounded-full'>
                  {item.icon}
                </div>
                <div className='flex flex-col ml-4'>
                  <p className='text-primary-100 text-sm font-medium'>{item.title}</p>
                  <p className='text-primary-300 text-sm font-bold'>{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}