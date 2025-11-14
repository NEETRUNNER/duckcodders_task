import { ChevronDown, Facebook, Plus, Twitter } from "lucide-react";
import CustomButton from "../ui/CustomButton";

import car1 from '@/assets/images/car (1).jpg'
import car2 from '@/assets/images/car (2).jpg'
import car3 from '@/assets/images/car (3).jpg'

import france from '@/assets/icons/france.png'
import italy from '@/assets/icons/italy.png'
import germany from '@/assets/icons/germany.png'
import nederlands from '@/assets/icons/nederlands.png'
import spanish from '@/assets/icons/spanish.png'
import { Calendar } from "../ui/calendar";
import { useState } from "react";

export default function Descriptions() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const countries = [
    {icon: france, label: 'Франція'},
    {icon: italy, label: 'Італія'},
    {icon: germany, label: 'Німеччина'},
    {icon: nederlands, label: 'Нідерланди'},
    {icon: spanish, label: 'Іспанія'},
  ]

  return (
    <section className="description">
      <div className="description-container max-width mx-auto xl:py-[72px] md:py-12 py-4 flex justify-center xl:px-32 md:px-12 px-4 items-center">
        <div className="flex gap-x-16 gap-y-4 justify-center xl:flex-nowrap flex-wrap w-full">
          <div className="max-w-[750px] w-full">
            <h1 className="text-primary-300 font-bold text-3xl">Опис перевізника</h1>
            <p className="text-primary-100 mt-4">Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.</p>

            <h2 className="text-primary-300 font-bold text-3xl mt-6">Ми у соц. мережах</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <CustomButton classname='flex gap-x-2'><Facebook />twitter.com/stripe</CustomButton>
              <CustomButton classname='flex gap-x-2'><Twitter />facebook.com/StripeHQ</CustomButton>
            </div>
            <div className="flex flex-col gap-y-3 mt-10">
              <div className="max-w-[700px] w-full h-72 overflow-hidden relative">
                <img src={car2} alt="" className="max-w-[700px] w-full h-full absolute object-cover object-[50%_80%]" />
              </div>
              <div className="max-w-[700px] w-full h-72 overflow-hidden relative">
                <img src={car1} alt="" className="max-w-[700px] w-full h-full absolute object-cover object-[50%_80%]" />
              </div>
              <div className="max-w-[700px] w-full h-72 overflow-hidden relative">
                <img src={car3} alt="" className="max-w-[700px] h-full w-full absolute object-cover object-[50%_70%]" />
              </div>
            </div>
          </div>
          <div className="max-w-[376px] w-full">
            <h2 className="text-primary-300 font-bold text-3xl">Обслуговуємо країни</h2>
            <div className="flex flex-col gap-4 mt-8">
              {countries.map(item => (
                <div key={item.label} className="flex gap-x-2 items-center">
                  <img src={item.icon} alt="" />
                  <p className="text-primary-300">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-primary-200 font-bold flex gap-x-4 cursor-pointer mt-6">Усі країни <ChevronDown/></p>

            <div className="w-full h-[0.5px] block mt-6 bg-primary-600" />

            <h3 className="text-primary-300 font-bold text-3xl mt-16">Календар поїздок</h3>
            <div className="w-full border-[1px] border-primary-100 mt-6 p-4">
              <CustomButton classname="flex md:px-20 px-4 w-full py-3 gap-x-2"><Plus/> Купити квиток</CustomButton>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm w-full mt-3" captionLayout="dropdown"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
