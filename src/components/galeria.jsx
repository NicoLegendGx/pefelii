const images = [
  { src: "/prendete.png",       alt: "Préndete Cover"          },
  { src: "/pefeliiColor.png",   alt: "Pefelii Logo"            },
  { src: "/frioMortal.png",     alt: "Frío Mortal Cover"       },
  { src: "/myDearDarling.png",  alt: "My Dear Darling Cover"   },
  { src: "/letsGo.png",         alt: "Let's Go Cover"          },
  { src: "/PaQTeEnamores.png",  alt: "Pa' Que Te Enamores"     },
]

export default function Galeria() {
  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        <h2>Galería</h2>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
