const platformIcons = {
  spotify: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  appleMusic: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm4.1 17.9c-.2.4-.6.5-.9.3-1.1-.7-2.5-1.1-4.3-1.1s-3.2.4-4.3 1.1c-.4.2-.8.2-1-.3-.2-.4-.1-.8.3-1 1.3-.8 3-1.3 5-1.3s3.7.5 5 1.3c.4.2.5.6.2 1zm1.1-3.1c-.3.5-.8.7-1.3.4-1.5-.9-3.5-1.4-5.8-1.4s-4.3.5-5.8 1.4c-.5.3-1 .1-1.3-.4-.3-.5-.1-1 .4-1.3 1.7-1 4.1-1.6 6.7-1.6s5 .6 6.7 1.6c.5.3.7.8.4 1.3zm.1-3.6c-1.8-1.1-4.3-1.7-7.2-1.7s-5.4.6-7.2 1.7c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.2.3-1.5 2.1-1.3 5.1-2 8.4-2s6.3.7 8.4 2c.5.3.6 1 .3 1.5-.3.5-.9.6-1.5.3z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  amazonMusic: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.3 14.7c-.2.2-.4.3-.7.3-.2 0-.4-.1-.6-.2-1.1-.8-2.5-1.2-4-1.2s-2.9.4-4 1.2c-.2.1-.4.2-.6.2-.3 0-.5-.1-.7-.3-.3-.4-.2-.9.2-1.2 1.3-1 3-1.5 5.1-1.5s3.8.5 5.1 1.5c.4.3.5.8.2 1.2zM18 10c0 .6-.4 1-1 1s-1-.4-1-1V7.5c-1.3.8-2.8 1.3-4.5 1.3-2.5 0-4.7-1-6-2.5C5 5.7 4.8 5 5.2 4.5c.4-.5 1-.6 1.5-.2 1.1 1 2.8 1.7 5.3 1.7 1.3 0 2.5-.3 3.5-.9.5-.3 1-.5 1.5-.5.6 0 1 .4 1 1V10z" />
    </svg>
  ),
  deezer: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="4" height="4" />
      <rect x="8" y="2" width="4" height="4" />
      <rect x="14" y="2" width="4" height="4" />
      <rect x="2" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
      <rect x="14" y="8" width="4" height="4" />
      <rect x="20" y="8" width="2" height="4" />
      <rect x="2" y="14" width="4" height="4" />
      <rect x="8" y="14" width="4" height="4" />
      <rect x="2" y="20" width="4" height="4" />
    </svg>
  ),
  soundcloud: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 17.5h1V10H7v7.5zm2 1h1V10H9v8.5zm-4-1h1V10H5v7.5zm-2 0h1V10H3v7.5zm10-6.5v7h6.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5h-.3c-.3-2.2-2.2-4-4.7-4-1.2 0-2.3.5-3.1 1.2-.3.4-.4.8-.4 1.3v.5z" />
    </svg>
  ),
}

const platformColors = {
  spotify: "#1DB954",
  appleMusic: "#FA243C",
  youtube: "#FF0000",
  amazonMusic: "#FF9900",
  deezer: "#FEAA2D",
  soundcloud: "#FF5500",
}

const platformOrder = ["spotify", "appleMusic", "youtube", "amazonMusic", "deezer", "soundcloud"]

export default function Musica({ songs }) {
  return (
    <section id="musica" className="music-section fade-in">
      <div className="container">
        <h2>Mi Música</h2>
        <div className="songs-grid">
          {songs.map((song) => (
            <div key={song.id} className="song-card">
              <img src={song.image} alt={song.title} />
              <div className="song-overlay">
                <div className="song-overlay-inner">
                  {platformOrder
                    .filter((key) => song.links[key])
                    .map((key) => (
                      <a
                        key={key}
                        href={song.links[key]}
                        target="_blank"
                        rel="noreferrer"
                        className="song-platform-btn"
                        style={{ background: platformColors[key] }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {platformIcons[key]}
                        {key === "appleMusic" ? "Apple" : key === "amazonMusic" ? "Amazon" : key === "soundcloud" ? "SC" : key.charAt(0).toUpperCase() + key.slice(1).replace("Music", "")}
                      </a>
                    ))}
                </div>
              </div>
              <div className="song-info">
                <h3>{song.title}</h3>
                {song.duration && <p>{song.duration}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
