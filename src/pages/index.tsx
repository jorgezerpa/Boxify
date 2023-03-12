import { useState } from "react"
import Image from "next/image"
import { Inputs } from "@/components/Inputs"
import { Dropdown } from "@/components/Dropdown"
import { Modal } from "@/components/Modal"

export default function Home() {
  const [result, setResult] = useState<{ isSuccess:boolean }>({ isSuccess:false })
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSuccessResponse = () => setResult({ isSuccess:true })
  const handleIsLoading = () => {
    setIsLoading(true)
    window.setTimeout(()=>{
      setIsLoading(false)
      setResult({ isSuccess:true })
    }, 3000)
  }

  const handleRestart = () => {
    setResult({isSuccess:false})
    setIsLoading(false)
  }

  return (
   <div className="p-10 min-h-screen bg-[#FFF6DE]">
    
    <div className="w-full bg-white flex p-10 rounded-xl gap-5 mb-10">
      <div className="shrink-0">
        <Image src="/boxBig.png" alt="" width={77} height={84} />
      </div>
      <div>
        <h3 className="text-2xl text-[#E4973B] font-bold mb-3">AI.Box</h3>
        <p className="text-lg text-gray-600">¿Te imaginas un modelo especifico de caja? ¡No te preocupes! Nuestra AI está especialmente diseñada para ayudarte a encontrar el modelo de caja perfecta para ti con las características que selecciones. Luego podrás descargar la plantilla en el formato que desees para editarla y después imprimirla.</p>
      </div>
    </div>

    <div className="flex w-full gap-5 ">
      <div className="flex-1 overflow-y-scroll max-h-[520px]">
        <Inputs handleIsLoading={handleIsLoading} />
      </div>

      <div className={`flex-1 ${isLoading ? 'block' : 'hidden'} overflow-y-scroll h-[520px]`} >
        <div className="bg-white flex w-full justify-center items-center h-full flex-col gap-3">
          <div className="animate-spin">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M31.5 9.00003C25.5326 9.00003 19.8097 11.3706 15.5901 15.5901C11.3705 19.8097 9 25.5327 9 31.5C9 37.4674 11.3705 43.1904 15.5901 47.4099C19.8097 51.6295 25.5326 54 31.5 54C37.4674 54 43.1903 51.6295 47.4099 47.4099C51.6295 43.1904 54 37.4674 54 31.5C54 25.5327 51.6295 19.8097 47.4099 15.5901C43.1903 11.3706 37.4674 9.00003 31.5 9.00003ZM0 31.5C0 14.103 14.103 3.05176e-05 31.5 3.05176e-05C48.897 3.05176e-05 63 14.103 63 31.5C63 48.897 48.897 63 31.5 63C14.103 63 0 48.897 0 31.5Z" fill="#DF8822"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 9.00004C25.699 8.987 20.1198 11.2275 15.939 15.249C15.0728 16.0499 13.9268 16.4786 12.7477 16.4429C11.5685 16.4071 10.4506 15.9098 9.63449 15.0579C8.81842 14.2061 8.36949 13.0678 8.38436 11.8882C8.39923 10.7086 8.87671 9.58206 9.71399 8.75104C15.5698 3.12441 23.3791 -0.012454 31.5 3.71626e-05C32.6935 3.71626e-05 33.8381 0.474143 34.682 1.31806C35.5259 2.16197 36 3.30656 36 4.50004C36 5.69351 35.5259 6.83811 34.682 7.68202C33.8381 8.52593 32.6935 9.00004 31.5 9.00004Z" fill="#DF8822"/></svg>
          </div>
          <p className="text-center text-[#DF8822] font-bold">Buscando la caja<br/>perfecta para ti...</p>
        </div>
      </div>
      
      <div className={`flex-1 ${(result.isSuccess && !isLoading) ? 'block' : 'hidden'} overflow-y-scroll h-[520px]`} >
        <div className="bg-white flex w-full justify-center  h-full gap-3 p-3">
          <div className="h-full w-[254px] relative shrink-0">
            <Image onClick={()=>setShowModal(true)} src={'/result.png'} alt="" fill style={{ objectFit:'cover' }} />
          </div>
          <div className="flex-1">
            <Dropdown />
            <div className="mt-9">
              <div onClick={handleRestart} className="gap-2 items-center justify-center px-6 py-6 text-[#E4963B] border border-[#E4963B] text-xl flex w-full rounded-full">
                <p className="flex justify-center items-center font-bold text-lg">
                  <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9999 18.9998L12.9999 12.9998M1.26794 10.0428C1.7049 11.4659 2.58316 12.7132 3.77571 13.6043C4.96827 14.4954 6.41333 14.9841 7.90195 14.9998C9.62392 15.0211 11.2935 14.4079 12.5924 13.2772C13.8913 12.1465 14.7287 10.5773 14.9449 8.86881C15.1577 7.16033 14.7333 5.43336 13.753 4.01803C12.7727 2.6027 11.3052 1.5983 9.63094 1.19681C7.95636 0.791753 6.19129 1.01656 4.6717 1.82845C3.1521 2.64033 1.98408 3.98262 1.38994 5.59981" stroke="#DF8822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                  Reiniciar busqueda
                </p>                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


    { showModal && <Modal closeIcon={()=>{setShowModal(false)}} /> }
   </div>
  )
}