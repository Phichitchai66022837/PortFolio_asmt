import React from 'react'



function page() {
  return (
    <div className='bg-[url("./pic/background.jpg")] w-screen h-screen object-cover bg-no-repeat bg-center bg-cover overflow-x-hidden relative scroll-smooth'>
      <nav className='flex justify-between pt-2 pr-10 pl-10 items-center h-[10%] animate-elementFade w-full sticky top-0  z-50 backdrop-opacity-50 backdrop-brightness-[0.1] border-b'>
        <div className='flex items-center'>
          <div className='size-7 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='white' className='hover:fill-gray-400 duration-[0.5s]'><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg></div>
          <span className='ml-5 font-bold text-[20px]'>My portfolio</span>
        </div>
        <div>
          <ul className='flex font-semibold'>
            <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#home">HOME</a></li>
            <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#About">ABOUT</a></li>
            <li className='ml-7 cursor-pointer hover:text-gray-400 duration-[0.5s]'><a href="#project">PROJECT</a></li>
          </ul>
        </div>
      </nav>
      <div id='home' className='absolute top-0'></div>
      <main className='flex h-[90%] items-center mb-10'>
        <div className='flex pl-36 pb-24 flex-col w-[50%]'>
          <span className='font-semibold text-[30px] animate-translate'>Hi! everyone</span>
          <span className='font-semibold text-[30px] animate-translate'>I&apos;M PHICHITCHAI </span>
          <span className='font-bold text-[105px] ml-10 animate-blinking'>FONT-END UX/UI</span>
          <a href="https://github.com/Phichitchai66022837/PortFolio_asmt.git" target='_blank' className='font-bold w-max h-[50px] flex justify-center items-center rounded-[40px] pl-[50px] pr-[50px] bg-blue-500 text-[20px] hover:bg-blue-700 duration-[0.3s] animate-elementFade hover:scale-110'>GITHUB</a>
        </div>
        <div className='w-[50%] flex justify-center items-center'>
          <div className='border-2 rounded-xl p-5 overflow-hidden'><div className='bg-[url("./pic/riden.jpg")] object-cover bg-cover bg-center bg-no-repeat w-[350px] h-[550px] rounded-md animate-blinkingImg duration-1000 delay-[1000ms] hover:scale-125 hover:duration-100 hover:delay-100'></div></div>
        </div>
      </main>

      <main className='flex justify-center items-center pt-14 mb-7' id='About'>
        <section className=' rounded-lg w-[80%] flex justify-center items-center backdrop-opacity-50 backdrop-brightness-[0.1]'>
          <article className='flex flex-col justify-center items-center pt-7 pb-7'>
            <span className='font-bold text-[50px]'>Hello!<span className='text-blue-400 ml-4'>Welcome to My Portfolio</span></span>
            <article className='flex flex-col '>
              <span className='font-bold text-[25px] mt-6'>My name is<span className='text-blue-300 ml-4'>PHICHITCHAI PUTTHAREEWONG.</span></span>
              <span className='font-bold text-[25px]'>My nickname is<span className='text-blue-300 ml-4'>TA.</span></span>
              <span className='font-bold text-[25px]'>Student ID<span className='text-blue-300 ml-4'>66022837.</span></span>
              <span className='font-bold text-[25px]'>Age<span className='text-blue-300 ml-4'>20.</span></span>
            </article>
          </article>
        </section>
      </main>

      <main className='mt-16 flex justify-center items-center mb-24' id='project'>
        <div className='flex justify-center items-center w-[80%]  backdrop-opacity-50 backdrop-brightness-[0.1] rounded-lg'>
          <section className='w-[50%] flex flex-col justify-center p-6'>
            <span className='font-bold text-[40px]'>PROJECT NAME &#58;<span className='text-blue-400 ml-4'>TAMROI</span></span>
            <article className='flex flex-col pl-7 '>
              <span className='text-blue-300 ml-4 font-bold text-[20px]'>Welcome to our online plant store&#44;	 where you can find a wide variety of healthy plants for your home or garden. Whether you're a beginner or an expert&#44;	 we offer everything from low-maintenance succulents to vibrant flowers. Browse our collection and have your favorite plants delivered right to your doorstep. Bring nature home with ease!</span>
            </article>
          </section>
          <section className='w-[50%] flex justify-center items-center p-3'>
            <img className='w-[500px] h-[300px] rounded-sm border-2' src="/Tamroi.png" alt="" />
          </section>
        </div>
      </main>
    </div>
  )
}

export default page
