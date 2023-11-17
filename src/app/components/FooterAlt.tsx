import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <footer className='bg-black text-white flex justify-around py-10 bottom-0 fixed flex-wrap'>
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