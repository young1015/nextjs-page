import Image from 'next/image'

export default function Home() {
  return (
    <>
       <header id='top' className='h-[14vh] top-0 flex place-items-center p-6 justify-center bg-black'>
          <div className='flex hover:scale-105 transition duration-300 w-[20%] justify-center'>
            <Image 
                className='h-[100%]'
                width={220}
                height={220}
                src={'/eldenring_new.webp'}
                alt=''
              />
          </div>
          <nav className='flex space-x-4'>
              <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition' href="/">Home</a>
              <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition' href="characters">Characters</a>
              <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition' href="lore">Lore</a>  
              <a className='text-white text-xl px-4 py-2 hover:text-[#C19D52] transition'href="map">Map</a>  
          </nav>
      </header>
      <main>
        <div className='flex items-center justify-center'>
          <video autoPlay style={{ width: '800px', height: '450px' }}>
          <source src="/video1.mp4" />
          </video>
        </div>
      </main>
      <footer className='bg-black text-white flex justify-around py-10 bottom-0 flex-wrap'>
        <div>
          <h1 className='text-lg text font-bold'>Related Info</h1>
          <ol>
            <li className='mt-2 text-base px-4 py-2 hover:text-[#C19D52] transition'> <a href="https://en.wikipedia.org/wiki/Elden_Ring">Wiki</a></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div>
        <a href="#top" className='hover:text-[#C19D52] transition'>Back to Top</a>
        </div>
        <div className='w-[30%] h-24 flex flex-col'>
          <h1 className='text-lg text font-bold'>Disclaimer</h1>
          <span className=' text-xs mt-2'>Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.
          Fair use is a use permitted by copyright statute that might otherwise be infringing.
          Non-profit, educational or personal use tips the balance in favor of fair use.
          </span>
        </div>
      </footer>
    </>
  )
}
