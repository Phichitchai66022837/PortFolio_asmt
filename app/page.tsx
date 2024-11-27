import React from 'react'

function page() {
  return (
      <div className='bg-[url("../public/background.jpg")] w-screen h-screen object-cover bg-no-repeat bg-center bg-cover'>
        <nav className='flex justify-between pt-2 pr-10 pl-10 items-center h-[10%] animate-elementFade w-full'>
          <div className='flex items-center'>
            <div className='size-7 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='white' className='hover:fill-gray-400 duration-[0.5s]'><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></div>
            <span className='ml-5 font-bold text-[20px]'>My portfolio</span>
          </div>
          <div>
            <ul className='flex font-semibold'>
              <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#">HOME</a></li>
              <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#">ABOUT</a></li>
              <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#">PORTFOLIO</a></li>
              <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#">CONTACT</a></li>
            </ul>
          </div>
        </nav>
        <main className='flex h-[90%] items-center'>
          <div className='flex pl-36 pb-24 flex-col w-[50%]'>
            <span className='font-semibold text-[30px] animate-translate'>Hi! everyone</span>
            <span className='font-semibold text-[30px] animate-translate'>I&apos;M PHICHITCHAI </span>
            <span className='font-bold text-[105px] ml-10 animate-blinking'>FONT-END UX/UI</span>
            <a href="#" className='font-bold w-max h-[50px] flex justify-center items-center rounded-[40px] pl-[50px] pr-[50px] bg-blue-500 text-[20px] hover:bg-blue-700 duration-[0.3s] animate-elementFade'>CONTACT</a>
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className='border-2 rounded-xl p-5 overflow-hidden'><div className='bg-[url("./pic/riden.jpg")] object-cover bg-cover bg-center bg-no-repeat w-[350px] h-[550px] rounded-md animate-blinkingImg duration-1000 delay-[1000ms] hover:scale-150 hover:duration-100 hover:delay-100'></div></div>
          </div>
        </main>
      </div>
  )
}

export default page
