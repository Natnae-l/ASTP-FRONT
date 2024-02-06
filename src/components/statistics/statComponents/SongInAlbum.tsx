import { css } from "@emotion/react";

const liStyle = css({
    padding: '.5rem 1rem', border: '1px solid black' , borderRadius:'.3rem', fontWeight: '600'
})


interface Prop {
    album: string;
    song: number;
}

export default function AlbumStat(props: Prop){
    return (
        <>
            <li css={liStyle}>{props.album}</li>
            <li css={liStyle}>{props.song}</li>    
        </>          
    )
}