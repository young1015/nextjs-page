"use client"
import Image from 'next/image'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom';
import FooterAlt from '../components/FooterAlt';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className=''>
        <h1 id='mantinia' className='sm:text-5xl text-[#C19D52] px-4 py-4 justify-center lg:text-6xl flex items-center'>The Lands Between</h1>
        <span className='text-white justify-center flex items-center text-xs'>click to zoom</span>
        <div className='flex justify-center items-center mb-10'>
          <InnerImageZoom
            height={500}
            width={900}
            className=' flex p-md box-border overflow-scroll'
            src="elden_ring_map.jpg" 
            zoomSrc="elden_ring_map.jpg"  
            />
          </div>
      </main>
      <Footer/>
      {/* //https://github.com/vercel/next.js/discussions/13356 */}
    </>    
  )
}

