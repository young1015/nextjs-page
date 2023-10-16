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
            <main className='py-6 first:mt-0'>
                <section className='px-10 py-10 text-white border-2 m-20 bg-gray-950 bg-opacity-60 backdrop-blur-md'>
                    <div className='flex mt-5 justify-center flex-col'>
                        <h1 className='text-5xl font-bold'>Melina</h1>
                        <p>Also known as The Kindling Maiden</p>
                        <Image
                            className='h-[100%]'
                            width={500}
                            height={200}
                            src={'/melina_elden_rin.webp'}
                            alt=''
                        />
                        <p>Melina is a mysterious, spectral girl who offers an alliance with the Tarnished to help them on their journey.</p>
                        <p>“I can play the role of maiden. Turning rune fragments into strength. To aid you in your search for the Elden Ring. You need only take me with you. To the foot of the Erdtree.”</p>
                        <p> — Melina</p>
                        <p>Melina was born at the foot of the Erdtree and describes her mother as within the Erdtree. Although it is never stated, it can be inferred that her mother is Queen Marika the Eternal. During Boc's questline she asks if "being born of a mother" means acting in certain ways,which makes the specifics of her origins unclear. At some point, Melina's body was burned, which left her bodiless and as a roaming spirit with no memory of her purpose given to her by her mother.[5] And so, she looked for a way to go to the foot of the Erdtree to ascertain her given purpose, and to be able to govern her movement, seemingly lost as a spirit, meeting and travelling with Torrent at some time.</p>
                    </div>
                    <div>
                        <h1>Ranni the Witch</h1>
                        <p>Also known as Lunar Princess Ranni</p>
                        <Image
                            className='h-[100%]'
                            width={500}
                            height={200}
                            src={'/ranni_the_witch.webp'}
                            alt=''
                        /> 
                        <p>Ranni the Witch is one of the Demigods, and the focus of one of the game's most elaborate questlines.</p>
                        <p>“I am the witch Ranni. I stole Death long ago, and search now for the dark path. That I might one day upend the whole of it, and rid the world of all that came before."</p>
                        <p> — Ranni</p>
                        <h1>Background</h1>
                        <p>Originally known as Lunar Princess Ranni, she was the daughter of Radagon, a champion of the Golden Order, and Queen Rennala, head of both the Carian Royal Family and the Academy of Raya Lucaria. She had two older brothers, Radahn and Rykard. Ranni was also an Empyrean, meaning she had the potential to one day succeed Queen Marika as the divine ruler of the Lands Between. The Two Fingers chose her as a potential successor and granted her a Shadow by the name of Blaidd to be her vassal. He was approved of by Rennala, and was raised as her foster brother. Ranni grew up playing with Blaidd, and they were often accompanied by Iji, a troll blacksmith who served the Carian royals. Led by the hand of her mother Rennala, young Ranni would encounter her Dark Moon. What she beheld was cold, dark and veiled in occult mystery. Deep in the woods, she would also encounter a snowy crone, known simply as the "Snow Witch", who would go on to become her secret mentor. She was an old witch well versed in cold-based sorceries, and she taught Ranni to fear the dark moon as she imparted her cold sorcery. The full Dark Moon, cold and leaden, would become Ranni's sigil and symbol of her power and authority. At some point, Ranni's father would abandon her mother in order to marry Queen Marika and assume the title of second Elden Lord. Ranni and her siblings were thus raised to demigod status by their new stepmother.</p>
                    </div>
                    <div>
                        <h1>Malenia, Blade of Miquella</h1>
                        <p>Also known as Goddess of Rot</p>
                        <Image
                            className='h-[100%]'
                            width={500}
                            height={200}
                            src={'/malenia.webp'}
                            alt=''
                        /> 
                        <p>Malenia, Blade of Miquella is a boss in Elden Ring. She is a Demigod and a Shardbearer who is encountered in Elphael, Brace of the Haligtree.</p>
                        <p>“I am Malenia. Blade of Miquella. And I have never known defeat.”</p>
                        <p> — Malenia, Blade of Miquella</p>
                        <p>Malenia was born the child of Queen Marika the Eternal and her second husband, the Elden Lord Radagon. She had an elder twin brother by the name of Miquella. Both Malenia and Miquella were Empyreans, meaning they had the potential to one day replace their mother as a new god of a coming age. But since Radagon and Marika were in fact the same person, Malenia and Miquella were born afflicted. Malenia was afflicted with the Scarlet Rot, which ravaged her from within and would cost her several limbs, while Miquella was afflicted with eternal childhood, unable to ever grow into adulthood. At some point, Malenia encountered a blind swordsman who had sealed away an Outer God of Rot. The swordsman became her master, and trained her in the ways of the blade, allowing her to gain wings of unparalleled strength. Malenia would eventually become a warrior without peer. She would attract loyal servants like her Cleanrot Knights (who vowed to fight next to her despite the inevitable gradual putrefaction of their flesh, as well as worshippers, who believed her a goddess. Members of House Marais, who were all sickly born, were naturally drawn to the beautiful and fierce Malenia who became such a powerful warrior in spite of being born into rot, and requiring prosthesis to fight. Malenia and Miquella were close, and Malenia would become her brother's sworn blade and protector, while Miquella worked tirelessly to try and undo the curses they had both been born into. While unable to find a cure for his sister, Miquella designed a needle of unalloyed gold that could keep the Scarlet Rot ravaging Malenia's body at bay.</p>
                    </div>
                    <div>
                        <h1>Queen Marika the Eternal</h1>
                        <p>Also known as Eternal Queen</p>
                        <Image
                            className='h-[100%]'
                            width={500}
                            height={200}
                            src={'/Queen_Marika_the_Eternal.webp'}
                            alt=''
                        />
                        <p>Queen Marika the Eternal is the reigning divine sovereign of the Lands Between, and a vessel for the Elden Ring. Her offspring possess demigod status and are bearers of the Great Runes.</p>
                        <p>“Let a new epoch begin. An epoch glistening with life. Brandish the Elden Ring, for the Age of the Erdtree!”</p>
                        <p> Queen Marika the Eternal — as quoted by Melina</p>
                        <p>Queen Marika was originally of the same stock as the Numen people. She was an Empyrean who would ascend to godhood and become the vessel of the Elden Ring. As an Empyrean, she was gifted a shadow, her half-brother Maliketh. Desiring a world free of Destined Death, she removed the Rune of Death from the Elden Ring, and had her shadow Maliketh guard it, thus establishing the Golden Order. Marika took a consort, Godfrey, who became the first Elden Lord. In the early days, everything was in opposition to the Erdtree, but with Godfrey at the head of her armies, Marika persevered and the Erdtree would reign supreme as the embodiment of the Golden Order itself. One of these wars was waged against the Fire Giants, who met defeat when Marika slew their fell god. Unable to extinguish the Flame of Ruin atop the frigid northern mountains, a credible threat to the Erdtree, she cursed the last of the giants to forever tend to it. Fire Monks, who had fought on the side of the Erdtree during the war against the Fire Giants, were also left behind to watch over the flame, some of whom fell under the spell of the fire and began worshipping the Fire God. With the Erdtree now supreme, Marika and Godfrey would rule together and have at least three children: Godwyn the Golden and the twins Morgott and Mohg. The twins were both born as accursed Omen, and were hidden in the depths below the capital. Even so, Godfrey, as well as his and Marika's offspring, would always be counted as the first of the demigods, and would forever be known as the "Golden Lineage". With her rule secure, Marika announced her intention to search the depths of the Golden Order, declaring the early days of blind belief a thing long past. When Godfrey's last foe fell it was said the hue of his eyes had faded. Marika banished him and his kinfolk from the Lands Betweend, robbing them of their grace, thus creating the first Tarnished, all in the hope that they would grow stronger by waging war in lands outside her rule, dying, and then be revived and eventually brought back with their guidance of grace returned. After Godfrey's banishment from the Lands Between, Marika took Radagon as second husband and King Consort, elevating him to become the second Elden Lord.[18] Radagon already had three children with Queen Rennala of the Carian Royal Family, and after his union with Marika, she would raise her new step-children Radahn, Rykard and Ranni to demigod status. Marika and Radagon would go on to have two children of their own, the twins Malenia and Miquella, who like Marika herself and Radagon's daughter Ranni, were Empyreans, and were thus potential successors to Marika. However, Radagon and Marika were in truth one and the same, in fact Radagon was described as Marika's male "other self". Thus the twins were the children of a single god, and they were both born afflicted: Malenia with rotting sickness and Miquella with eternal childhood.</p>
                    </div>
                </section>
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