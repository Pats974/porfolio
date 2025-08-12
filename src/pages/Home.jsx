import { useEffect, useState } from 'react'

const keywords = ['Portraits', 'Paysages', 'Événements']

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % keywords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/3090983/3090983-uhd_2560_1440_30fps.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mon Portfolio</h1>
        <p key={index} className="text-xl md:text-2xl animate-fade">{keywords[index]}</p>
      </div>
    </section>
  )
}
