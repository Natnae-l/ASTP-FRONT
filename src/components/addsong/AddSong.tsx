import { css } from "@emotion/react"
import { useDispatch } from "react-redux"
import { addSong } from "../../redux/ducks/songSlice"
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
    Title: string, Album: string, Genre: string, Artist: string
  }

export default function AddSong(){
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
            Genre: Genre
        }
        dispatch(addSong(data))
        for (let i = 0; i< 4; i++){
            event.currentTarget.elements[i].value = ''
        }
    }
    return (
        <div css={style}>
            <h2>
                Here you can add your songs
            </h2>
            <form action="" css={formStyle} onSubmit={handleSubmit}>
            <div css={divStyle}>
                <label htmlFor="title" >Title</label>
                <input type="text" id="title" required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="title">Artist:</label>
                <input type="text" id="title" required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="title">Album:</label>
                <input type="text" id="title" required />
            </div>
            <div css={divStyle}>
                <label htmlFor="title">Genre</label>
                <input type="text" id="title" required/>
            </div>
            <Button>Add Song</Button>
        </form>
        </div>
        
    )
}