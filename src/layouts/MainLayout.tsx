import React, { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/Sidebar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className='fixed md:hidden w-full top-0 left-0 bottom-0 right-0 flex-col bg-[#E4973B] flex items-center justify-center'>
        <p className='text-white font-bold text-xl text-center'>Ups!</p>
        <p className='text-white font-bold text-xl text-center'>La app aún no esta disponible para Dispositivos pequeños</p>
      </div>

      <div className='flex'>
          <Sidebar />
          <div className='flex-1 overflow-y-scroll max-h-screen'>
              { children }
          </div>
      </div>
    </div>
  )
}

export default MainLayout