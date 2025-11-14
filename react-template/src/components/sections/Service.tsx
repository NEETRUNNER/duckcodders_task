import { Armchair, Fan, HandHeart, PersonStanding, TvMinimal, Wifi } from "lucide-react"

export default function Service() {
  const services = [
    {id: 1, icon: <Fan color="#4640DE" size={30}/>, label: 'Кондиціонер'},
    {id: 2, icon: <Wifi color="#4640DE" size={30}/>, label: 'Wi-fi'},
    {id: 3, icon: <TvMinimal color="#4640DE" size={30}/>, label: 'TV'},
    {id: 4, icon: <PersonStanding color="#4640DE" size={30}/>, label: 'Туалет'},
    {id: 5, icon: <Armchair color="#4640DE" size={30}/>, label: 'Зручні сидіння'},
    {id: 6, icon: <HandHeart color="#4640DE" size={30}/>, label: 'Перевозимо тварин'},
  ]
  return (
    <div className="service">
      <div className="service-container min-h-[300px] xl:my-0 my-4 h-full max-width mx-auto xl:px-32 md:px-12 px-4 flex items-center justify-center">
        <div>
          <h1 className="text-primary-300 text-3xl font-bold">Сервіс</h1>
          <p className="text-primary-300 mt-2">Найкращі умови для вашого комфорту</p>
          <div className="flex gap-x-8 items-center xl:flex-nowrap flex-wrap gap-y-8 mt-6">
            {services.map(item => (
              <div key={item.id} className="flex gap-x-3 w-full">
                <span>{item.icon}</span>
                <p className="md:text-2xl text-lg font-bold text-primary-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
