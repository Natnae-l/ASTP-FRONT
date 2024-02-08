import { useLocation } from 'react-router-dom';
import { css } from "@emotion/react"
import { useDispatch, useSelector } from "react-redux"
import {addSong, updateSong } from "../../redux/ducks/songSlice"
import styled from "styled-components"
import { useState } from 'react';

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
    const [message, setMessage] = useState('Update this song');


    const location = useLocation();
    const userId = location.state.id;
    console.log(userId);
    const dispatch = useDispatch();

    const song = useSelector((state: user) => {
        return state.user
    })
        
    const thisSong = song.song.filter(item => item._id == userId)
    const [formData, setFormData] = useState({
        Title: thisSong[0].Title,
        Artist: thisSong[0].Artist,
        Album: thisSong[0].Album,
        Genre: thisSong[0].Genre
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        console.log(formData);
        
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const data: addSong = {...formData, id:thisSong[0]._id}; 
        console.log(data);
        

        dispatch(updateSong(data))
        setMessage('your song is updated!')
    };
    return (
        <div css={style}>
            <h2>
                update your selected song
            </h2>
            <h4 css={messageStyle}>{message}</h4>
            <form action="" css={formStyle} onSubmit={handleSubmit}>
            <div css={divStyle}>
                <label htmlFor="title" >Title</label>
                <input type="text" id="Title" defaultValue={thisSong[0].Title} css={inputStyle} onChange={handleChange} required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="artist">Artist:</label>
                <input type="text" id="Artist" defaultValue={thisSong[0].Artist} css={inputStyle} onChange={handleChange} required/>
            </div>
            <div css={divStyle}>
                <label htmlFor="album">Album:</label>
                <input type="text" id="Album" defaultValue={thisSong[0].Album} css={inputStyle} onChange={handleChange} required />
            </div>
            <div css={divStyle}>
                <label htmlFor="genre">Genre</label>
                <input type="text" id="Genre" defaultValue={thisSong[0].Genre} css={inputStyle} onChange={handleChange} required/>
            </div>
            <Button>Update</Button>
        </form>
        </div>
        
    )
}

  
