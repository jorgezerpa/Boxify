import React, { useState } from 'react'
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
    const [isMouseOver, setIsMouseOver] = useState(false)
    const router = useRouter()
    const currentRoute = 'Ai.Box'
    console.log(isMouseOver)

  return (
    <div onMouseOver={()=>setIsMouseOver(true)} onMouseLeave={()=>setIsMouseOver(false)} 
        className={`h-screen ${ isMouseOver ? 'w-[275px]' : 'w-[120px]' } transition-all bg-[#E4973B] rounded-r-xl`}>
        <div className='flex flex-col items-start pt-10 gap-10 px-3'>
            <div>
                <div className='w-[275px] flex justify-center '>
                    { isMouseOver &&  <Image className='shrink-0 min-w-[117px]' src="/logo.png" alt='' width={117} height={123} />}
                </div>
                { !isMouseOver &&  <Image className='shrink-0 min-w-[117px] scale-50' src="/logo-no-letter.png" alt='' width={57} height={57} />}
            </div>
            {items.map(item=>(
                <div key={item.title+'sidebar'} className={`shrink-0 flex gap-5 px-5 justify-start min-w-[200px] items-center p-0 rounded-full w-full ${item.title===currentRoute && "bg-[#DF8822]"}`}>
                    <div className={`${!isMouseOver && 'bg-[#DF8822]'} rounded-full p-5`}>
                        <Image src={item.icon} alt='' width={20} height={20} />
                    </div>
                    <div className={`text-white font-bold text-xl ${!isMouseOver && 'hidden'}`}>
                        { item.title }
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}
