import { useState, useEffect, useRef } from "react"
import "./App.css"
import Navbar from "./components/navbar"
import Musica from "./components/musica"
import Galeria from "./components/galeria"
import Footer from "./components/footer"
import SocialFeed from "./components/feed"

const songs = [
  {
    id: 1,
    title: "Frío Mortal",
    duration: "3:33",
    image: "/frioMortal.png",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/5gsMQLq5uFSQrIyM1EeR6Q",
      appleMusic: "https://music.apple.com/co/song/fr%C3%ADo-mortal/1888047491",
      youtube: "https://www.youtube.com/watch?v=MQxy6j2hlKs",
      amazonMusic: "https://music.amazon.es/albums/B0GTXY2BCF",
      deezer: "https://link.deezer.com/s/33rFZdQ1LJprTBkBfvwph",
    },
  },
  {
    id: 2,
    title: "Let's Go",
    duration: "3:37",
    image: "/letsGo.png",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/5J4OeK3X3EaDGmFJOnEg8F",
      appleMusic: "https://music.apple.com/co/song/lets-go/1875033650",
      youtube: "https://www.youtube.com/watch?v=e-mIeJkWBTU",
      amazonMusic: "https://music.amazon.es/albums/B0GLSGSSYR",
      deezer: "https://link.deezer.com/s/33rFYWcuVxCR6Vlad8mkn",
    },
  },
  {
    id: 3,
    title: "Préndete",
    duration: "4:25",
    image: "/prendete.png",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/0ou5AjoGM1qGSrEQSKfVt9",
      appleMusic: "https://music.apple.com/co/song/pr%C3%A9ndete/1870095920",
      youtube: "https://www.youtube.com/watch?v=aMl0gKe7vqk",
      amazonMusic: "https://music.amazon.es/albums/B0GHLBTCPZ",
      deezer: "https://link.deezer.com/s/33rFYqdQFuFGqjhXW8ujH",
    },
  },
  {
    id: 4,
    title: "Pa' Que Te Enamores",
    duration: "3:18",
    image: "/PaQTeEnamores.png",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/2qOaCdltuyE0Mn4oywJw1W",
      appleMusic: "https://music.apple.com/co/song/pa-que-te-enamores/1812613055",
      youtube: "https://www.youtube.com/watch?v=RGvxgXpqbHA",
      amazonMusic: "https://music.amazon.es/albums/B0F7LJR7PP",
      deezer: "https://link.deezer.com/s/33rFY8RLD5hLuAxpKPCkd",
      soundcloud: "https://soundcloud.com/andres-felipe-1406-1/pa-que-te-enamores",
    },
  },
  {
    id: 5,
    title: "My Dear Darling",
    duration: "2:49",
    image: "/myDearDarling.png",
    links: {
      spotify: "https://open.spotify.com/intl-es/track/7qsGsEEaw48tyHl9QVQZGO",
      appleMusic: "https://music.apple.com/co/song/my-dear-darling/1885334734",
      youtube: "https://www.youtube.com/watch?v=vS0PN_C3B_8",
      amazonMusic: "https://music.amazon.es/albums/B0GSN8MG2J",
      deezer: "https://link.deezer.com/s/33rFXKwo0IShMETN6Vmgn",
    },
  },
  {
    id: 6,
    title: "Bayron Se Enloqueció",
    duration: "",
    image: "/pefeliiColor.png",
    links: {
      soundcloud: "https://soundcloud.com/andres-felipe-1406-1/pefelii-bayron-se-enloquecio",
    },
  },
]

const unifiedLinks = [
  { name: "Instagram",     url: "https://www.instagram.com/andrespefeli",                        icon: "instagram",     bg: "linear-gradient(135deg, #833ab4, #fd1d1d, #f77737)" },
  { name: "TikTok",        url: "https://www.tiktok.com/@el_pefe",                               icon: "tiktok",        bg: "#000000" },
  { name: "Spotify",       url: "https://open.spotify.com/intl-es/artist/2U6DelkyRmt9rbcAsHwgKJ", icon: "spotify",    bg: "#1DB954" },
  { name: "Apple Music",   url: "https://music.apple.com/co/artist/pefelii/1812612706",           icon: "appleMusic",   bg: "#FA243C" },
  { name: "YouTube",       url: "https://www.youtube.com/channel/UCAnQDyMfIsVtZhjXno1o2uQ",      icon: "youtube",      bg: "#FF0000" },
  { name: "YouTube Music", url: "https://music.youtube.com/channel/UCAnQDyMfIsVtZhjXno1o2uQ",    icon: "youtubeMusic", bg: "#FF0000" },
  { name: "Amazon Music",  url: "https://music.amazon.es/artists/B0F7LHQR6Y/pefelii",            icon: "amazonMusic",  bg: "#FF9900" },
  { name: "Deezer",        url: "https://www.deezer.com/es/artist/321591461",                    icon: "deezer",       bg: "#FEAA2D" },
  { name: "SoundCloud",    url: "https://soundcloud.com/andres-felipe-1406-1",                   icon: "soundcloud",   bg: "#FF5500" },
  { name: "Facebook",      url: "https://www.facebook.com/andres.pefeli",                        icon: "facebook",     bg: "#1877F2" },
]

function PlatformIcon({ type }) {
  switch (type) {
    case "instagram":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.332.013 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.013 8.332 0 8.756 0 12c0 3.244.013 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.987 8.756 24 12 24s3.668-.013 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.059-1.28.072-1.704.072-4.948s-.013-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.013 15.244 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    case "tiktok":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
    case "spotify":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
    case "appleMusic":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4.1 17.9c-.2.4-.6.5-.9.3-1.1-.7-2.5-1.1-4.3-1.1s-3.2.4-4.3 1.1c-.4.2-.8.2-1-.3-.2-.4-.1-.8.3-1 1.3-.8 3-1.3 5-1.3s3.7.5 5 1.3c.4.2.5.6.2 1zm1.1-3.1c-.3.5-.8.7-1.3.4-1.5-.9-3.5-1.4-5.8-1.4s-4.3.5-5.8 1.4c-.5.3-1 .1-1.3-.4-.3-.5-.1-1 .4-1.3 1.7-1 4.1-1.6 6.7-1.6s5 .6 6.7 1.6c.5.3.7.8.4 1.3zm.1-3.6c-1.8-1.1-4.3-1.7-7.2-1.7s-5.4.6-7.2 1.7c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.2.3-1.5 2.1-1.3 5.1-2 8.4-2s6.3.7 8.4 2c.5.3.6 1 .3 1.5-.3.5-.9.6-1.5.3z"/></svg>
    case "youtube":
    case "youtubeMusic":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    case "amazonMusic":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.3 14.7c-.2.2-.4.3-.7.3-.2 0-.4-.1-.6-.2-1.1-.8-2.5-1.2-4-1.2s-2.9.4-4 1.2c-.2.1-.4.2-.6.2-.3 0-.5-.1-.7-.3-.3-.4-.2-.9.2-1.2 1.3-1 3-1.5 5.1-1.5s3.8.5 5.1 1.5c.4.3.5.8.2 1.2zM18 10c0 .6-.4 1-1 1s-1-.4-1-1V7.5c-1.3.8-2.8 1.3-4.5 1.3-2.5 0-4.7-1-6-2.5C5 5.7 4.8 5 5.2 4.5c.4-.5 1-.6 1.5-.2 1.1 1 2.8 1.7 5.3 1.7 1.3 0 2.5-.3 3.5-.9.5-.3 1-.5 1.5-.5.6 0 1 .4 1 1V10z"/></svg>
    case "deezer":
      return <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="4" height="4"/><rect x="8" y="2" width="4" height="4"/><rect x="14" y="2" width="4" height="4"/><rect x="2" y="8" width="4" height="4"/><rect x="8" y="8" width="4" height="4"/><rect x="14" y="8" width="4" height="4"/><rect x="20" y="8" width="2" height="4"/><rect x="2" y="14" width="4" height="4"/><rect x="8" y="14" width="4" height="4"/><rect x="2" y="20" width="4" height="4"/></svg>
    case "soundcloud":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 17.5h1V10H7v7.5zm2 1h1V10H9v8.5zm-4-1h1V10H5v7.5zm-2 0h1V10H3v7.5zm10-6.5v7h6.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5h-.3c-.3-2.2-2.2-4-4.7-4-1.2 0-2.3.5-3.1 1.2-.3.4-.4.8-.4 1.3v.5z"/></svg>
    case "facebook":
      return <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    default:
      return null
  }
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573102664798"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    </a>
  )
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible")
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />

      <section id="inicio" className="hero-section">
        <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        <div className="hero-inner">
          <div className="hero-cover">
            <div ref={parallaxRef} style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
              <img src="/prendete.png" alt="Pefelii - Préndete" />
            </div>
            <div className="glow" />
          </div>
          <div className="hero-info">
            <h1>PEFELII</h1>
            <p>El mero bacilón</p>
            <a
              href="https://open.spotify.com/intl-es/track/0ou5AjoGM1qGSrEQSKfVt9"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Escucha "Préndete" en Spotify
            </a>
          </div>
        </div>
      </section>

      <section id="presave" className="presave-section fade-in">
        <div className="container">
          <div className="presave-inner">
            <div className="presave-image">
              <img src="/elreloj.png" alt="Nuevo lanzamiento" />
            </div>
            <div className="presave-content">
              <h2>Nueva canción disponible el 22 de junio</h2>
              <a
                href="https://artists.landr.com/991048046405"
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-presave"
              >
                Pre-Guardar
              </a>
            </div>
          </div>
        </div>
      </section>
      <Musica songs={songs} />

      <section id="video" className="video-section fade-in">
        <div className="container">
          <h2>Último Video</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/MQxy6j2hlKs"
              title="Pefelii - Frío Mortal (Video Oficial)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="sobre" className="about-section fade-in">
        <div className="container">
          <h2>Sobre Pefelii</h2>
          <div className="about-inner">
            <div className="about-img-wrapper">
              <div>
                <img src="/pefeliiColor.png" alt="Pefelii" />
              </div>
              <div className="glow" />
            </div>
            <p>
              Pefelii es un músico, artista y cantautor Huilense que contempla la música urbana, alternativa y folklórica.
            </p>
          </div>
        </div>
      </section>

      <Galeria />

      <SocialFeed />

      <section id="encuentrame" className="social-section fade-in">
        <div className="container">
          <h2>Encuéntrame en Todas Partes</h2>
          <div className="social-grid unified-grid">
            {unifiedLinks.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="social-card">
                <div className="social-icon" style={{ background: p.bg }}>
                  <PlatformIcon type={p.icon} />
                </div>
                <span>{p.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section fade-in">
        <div className="container">
          <h2>Contacto</h2>
          <p>¿Interesado en colaboraciones, contrataciones o simplemente quieres saludar? Escríbeme y te responderé lo antes posible.</p>
          <div className="contact-cards">
            <a href="mailto:afrg89@outlook.com" className="contact-card email">
              <div className="contact-icon gmail-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-20.728A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.91 12 9.548l6.545-4.637 1.528-1.418C21.691 2.28 24 3.434 24 5.457z"/>
                </svg>
              </div>
              <div>
                <strong>Escríbeme</strong>
                <span>afrg89@outlook.com</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
