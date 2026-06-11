function getEmbedUrl(tipo, url) {
  switch (tipo) {
    case "youtube": {
      const m = url.match(/(?:v=|youtu\.be\/|\/shorts\/)([\w-]{11})/)
      return m ? `https://www.youtube.com/embed/${m[1]}` : null
    }
    case "instagram": {
      const clean = url.replace(/\/?(\?.*)?$/, "")
      return `${clean}/embed/captioned`
    }
    case "tiktok": {
      const m = url.match(/\/video\/(\d+)/)
      return m ? `https://www.tiktok.com/embed/v2/${m[1]}` : null
    }
    case "facebook": {
      return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true`
    }
    default:
      return null
  }
}

export default function PublicacionEmbed({ titulo, descripcion, tipo, url }) {
  const embedUrl = getEmbedUrl(tipo, url)

  if (!embedUrl) {
    return (
      <div className="embed-card embed-error">
        <p>No se pudo embeber esta publicación</p>
        <a href={url} target="_blank" rel="noreferrer">Ver en {tipo}</a>
      </div>
    )
  }

  return (
    <div className="embed-card">
      <div className="embed-container">
        <iframe
          src={embedUrl}
          title={titulo}
          className="embed-iframe"
          allowFullScreen
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="embed-info">
        <h3>{titulo}</h3>
        {descripcion && <p className="embed-desc">{descripcion}</p>}
      </div>
    </div>
  )
}
