import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const items = [
    { title:'Inicio', icon:'/icons/home.png' },
    { title:'Perfil', icon:'/icons/profile.png' },
    { title:'Plantillas', icon:'/icons/plantillas.png' },
    { title:'Ai.Box', icon:'/icons/box.png' },
    { title:'Ajustes', icon:'/icons/options.png' },
]

export const Sidebar = () => {
    const router = useRouter()
    const currentRoute = 'Ai.Box'

  return (
    <div className='h-screen w-[275px] bg-[#E4973B] rounded-r-xl'>
        <div className='flex flex-col items-center pt-10 gap-10 px-3'>
            <div>
                <Image src="/logo.png" alt='' width={117} height={123} />
            </div>
            {items.map(item=>(
                <div key={item.title+'sidebar'} className={`flex gap-5 px-10 items-center p-4 rounded-full w-full ${item.title===currentRoute && "bg-[#DF8822]"}`}>
                    <div>
                        <Image src={item.icon} alt='' width={20} height={20} />
                    </div>
                    <div className='text-white font-bold text-xl'>
                        { item.title }
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}
