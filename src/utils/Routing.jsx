import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Women from '../Components/Women'
import Men from '../Components/Men'
import Kids from '../Components/Kids'
import Home_Living from '../Components/Home_Living'
import Beauty from '../Components/Beauty'
import Studio from '../Components/Studio'
import Profile from '../Components/Profile'
import Wishlist from '../Components/Wishlist'
import Bag from '../Components/Bag'

function Routing() {
  return (
    <Routes>
        <Route path='/men' element={<Men/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/homeliving' element={<Home_Living/>} />
        <Route path='/beauty' element={<Beauty/>} />
        <Route path='/studio' element={<Studio/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/bag' element={<Bag/>} />
        <Route path='/women' element={<Women/>}/>
    </Routes>
  )
}

export default Routing