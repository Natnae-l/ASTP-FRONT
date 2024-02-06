import { css } from "@emotion/react"
import EachSong from "./EachSong"
import * as data from '../../data'

const style = css({
    display:'flex', alignItems: 'center', gap:'20px', flexWrap: 'wrap', width: '100% !important', overflowY:'scroll'
})

const values = data.song.map(item => (
    <EachSong 
        Title={item.Title}
        id={item._id}
        Album={item.Album}
        Artist={item.Artist}
        Genre={item.Genre}
    />
))

export default function Song(){
    return (
        <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingInline:'1rem', width:'84%'}}>
            <h1 css={{fontFamily:'poppins'}}>Your songs</h1>
            <div css={style}> 
                {values}
            </div>              
        </div>
    )
}