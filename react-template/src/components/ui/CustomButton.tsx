import type { ReactNode } from "react";

export default function CustomButton({children, classname}: {children: ReactNode, classname?: string}) {
  return (
    <button className={`px-3 py-1 bg-primary-200 text-white py-3 px-6 font-bold ${classname}`}>{children}</button>
  )
}
