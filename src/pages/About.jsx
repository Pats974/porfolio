import { useEffect, useRef, useState } from 'react'

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="pt-24 p-4 max-w-3xl mx-auto flex flex-col items-center text-center"
    >
      <img
        src="https://source.unsplash.com/random/300x300/?face"
        alt="profil"
        className="w-40 h-40 rounded-full mb-4 object-cover transform transition duration-700 hover:scale-105"
      />
      <p
        className={`text-lg leading-relaxed transition-opacity duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Photographe passionné, je capture des moments uniques depuis plus de dix ans.
        Mon style mélange élégance et spontanéité pour raconter des histoires visuelles.
      </p>
    </section>
  )
}
