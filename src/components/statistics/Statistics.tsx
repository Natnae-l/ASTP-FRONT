import { css } from "@emotion/react"
import Artist from "./statComponents/Artist"
import AlbumStat from "./statComponents/SongInAlbum"
import { useSelector, useDispatch } from "react-redux"
import { getUser } from "../../redux/ducks/songSlice"
import { useEffect } from "react"

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

type stat = {
    totalNumberOfSong: number
    numberOfSongAndAlbumInArtist: [
        {
            artist: string
            song: number
            album: number
        }
    ]
    numberOfSongInEveryGenre: [{
        song: number
        genre: string
    }]
    totalNumberOfArtist: number
    numOfAlbums: number
    numOfSongInAlbum: [
        {
            album: string
            song: number
        }
    ]
}
interface user {
    user: {
        song: [{
            Title: string,
            _id: string,
            Album: string,
            Genre: string,
            Artist: string
        }]
        statistics: stat
    }
}


export default function Statistics(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const statstics: stat = useSelector((state: user) => {
        return state.user.statistics
    })
    console.log(statstics);

    let artistData, genreData, albumData;
    if (statstics){
     artistData = statstics.numberOfSongAndAlbumInArtist.map(data => {
        return <Artist
                    artist={data.artist}
                    song={data.song}
                    album={data.album}
                    style={liStyle}
                />
    })
    
     albumData = statstics.numOfSongInAlbum.map(data => {
        return <AlbumStat 
                    song={data.song}
                    album={data.album}
                />
    })
    genreData = statstics.numberOfSongInEveryGenre.map(data => {
        return <AlbumStat 
                    song={data.song}
                    album={data.genre}
                />
    })        
    }

    return (
        <div css={style}>
            <h1>Statistics of your Harmonics</h1> 
            <ul style={{listStyle: 'none'}}>
                <h3>This shows the stats of every artist in Harmonics</h3>
                <div css={artistStyle}>
                    <li css={liStyle}>Name of Artist</li>
                    <li css={liStyle}># of Song</li>
                    <li css={liStyle}># of Album</li>
                    {artistData ? artistData: ''}
                </div>
            </ul>    
            <ul style={{listStyle: 'none'}}>
                <h3>This shows the stats of every album in Harmonics</h3>
                <div css={genreStyle}>
                    <li css={liStyle}>Genre</li>
                    <li css={liStyle}># of Song</li>
                    {albumData ? albumData: ''}
                </div>
            </ul>   
            <ul style={{listStyle: 'none'}}>
                <h3>This shows the stats of every genre in Harmonics</h3>
                <div css={genreStyle}>
                    <li css={liStyle}>Genre</li>
                    <li css={liStyle}># of Song</li>
                    {genreData ? genreData: ''}
                </div>
            </ul> 
            <ul>
                <h4>Aggregate data</h4>
                <li>Total number of songs in Harmonics: {statstics ? statstics.totalNumberOfSong: ''}</li>
                <li>Total number of artists in Harmonics: {statstics ? statstics.totalNumberOfArtist: ''}</li>
                <li>Total number of albums in Harmonics: {statstics ? statstics.numOfAlbums: ''}</li>
            </ul>
        </div>
    )
}