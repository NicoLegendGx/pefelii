import { useState, useEffect } from "react"

const links = [
  { label: "Inicio",   href: "#inicio"   },
  { label: "Música",   href: "#musica"   },
  { label: "Sobre mí", href: "#sobre"    },
  { label: "Galería",  href: "#galeria"  },
  { label: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="navbar">
      <div className="navbar-left">
        <a href="#inicio" className="navbar-logo" onClick={(e) => handleClick(e, "#inicio")}>
          Pefelii
        </a>
        <div className="navbar-band colombia-band" aria-label="Bandera de Colombia" />
      </div>
      <div className="navbar-right">
        <div className="navbar-band huila-band" aria-label="Bandera del Huila" />
        <button className="navbar-burger" onClick={() => setOpen(!open)} aria-label="Menú">
          <span /><span /><span />
        </button>
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "active" : ""}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
