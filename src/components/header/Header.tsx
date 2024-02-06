import { css } from "@emotion/react"
import guitar from "../../assets/guitar.png"

const style: {} = css({
    color: 'black',
    padding: '0rem 1rem 0rem 0rem',
    boxShadow: '1px 1px 1px 1px rgb(203, 203, 201);',
    boxSizing: 'border-box',
    margin: '0',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Poppins, sanserif',
    gap: '2rem'
  })
  const width = css({
    width: '60px'
  })
  const place = css({
    justifyContent: 'center'
  })

export default function Header(){
    return (
        <header css={style}>
            <img src={guitar} alt="" css={width}/>
               <h1 css={place}>Welcome to Harmonics</h1> 
        </header>
    )
}