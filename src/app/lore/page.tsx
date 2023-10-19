import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main>
        <div className='flex justify-center items-center mt-10'>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/DYDs_Inzkz4?si=Oy38O0ziHcKU3x4J" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </main>
    </>
  )
}
