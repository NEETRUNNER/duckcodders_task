import driver from '@/assets/images/driver.png'
import { Instagram, Linkedin } from 'lucide-react'

export default function Drivers() {
  
  const drivers = [
    {id: 1, icon: driver, name: 'Олександр', experience: '5 років'},
    {id: 2, icon: driver, name: 'Володимир', experience: '7 років'},
    {id: 3, icon: driver, name: 'Ірина', experience: '1 років'},
    {id: 4, icon: driver, name: 'Михайло', experience: '1 років'},
    {id: 5, icon: driver, name: 'Юлія', experience: '2 років'},
  ]

  return (
    <section className="drivers">
      <div className="drivers-container max-width xl:my-16 xs:my-4 flex justify-center items-center mx-auto xl:px-32 md:px-12 px-4">
        <div className='flex flex-wrap flex-col my-4'>
          <div className='flex justify-between items-center'>
            <h1 className="text-primary-300 font-bold text-3xl">Наші водії</h1>
            <p className="text-primary-200 cursor-pointer font-bold">Усі водії (7)</p>
          </div>
          <div className='flex gap-x-4 mt-3 xl:flex-nowrap flex-wrap justify-center gap-y-4'>
            {drivers.map(item => (
              <div key={item.id} className="w-[225px] border-[1px] justify-center flex-col py-6 flex items-center text-primary-100">
                <img src={item.icon} alt="" />
                <p className="font-bold text-primary-300 mt-2">{item.name}</p>
                <p className="text-primary-100 mt-2">Досвід роботи: {item.experience}</p>
                <div className='flex mt-5 gap-x-4'>
                  <Instagram size={18} color='#515B6F'/>
                  <Linkedin size={18} color='#515B6F'/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="line xl:w-full w-3/4 h-[0.5px] bg-primary-600 block max-w-[1200px] mx-auto"/> 
    </section>
  )
}
