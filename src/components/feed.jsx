import { useState, useEffect } from "react"
import PublicacionEmbed from "./PublicacionEmbed"

export default function SocialFeed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/posts.json", { cache: "no-store" })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(data => {
        console.log("📦 Posts cargados:", data.length)
        setPosts(Array.isArray(data) ? data : [])
      })
      .catch(err => {
        console.error("❌ Error cargando posts.json:", err)
        setPosts([])
      })
  }, [])

  if (posts.length === 0) return null

  return (
    <section id="publicaciones" className="feed-section">
      <div className="container">
        <h2>Últimas Publicaciones</h2>
        <div className="feed-grid">
          {posts.map((post, i) => (
            <PublicacionEmbed key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
