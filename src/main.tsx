import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Song from './components/home/Song.tsx'
import Layout from './layout.tsx'
import AddSong from './components/addsong/AddSong.tsx'
import Statistics from './components/statistics/Statistics.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Song/>}/>
      <Route path='addsong' element={<AddSong/>}/>
      <Route path='statistics' element={<Statistics/>}/>
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
