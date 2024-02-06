import {Outlet} from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import { css } from '@emotion/react'

const style = css({
  display: 'flex',
  height: '90vh',
})
function Layout() {
  return (
    <>
    <Header />
      <div css={style}>
          <Nav/>
          <Outlet />
      </div>

    </>
  )
}

export default Layout