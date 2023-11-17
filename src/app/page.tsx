import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import FooterAlt from './components/FooterAlt'

export default function Home() {
  return (
    <>
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
        <FooterAlt/>
    </>
    
  )
}
