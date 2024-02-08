import { css } from "@emotion/react"
import EachSong from "./EachSong"
import { useDispatch, useSelector } from "react-redux";
import { getUser} from "../../redux/ducks/songSlice";
import { useEffect } from "react";

const style = css({
    display:'flex', alignItems: 'center', gap:'20px', flexWrap: 'wrap', width: '100% !important', overflowY:'scroll'
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
    }
    statistics: stat
}
export default function Song(){

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const user = useSelector((state: user) => {
        return state.user
    })
    console.log(user);
    
    const values = user?.song?.map(item => (
        <EachSong 
            Title={item.Title}
            id={item._id}
            Album={item.Album}
            Artist={item.Artist}
            Genre={item.Genre}
        />
    ))
    // console.log(user)
    return (
        <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline:'1rem', width:'84%'}}>
            <h1 css={{fontFamily:'poppins'}}>Your songs</h1>
            <div css={style}> 
                {values}
            </div>              
        </div>
    )
}