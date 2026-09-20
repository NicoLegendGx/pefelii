function getEmbedUrl(tipo, url) {
  switch (tipo) {
    case "youtube": {
      const m = url.match(
        /(?:v=|youtu\.be\/|\/shorts\/)([\w-]{11})/
      )
      return m
        ? `https://www.youtube.com/embed/${m[1]}`
        : null
    }

    case "instagram": {
      const clean = url.split("?")[0].replace(/\/+$/, "")
      return `${clean}/embed`
    }

    case "tiktok": {
      const m = url.match(/\/video\/(\d+)/)
      return m
        ? `https://www.tiktok.com/embed/v2/${m[1]}`
        : null
    }

    case "facebook": {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=true`
    }

    default:
      return null
  }
}
