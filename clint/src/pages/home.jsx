import React from 'react'
import Header from '../dashboard/Header'
import Alltask from '../dashboard/Alltask'

const Home = () => {
  return (
    <div className='w-full relative'>
      <div className='bg-white'>
        <Header/>
        <Alltask/>
      </div>
    </div>
  )
}

export default Home