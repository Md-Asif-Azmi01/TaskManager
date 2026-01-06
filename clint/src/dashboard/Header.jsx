import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const Navigate = useNavigate();
    const addtaskbutton = () => {
        Navigate('/addtask');
    }

  return (
    <div className='flex px-12 py-4 items-center justify-between border-b'>
        <div>
            <h1 className='text-2xl text-blue-800 font font-semibold'>Task Tracker</h1>
        </div>
        <div className='flex gap-8'>
            <button className='hover:text-blue-800 transition-all duration-300'
            onClick={addtaskbutton}>
                Add Task
            </button>
        </div>
    </div>
  )
}

export default Header