import Header from '@/components/Header'
import { useState, type ReactNode } from 'react'
import Footer from '@/components/Footer'
import BurgerMenu from '@/components/Menu'

export default function PageLayout({children}: {children: ReactNode}) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <BurgerMenu open={open} setOpen={setOpen}/>
      <Header open={open} setOpen={setOpen}/>
      {children}
      <Footer/>
    </div>
  )
}
