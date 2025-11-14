import type { Dispatch, SetStateAction } from "react";
import CustomButton from "./ui/CustomButton";
import { X } from "lucide-react";

export default function BurgerMenu({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div
      onClick={() => setOpen(false)}
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 
      ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
        {/* Сайдбар */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full xl:w-1/4 md:w-1/2 w-full bg-white shadow-xl z-50 p-6 
          transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
        <button onClick={() => setOpen(false)} className="block ml-auto">
          <X />
        </button>
        
        {/* Навигация */}
        <nav>
          <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700">
            <li className="hover:text-primary-500 cursor-pointer">Головна</li>
            <li className="hover:text-primary-500 cursor-pointer">Перевізникам</li>
            <li className="hover:text-primary-500 cursor-pointer">Про нас</li>
            <li className="hover:text-primary-500 cursor-pointer">Профіль перевізника</li>
          </ul>
        </nav>

        {/* Низ меню */}
        <div className="mt-10 flex flex-col gap-3">
          <CustomButton>Створити профіль</CustomButton>
          <CustomButton>
            Увійти
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
