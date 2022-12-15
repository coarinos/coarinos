import React from 'react'
import Link from 'next/link'

function Admision () {
  return (
    <section className="max-w-[1340px] mx-auto gotham">
        <div className="xl:mx-[6rem] xl:px-10 xl:py-[5rem] sm:mx-[2rem] sm:px-5 px-7 mb-[10rem]">
            <h2 className="xl:text-[2rem] md:text-[1.6rem] text-[1.3rem] font-[700] mb-2 text-[#ff0040] tracking-tight text-center">Proceso Único de Admisión COAR 2023</h2>
            <p className="xl:text-[1.25rem] xl:px-[4rem] md:text-lg tracking-[-0.02rem] text-center">El proceso único de admisión (PUA) es regulado por la Norma Técnica Bases para el Proceso Único de Admisión 2023 a los Colegios de Alto Rendimiento, aprobada mediante Resolución Viceministerial N.° 00161-2022-MINEDU.</p>
            <article className="mt-10 flex flex-col md:flex-row justify-around lg:gap-7 gap-5 text-center font-medium">
                <Link href="../assets/pdf/norma_tecnica_pua_coar_2023.pdf"  target="_blank"  className="md:px-10 px-3 py-4 border-2 border-[#ff0040] rounded-md hover:text-[#ff0040] duration-300">Normas técnicas PUA COAR 2023</Link>
                <Link href="../assets/pdf/bases_admision_coar_2023.pdf" target="_blank" className="md:px-10 px-3 py-4 border-2 border-[#ff0040] rounded-md hover:text-[#ff0040] duration-300"  >Bases para el PUA COAR 2023</Link>
                <Link href="/" target="_blank" className="md:px-10 px-3 py-4 border-2 border-[#ff0040] rounded-md hover:text-[#ff0040] duration-300">Prospecto PUA COAR 2023</Link>
            </article>
        </div>
    </section>
  )
}

export default Admision