import { useLocation } from 'react-router-dom';
import { css } from "@emotion/react"
import { useDispatch, useSelector } from "react-redux"
import {addSong, updateSong } from "../../redux/ducks/songSlice"
import styled from "styled-components"

const formStyle = css({
    padding: '1rem',
    gap: '3rem'
})
const style = css({
    width:'80%', margin:'0 auto', display:'flex', alignItems: 'center',
    flexDirection: 'column', fontFamily: 'Poppins, sanserif', 
})
const divStyle = css({
    display:'flex',
    flexDirection: 'column',
    fontWeight: '600'
})

const Button = styled.button`
  font-size: 1rem;padding:.5rem 1rem; margin-top: 1rem; border-radius: 0.5rem;
`
interface addSong {
    Title: string, Album: string, Genre: string, Artist: string, id: string
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
}
export default function UpdateSong(){
    const location = useLocation();
    const userId = location.state.id;
    // console.log(userId);
    

    const song = useSelector((state: user) => {
        return state.user
    })

    const thisSong = song.song.filter(item => item._id == userId)
    // console.log(thisSong);
    

    
    const dispatch = useDispatch();
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // 👇️ prevent page refresh
        event.preventDefault();
        
        const [Title, Artist, Album, Genre] = [
            event.currentTarget.elements[0].value,
            event.currentTarget.elements[1].value,
            event.currentTarget.elements[2].value,
            event.currentTarget.elements[3].value
        ]
        const data: addSong = {
            Title: Title,
            Artist: Artist,
            Album: Album,
            Genre: Genre,
            id: thisSong[0]._id
        }
        dispatch(updateSong(data))
        for (let i = 0; i< 4; i++){
            event.currentTarget.elements[i].value = ''
        }
    }
    return (
        <div css={style}>
            <h2>
                update your selected song
            </h2>
            <form action="" css={formStyle} onSubmit={handleSubmit}>
            <div css={divStyle}>
                <label htmlFor="title" >Title</label>
                <input type="text" id="title" defaultValue={thisSong[0].Title} required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="artist">Artist:</label>
                <input type="text" id="artist" defaultValue={thisSong[0].Artist} required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="album">Album:</label>
                <input type="text" id="album" defaultValue={thisSong[0].Album} required />
            </div>
            <div css={divStyle}>
                <label htmlFor="genre">Genre</label>
                <input type="text" id="genre" defaultValue={thisSong[0].Genre} required/>
            </div>
            <Button>Update</Button>
        </form>
        </div>
        
    )
}

  
