import React from 'react'

const Hero = () => {
  return (
    <main class="backdrop-opacity-80 backdrop-invert bg-white/80 Gotham">
      <div className='bg-[url("../assets/img/estudiantes_coar.jpg")] bg-cover'>
        <div className='max-w-[1320px] mx-auto font-cera mb-[6rem]'>
          <div className=' relative sm:mx-[1rem] sm:px-10 px-5 h-screen pt-[8rem] xl:pt-[10rem] z-20'>
            <div className='sm:flex'>
              <div className='md:w-[100%] sm:text-left'>
                <div className='sm:mx-0'>    
                  <h1 className='sm:font-medium md:font-semibold md:text-[4.5rem] md:leading-[4.8rem] font-[700] tracking-[-0.075rem] xl:text-5xl text-[2rem] sm:mr-4 sm:mb-2 xl:w-[60%] xl:leading-[4rem] leading-10 text-[#ffb532]'>Comunidad de la red Colegios de Alto Rendimiento (COAR) y Programa del Diploma del Bachillerato Internacional.</h1>
                  <p className='text-[1.2rem] md:text-[2rem] mt-3 sm:text-[1.1rem] xl:mr-[5rem] font-normal xl:text-[1.4rem] xl:w-[60%] text-white'>Coarinos es la comunidad abierta y positiva para futuros y actuales estudiantes de la red Colegios de Alto Rendimiento (COAR) y Bachillerato Internacional (IBDP).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-0 bg-[#005587] bg-opacity-70 z-0'></div>
      </div>
    </main>
  )
}

export default Hero