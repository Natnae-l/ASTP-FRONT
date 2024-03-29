import { css } from "@emotion/react"
import deleter from "../../assets/delete.png"
import edit from "../../assets/editing.png"
import { useDispatch } from "react-redux"
import { deleteSong} from "../../redux/ducks/songSlice"
import { Link } from "react-router-dom"

const style = css({
    backgroundColor: 'rgb(66, 66, 66)',
    color: 'white',
    padding: '1rem',
    fontFamily: 'Poppins, sanserif',
    height: '220px',
    minWidth: '160px',
    borderRadius: '0.8rem'
})

interface Prop {
    Title: string;
    id: string;
    Album: string;
    Genre: string;
    Artist: string
  }


export default function EachSong(props: Prop){
    const Dispatch = useDispatch();


    return (
        <section css={style}>
            <h3>{props.Title}</h3>
            <p css={{background: 'blue', borderRadius: '0.8rem', padding: '0.2rem 2rem'}}>By {props.Artist}</p>
            <div>
              <div>Album: {props.Album}</div>
                <p>Genre: {props.Genre}</p>  
            </div>
            <div css={{display: 'flex', justifyContent: 'space-between'}}>
                <img src={deleter} alt="" id={props.id} 
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                    const id = (event.target as any).id
                    Dispatch(deleteSong({id: id}))
                    //  console.log(id)
                    }} title="delete"/>
                <Link 
                    to= '/update/song' 
                    state= {{id: props.id}}
                    >
                    <img src={edit} alt="" title="edit"  id={props.id}/> 
                </Link>
            </div>
            
        </section>
    )
}