import { css } from "@emotion/react";

const liStyle = css({
    padding: '.5rem 1rem', border: '1px solid black' , borderRadius:'.3rem', fontWeight: '600'
})


interface Prop {
    genre: string;
    song: number;
}

export default function GenreStat(props: Prop){
    return (
        <>
            <li css={liStyle}>{props.genre}</li>
            <li css={liStyle}>{props.song}</li>    
        </>          
    )
}