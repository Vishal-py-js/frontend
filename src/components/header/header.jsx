import React from 'react'
import CarSearchBar from './Searchbar'
import FeatureModel from './FeatureModel'
import { Typography } from '@mui/material'

function Header() {
  return (
    <div style={{backgroundSize:"100% 100%"}} className='flex flex-col items-center gap-8 h-fit pt-28 pb-28 bg-[url(/assets/images/background/Background1.png)] bg-no-repeat bg-center'>
        <Typography variant='p'>Find cars for sale and for rent near you</Typography>
        <Typography variant='h1'>Find Your Perfect Car</Typography>
        <CarSearchBar />
        <FeatureModel />
    </div>
  )
}

export default Header