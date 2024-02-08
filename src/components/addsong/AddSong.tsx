import { css } from "@emotion/react"
import { useDispatch } from "react-redux"
import { addSong } from "../../redux/ducks/songSlice"
import styled from "styled-components"
import { useState } from "react"

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
const messageStyle = css({
    paddingBlock: '0',
    marginBlock: '0',
    color:'rgb(241, 130, 75)'
})
const inputStyle = css({
    padding: '5px 2px',
    border: '1px solid black',
    borderRadius: ".35rem",
    fontFamily: 'Poppins, sanserif'
})
const Button = styled.button`
  font-size: 1rem;padding:.5rem 1rem; margin-top: 1rem; border-radius: 0.5rem;background-color: white;color: black;font-weight: 600;
`
interface addSong {
    Title: string, Album: string, Genre: string, Artist: string
  }

export default function AddSong(){
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        Title: '',
        Artist: '',
        Album: '',
        Genre: ''
    }); 
    const [message, setMessage] = useState('Add your song');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const data: addSong = formData; 
        console.log(data);
        
        dispatch(addSong(data))
        setMessage('Your song is added')        
    }
    return (
        <div css={style}>
            <h2>
                Here you can add your songs
            </h2>
             <h4 css={messageStyle}>{message}</h4>
            <form action="" css={formStyle} onSubmit={handleSubmit}>
            <div css={divStyle}>
                <label htmlFor="title" >Title</label>
                <input type="text" css={inputStyle} id="Title"  onChange={handleChange} required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="title">Artist:</label>
                <input type="text" css={inputStyle} id="Artist"  onChange={handleChange} required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="title">Album:</label>
                <input type="text" css={inputStyle} id="Album"  onChange={handleChange} required />
            </div>
            <div css={divStyle}>
                <label htmlFor="title">Genre</label>
                <input type="text" css={inputStyle} id="Genre" onChange={handleChange} required/>
            </div>
            <Button>Add Song</Button>
        </form>
        </div>
        
    )
}