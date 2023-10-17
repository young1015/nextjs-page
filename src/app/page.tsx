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
      <main>
        <section className='flex mt-5 justify-center'>  
          <div className='bg-black bg-opacity-80 border-solid border-y-yellow-600 border-2 flex flex-col w-[85%] justify-center'>
            <span className='text-gray-300 text-xl'> 
              Elden Ring is a 2022 action role-playing game developed by FromSoftware. It was directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin. It was released for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 25 by FromSoftware in Japan and Bandai Namco Entertainment internationally. Players control a customizable player character who is on a quest to repair the Elden Ring and become the new Elden Lord.
              Elden Ring is presented through a third-person perspective; players freely roam its interactive open world. The six main areas are traversed using the player characters steed Torrent as the primary mode of travel. Linear, hidden dungeons can be explored to find useful items. Players can use several types of weapons and magic spells, including non-direct engagement enabled by stealth mechanics. Throughout the games world, checkpoints enable fast travel and allow players to improve their attributes using an in-game currency called Runes. 
              Elden Ring has an online multiplayer mode in which players can join each other for cooperative and player-versus-player combat. 
            </span>
          </div>
        </section>
      </main>
      <footer className='bg-black text-white flex justify-around fixed py-10 bottom-0 flex-wrap'>
        <div>
          <h1 className='text-lg text font-bold'>Related Info</h1>
          <ol>
            <li className='mt-2 text-base px-4 py-2 hover:text-[#C19D52] transition'> <a href="https://en.wikipedia.org/wiki/Elden_Ring" target="_blank">Wiki</a></li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div>
          <a href="#top" className='hover:text-[#C19D52] transition'>Back to Top</a>
        </div>
        <div className='w-[30%] h-24 flex flex-col'>
          <h1 className='text-lg text font-bold'>Disclaimer</h1>
          <span className=' text-xs mt-2'>
            Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use” for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research.
            Fair use is a use permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of fair use.
          </span>
        </div>
      </footer>
    </>
  )
}
