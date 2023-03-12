import React, { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/Sidebar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1 overflow-y-scroll max-h-screen'>
            { children }
        </div>
    </div>
  )
}

export default MainLayout