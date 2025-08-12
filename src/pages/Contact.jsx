export default function Contact() {
  return (
    <section className="pt-24 p-4 max-w-3xl mx-auto">
      <form className="flex flex-col space-y-4 mb-8">
        <input type="text" placeholder="Nom" className="p-2 bg-gray-800 rounded" />
        <input type="email" placeholder="Email" className="p-2 bg-gray-800 rounded" />
        <textarea placeholder="Message" className="p-2 bg-gray-800 rounded h-32" />
        <button type="submit" className="self-start px-4 py-2 bg-teal-500 text-gray-900 rounded hover:bg-teal-400 transition">
          Envoyer
        </button>
      </form>
      <div className="mb-8">
        <iframe
          title="map"
          className="w-full h-64 border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991710560317!2d2.292292615674931!3d48.858373079287526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66feca0e2f2ef%3A0x40b82c3688b66c0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1697049600000!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener"
        className="px-4 py-2 bg-teal-500 text-gray-900 rounded hover:bg-teal-400 transition"
      >
        Réserver une séance
      </a>
    </section>
  )
}
