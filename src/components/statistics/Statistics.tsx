import { css } from "@emotion/react"
import Artist from "./statComponents/Artist"
import * as data from '../../data'
import AlbumStat from "./statComponents/SongInAlbum"

const style = css({
    paddingInline: '1rem', fontFamily:'Poppins, sanserif', width: '80%', overflowY: 'scroll'
})
const liStyle = css({
    padding: '.5rem 1rem', border: '1px solid black' , borderRadius:'.3rem', fontWeight: '600'
})
const artistStyle = css({
    width: '50%',display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
})
const genreStyle = css({
    display: 'grid', gridTemplateColumns: '1fr 1fr', width: '40%',
})


const artistData = data.statics.numberOfSongAndAlbumInArtist.map(data => {
    return <Artist
                artist={data.artist}
                song={data.song}
                album={data.album}
                style={liStyle}
            />
})

const albumData = data.statics.numOfSongInAlbum.map(data => {
    return <AlbumStat 
                song={data.song}
                album={data.album}
            />
})
const genreData = data.statics.numberOfSongInEveryGenre.map(data => {
    return <AlbumStat 
                song={data.song}
                album={data.genre}
            />
})

export default function Statistics(){
    return (
        <div css={style}>
            <h1>Statistics of your Harmonics</h1> 
            <ul style={{listStyle: 'none'}}>
                <h3>This shows the stats of every artist in Harmonics</h3>
                <div css={artistStyle}>
                    <li css={liStyle}>Name of Artist</li>
                    <li css={liStyle}># of Song</li>
                    <li css={liStyle}># of Album</li>
                    {artistData}
                </div>
            </ul>    
            <ul style={{listStyle: 'none'}}>
                <h3>This shows the stats of every album in Harmonics</h3>
                <div css={genreStyle}>
                    <li css={liStyle}>Genre</li>
                    <li css={liStyle}># of Song</li>
                    {albumData}
                </div>
            </ul>   
            <ul style={{listStyle: 'none'}}>
                <h3>This shows the stats of every genre in Harmonics</h3>
                <div css={genreStyle}>
                    <li css={liStyle}>Genre</li>
                    <li css={liStyle}># of Song</li>
                    {genreData}
                </div>
            </ul> 
            <ul>
                <h4>Aggregate data</h4>
                <li>Total number of songs in Harmonics: {data.statics.totalNumberOfSong}</li>
                <li>Total number of artists in Harmonics: {data.statics.totalNumberOfArtist}</li>
                <li>Total number of albums in Harmonics: {data.statics.numOfAlbums}</li>
            </ul>
        </div>
    )
}