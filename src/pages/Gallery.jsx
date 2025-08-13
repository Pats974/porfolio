import { useState } from 'react'

const images = [
  { src: 'https://source.unsplash.com/random/800x600/?portrait', category: 'Portraits' },
  { src: 'https://source.unsplash.com/random/800x600/?landscape', category: 'Paysages' },
  { src: 'https://source.unsplash.com/random/800x600/?event', category: 'Événements' },
  { src: 'https://source.unsplash.com/random/800x600/?portrait,face', category: 'Portraits' },
  { src: 'https://source.unsplash.com/random/800x600/?mountain', category: 'Paysages' },
  { src: 'https://source.unsplash.com/random/800x600/?wedding', category: 'Événements' },
]

const categories = ['Tous', 'Portraits', 'Paysages', 'Événements']

export default function Gallery() {
  const [filter, setFilter] = useState('Tous')
  const filtered = images.filter(
    (img) => filter === 'Tous' || img.category === filter
  )

  return (
    <section className="pt-24 p-4 max-w-5xl mx-auto">
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 border rounded ${
              filter === cat
                ? 'bg-teal-500 text-gray-900'
                : 'hover:bg-teal-500 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((img, i) => (
          <a
            key={i}
            href={img.src}
            target="_blank"
            rel="noopener"
            className="overflow-hidden rounded transform transition duration-300 hover:scale-105"
          >
            <img src={img.src} alt={img.category} className="w-full h-48 object-cover" />
          </a>
        ))}
      </div>
    </section>
  )
}
