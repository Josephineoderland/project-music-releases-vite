import PropTypes from "prop-types"
import AlbumName from "./album/AlbumName"
import ArtistName from "./album/ArtistName"
import CoverImage from "./album/CoverImage"


import "./Album.css"

export const Album = ({ album }) => {
  return (
    <section className="album">
      <div key={album.id}>
        <CoverImage coverImage={album.images?.[0]?.url ?? "defaultImageUrl"} />
        <div>
          <AlbumName
            albumName={album.name}
            albumURL={album.external_urls.spotify}
          />
          {album.artists.map((artist) => (
            <ArtistName
              artistName={artist.name}
              artistURL={artist.external_urls.spotify}
              key={artist.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
}

export default Album
