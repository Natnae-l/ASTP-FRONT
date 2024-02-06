import { css } from "@emotion/react"
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
export default function AddSong(){
    return (
        <div css={style}>
            <h2>
                Here you can add your songs
            </h2>
            <form action="" css={formStyle}>
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
            <Button>ADD SONG</Button>
        </form>
        </div>
        
    )
}