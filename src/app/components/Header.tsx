import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>  
      <header id='top' className='h-[14vh] top-0 flex place-items-center p-6 justify-center bg-black'>
          <div className='flex hover:scale-105 transition duration-300 w-[20%] justify-center'>
            <a href="/">
                <Image
                  className='h-[100%]'
                  width={220}
                  height={220}
                  src={'/eldenring_new.webp'}
                  alt=''
                />
            </a>
          </div>
          <nav className='flex space-x-4'>
            <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition' href="characters">Characters</a>
            <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition' href="lore">Lore</a>
            <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition' href="map">Map</a>  
          </nav>
      </header> 
    </>
  )
}