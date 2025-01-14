import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    // <h1 className="colortext-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
    //   {children}
    // </h1>
    <h1 className="text-4xl/tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl/tight md:text-6xl/tight ">
      {children}
    </h1>
  )
}
