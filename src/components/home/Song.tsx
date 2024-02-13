import { css } from "@emotion/react"
import EachSong from "./EachSong"
import { useDispatch, useSelector } from "react-redux";
import { getUser} from "../../redux/ducks/songSlice";
import { useEffect, useState } from "react";
import IsLoading from "../IsLoading";

const style = css({
    display:'flex', alignItems: 'center', gap:'20px', flexWrap: 'wrap', width: '100% !important', overflowY:'scroll', paddingBlockEnd: '4rem'
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
const searchStyle = css({
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingInlineEnd:'8rem'
})
const inputStyle = css({
    padding: '5px 4px',
    border: '1.5px solid brown',
    borderRadius: ".32rem",
    fontFamily: 'Poppins, sanserif',
})
export default function Song(){
    const [search, setSearch] = useState('');
    console.log(search);
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [])
    const user = useSelector((state: user) => {
        return state.user
    })
    
    const values = user?.song?.filter(item => {
        return search.toLowerCase()== '' ? item : item.Genre.toLowerCase().includes(search.toLowerCase())
    }).map(item => (
        <EachSong 
            Title={item.Title}
            id={item._id}
            Album={item.Album}
            Artist={item.Artist}
            Genre={item.Genre}
        />
    ))

    let skeleton = [0, 1, 2, 3]
    // console.log(user)
    return (
        <>
            <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline:'1rem', width:'84%'}}> 
            
                <h1 css={{fontFamily:'poppins'}}>Your songs</h1>
                <form css={searchStyle}>
                    <input type="text" name="" id="filter" css={inputStyle} 
                    onChange={(e => {
                        setSearch(e.target.value)
                    })} 
                    placeholder="filter by genre"/>
                </form>
                <div css={style}> 
                   {!user?.song?.length && skeleton.map(item => < IsLoading key={item} />) }
                 {values}
                </div>              
            </div>
        </>
        
    )
}