import { css } from "@emotion/react";
import {NavLink } from "react-router-dom";
// import headphone from "../../assets/headphones.png"


const color: string = 'rgb(241, 130, 75)'

const listStyle = css({
    fontFamily: 'Poppins',
    fontSize: '1.2rem',
    textDecoration: 'none',
    fontWeight: '600'
})
const ulStyle = css({
    listStyle: 'none',
    display: 'flex',
    flexDirection:'column',
    gap: '1rem',  
})
const navStyle = css({
    paddingBlock:'3.5rem',
    paddingInline: '0 2rem',
    boxShadow: '2px 0px 0px 1px rgb(190, 203, 201)',
    overflow: 'hidden',
    width: '16%'
})

export default function Nav() {
    return (
     
                <nav className="" css={navStyle}>             
                    <ul className="" css={ulStyle}>
                    <NavLink
                        to="/"
                        css={listStyle}
                        style={({ isActive, isTransitioning }) => {
                          return {
                            color: isActive ? color : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                          >
                        Home
                    </NavLink>
                    <NavLink
                        to="/addsong"
                        css={listStyle}
                        style={({ isActive, isTransitioning }) => {
                          return {
                            color: isActive ? color : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                          >
                        Add Song
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        css={listStyle}
                        style={({ isActive, isTransitioning }) => {
                          return {
                            color: isActive ? color : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                          };
                        }}
                          >
                        Statistics
                    </NavLink>
                    </ul>
                 </nav>
    );
}
