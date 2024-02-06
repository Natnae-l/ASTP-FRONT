interface Prop {
    artist: string;
    song: number;
    album: number;
    style: any
}

export default function Artist(props: Prop){
    return (
        <>
            <li css={props.style}>{props.artist}</li>
            <li css={props.style}>{props.song}</li>
            <li css={props.style}>{props.album}</li>      
        </>          
    )
}