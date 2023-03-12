import React, { useState } from 'react'

const GEOMETRICS = [
    { name:'Cubo' },
    { name:'Círculo' },
    { name:'Corazón' },
    { name:'Rombo' },
    { name:'Rosas' },
    { name:'Diamantes' },
    { name:'Hallowen' },
  ]
  const TYPES = [
    { name:'Asas' },
    { name:'Tapa' },
    { name:'Con Acetato' },
    { name:'Encajable' },
    { name:'Solapas' },
  ]
  
  const CONTENTS = [
    { name:'Comida' },
    { name:'Repostería' },
    { name:'Franelas' },
    { name:'Tazas' },
    { name:'Suéteres' },
    { name:'Zapatos' },
    { name:'Regalos' },
  ]


export const Inputs = ({ handleIsLoading }: { handleIsLoading:()=>void }) => {
    const [selectedGeometric, setSelectedGeometric] = useState<null|string>(null)
    const [selectedType, setSelectedType] = useState<null|string>(null)
    const [selectedContent, setSelectedContent] = useState<null|string>(null)


  return (
    <div className="w-full bg-white flex flex-col p-5 rounded-xl gap-5">
      <div>
        <h3 className="text-2xl text-[#E4973B] font-bold mb-3 ">Forma</h3>
        <div className="flex gap-2 flex-wrap">
          {GEOMETRICS.map(geometric=>(
            <div key={geometric.name+'Geometrics'} onClick={()=>setSelectedGeometric(geometric.name)} className="gap-2 items-center px-4 py-1 text-white bg-[#E4963B] text-sm inline-flex rounded-full">
              { geometric.name } 
              <span>
                { selectedGeometric === geometric.name &&  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.69999L0 5.69999L1.4 4.29999L4 6.89999L10.6 0.299988L12 1.69999L4 9.69999Z" fill="white"/></svg>} 
                { selectedGeometric !== geometric.name &&  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 5.375V0.5H4.875V5.375H0V8.625H4.875V13.5H8.125V8.625H13V5.375H8.125Z" fill="white"/></svg>} 
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl text-[#E4973B] font-bold mb-3 ">Tipo</h3>
        <div className="flex gap-2 flex-wrap">
          {TYPES.map(type=>(
            <div key={type.name+'types'} onClick={()=>setSelectedType(type.name)} className="gap-2 items-center px-4 py-1 text-white bg-[#E4963B] text-sm inline-flex rounded-full">
              { type.name } 
              <span>
                { selectedType === type.name &&  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.69999L0 5.69999L1.4 4.29999L4 6.89999L10.6 0.299988L12 1.69999L4 9.69999Z" fill="white"/></svg>} 
                { selectedType !== type.name &&  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 5.375V0.5H4.875V5.375H0V8.625H4.875V13.5H8.125V8.625H13V5.375H8.125Z" fill="white"/></svg>} 
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl text-[#E4973B] font-bold mb-3 ">Contenido</h3>
        <div className="flex gap-2 flex-wrap">
          {CONTENTS.map(content=>(
            <div key={content.name+'contents'} onClick={()=>setSelectedContent(content.name)} className="gap-2 items-center px-4 py-1 text-white bg-[#E4963B] text-sm inline-flex rounded-full">
              { content.name } 
              <span>
                { selectedContent === content.name &&  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.69999L0 5.69999L1.4 4.29999L4 6.89999L10.6 0.299988L12 1.69999L4 9.69999Z" fill="white"/></svg>} 
                { selectedContent !== content.name &&  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 5.375V0.5H4.875V5.375H0V8.625H4.875V13.5H8.125V8.625H13V5.375H8.125Z" fill="white"/></svg>} 
              </span>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-end pt-16">
        <div onClick={handleIsLoading} className="gap-2 items-center px-5 py-2 text-[#E4963B] border-[#E4963B] border text-xl inline-flex rounded-full ">
          Crear Caja
          <span>
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.795 24.605L24.605 19.795C24.9442 19.4558 25.1138 19.0242 25.1138 18.5C25.1138 17.9758 24.9442 17.5442 24.605 17.205L19.7488 12.3488C19.4096 12.0096 18.9859 11.8474 18.4778 11.8622C17.9684 11.8782 17.5442 12.0558 17.205 12.395C16.8658 12.7342 16.6962 13.1658 16.6962 13.69C16.6962 14.2142 16.8658 14.6458 17.205 14.985L18.87 16.65H12.9038C12.3796 16.65 11.9479 16.827 11.6087 17.181C11.2696 17.5361 11.1 17.9758 11.1 18.5C11.1 19.0242 11.2776 19.4632 11.6328 19.8172C11.9868 20.1724 12.4258 20.35 12.95 20.35H18.87L17.1587 22.0613C16.8196 22.4004 16.6574 22.8247 16.6722 23.334C16.6882 23.8422 16.8658 24.2658 17.205 24.605C17.5442 24.9442 17.9758 25.1138 18.5 25.1138C19.0242 25.1138 19.4558 24.9442 19.795 24.605ZM18.5 37C15.9408 37 13.5358 36.5141 11.285 35.5422C9.03417 34.5716 7.07625 33.2538 5.41125 31.5888C3.74625 29.9238 2.42843 27.9658 1.4578 25.715C0.485934 23.4642 0 21.0592 0 18.5C0 15.9408 0.485934 13.5358 1.4578 11.285C2.42843 9.03417 3.74625 7.07625 5.41125 5.41125C7.07625 3.74625 9.03417 2.42782 11.285 1.45595C13.5358 0.485317 15.9408 0 18.5 0C21.0592 0 23.4642 0.485317 25.715 1.45595C27.9658 2.42782 29.9238 3.74625 31.5888 5.41125C33.2538 7.07625 34.5716 9.03417 35.5422 11.285C36.5141 13.5358 37 15.9408 37 18.5C37 21.0592 36.5141 23.4642 35.5422 25.715C34.5716 27.9658 33.2538 29.9238 31.5888 31.5888C29.9238 33.2538 27.9658 34.5716 25.715 35.5422C23.4642 36.5141 21.0592 37 18.5 37Z" fill="#E4963B"/></svg>
          </span>
        </div>
      </div>


    </div>
  )
}
