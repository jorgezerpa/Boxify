import React from 'react'
import Image from 'next/image'

export const Modal = ({closeIcon}:{closeIcon:()=>void}) => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center'>
        <div className='relative min-h-[50vh]  p-24 rounded-xl shadow shadow-gray-400 flex justify-center items-center bg-white'>
            <div className='absolute top-2 right-2' onClick={closeIcon}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 60C25.85 60 21.95 59.212 18.3 57.636C14.65 56.062 11.475 53.925 8.775 51.225C6.075 48.525 3.938 45.35 2.364 41.7C0.788 38.05 0 34.15 0 30C0 25.85 0.788 21.95 2.364 18.3C3.938 14.65 6.075 11.475 8.775 8.775C11.475 6.075 14.65 3.937 18.3 2.361C21.95 0.787 25.85 0 30 0C34.15 0 38.05 0.787 41.7 2.361C45.35 3.937 48.525 6.075 51.225 8.775C53.925 11.475 56.062 14.65 57.636 18.3C59.212 21.95 60 25.85 60 30C60 34.15 59.212 38.05 57.636 41.7C56.062 45.35 53.925 48.525 51.225 51.225C48.525 53.925 45.35 56.062 41.7 57.636C38.05 59.212 34.15 60 30 60ZM30 54C36.65 54 42.313 51.663 46.989 46.989C51.663 42.313 54 36.65 54 30C54 23.35 51.663 17.687 46.989 13.011C42.313 8.337 36.65 6 30 6C23.35 6 17.688 8.337 13.014 13.011C8.338 17.687 6 23.35 6 30C6 36.65 8.338 42.313 13.014 46.989C17.688 51.663 23.35 54 30 54Z" fill="#DF8822"/><path d="M20.7325 35.7305L26.4661 30.0001L20.7325 24.2696C20.2635 23.8006 20 23.1644 20 22.5011C20 21.8378 20.2635 21.2016 20.7325 20.7326C21.2016 20.2636 21.8377 20.0001 22.501 20.0001C23.1644 20.0001 23.8005 20.2636 24.2695 20.7326L30 26.4662L35.7305 20.7326C35.9627 20.5004 36.2384 20.3161 36.5418 20.1904C36.8453 20.0648 37.1705 20.0001 37.499 20.0001C37.8274 20.0001 38.1526 20.0648 38.4561 20.1904C38.7595 20.3161 39.0352 20.5004 39.2675 20.7326C39.4997 20.9648 39.6839 21.2406 39.8096 21.544C39.9353 21.8474 40 22.1727 40 22.5011C40 22.8295 39.9353 23.1548 39.8096 23.4582C39.6839 23.7617 39.4997 24.0374 39.2675 24.2696L33.5339 30.0001L39.2675 35.7305C39.4997 35.9628 39.6839 36.2385 39.8096 36.5419C39.9353 36.8454 40 37.1706 40 37.499C40 37.8275 39.9353 38.1527 39.8096 38.4561C39.6839 38.7596 39.4997 39.0353 39.2675 39.2675C39.0352 39.4998 38.7595 39.684 38.4561 39.8097C38.1526 39.9354 37.8274 40.0001 37.499 40.0001C37.1705 40.0001 36.8453 39.9354 36.5418 39.8097C36.2384 39.684 35.9627 39.4998 35.7305 39.2675L30 33.5339L24.2695 39.2675C24.0373 39.4998 23.7616 39.684 23.4581 39.8097C23.1547 39.9354 22.8295 40.0001 22.501 40.0001C22.1726 40.0001 21.8474 39.9354 21.5439 39.8097C21.2405 39.684 20.9648 39.4998 20.7325 39.2675C20.5003 39.0353 20.3161 38.7596 20.1904 38.4561C20.0647 38.1527 20 37.8275 20 37.499C20 37.1706 20.0647 36.8454 20.1904 36.5419C20.3161 36.2385 20.5003 35.9628 20.7325 35.7305Z" fill="#DF8822"/></svg>
            </div>
            <Image src={'/result.png'} alt="" width={306} height={346} />
        </div>
    </div>
  )
}