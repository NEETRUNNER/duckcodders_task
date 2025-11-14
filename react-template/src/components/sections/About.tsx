import CustomButton from "../ui/CustomButton";
import useEmblaCarousel from 'embla-carousel-react'

import user from '@/assets/images/user.png'
import { Star } from "lucide-react";
import { DotButton, useDotButton } from "../embla/EmblaCarouselDots";

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const sliderData = [
    {id: 1, icon: user, name: 'Ben Yardley', from: 'Київ - Кишинів', date: '1 May 2023', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', rating: 5},
    {id: 2, icon: user, name: 'Ben Yardley', from: 'Київ - Кишинів', date: '1 May 2023', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', rating: 5},
    {id: 3, icon: user, name: 'Ben Yardley', from: 'Київ - Кишинів', date: '1 May 2023', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', rating: 5},
    {id: 4, icon: user, name: 'Ben Yardley', from: 'Київ - Кишинів', date: '1 May 2023', descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', rating: 5},
  ]

  return (
    <section className="about h-[579px] bg-primary-400">
      <div className="about-container grid grid-cols-[450px_1fr] gap-x-8 max-width mx-auto pt-[72px] px-32">

        <div className="w-full">
          <h1 className="text-primary-300 text-5xl font-bold">Що <span className="text-primary-500">кажуть люди?</span></h1>
          <p className="text-primary-300 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <CustomButton classname="mt-12">Залишити відгук</CustomButton>
        </div>

        <div className="max-w-[740px] w-full">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {sliderData.map(item => (
                <div key={item.id} className="flex flex-[0_0_50%] mr-5 ml-5 flex-col bg-white min-w-[350px] max-w-[350px] w-full py-4 px-6">
                  <div className="flex gap-x-2">
                    <img src={item.icon} alt="" />
                    <div>
                      <p className="text-primary-300 font-bold text-xl">{item.name}</p>
                      <p className="text-primary-200 font-medium">{item.from}</p>
                      <p className="text-primary-100">{item.date}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-primary-300">{item.descr}</p>
                  <div className="flex mt-24 gap-x-1">
                    {Array.from({length: item.rating}).map((_, i) => (
                      <Star key={i} size={15} color="#4640DE" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__dots flex justify-center items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
