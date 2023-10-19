"use client"
import Image from 'next/image'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom';

export default function Home() {
  return (
    <>
      <main>
        <h1 id='mantinia' className='text-[#C19D52] px-4 py-4 text-6xl justify-center flex items-center'>The Lands Between</h1>
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
    </>    
  )
}