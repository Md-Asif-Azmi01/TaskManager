import React, { useEffect, useState } from 'react'
import Settitle from './Settitle'
import YetToStart from './YetToStart'
import InProgress from './InProgress'
import Completed from './Completed'
import axios from 'axios'

const Alltask = () => {
    const [tasksyet, settasksyet] = useState();
    const [tasksin, settasksin] = useState();
    const [tasksc, settasksc] = useState();
    useEffect(() => {
        const fetchdata = async() => {
            try {
                const res = await axios.get('https://taskmanagerbackend-evoe.onrender.com/api/v1/getalltasks');
                // console.log(res.data.completed) 
                settasksyet(res.data.yetToStart);
                settasksin(res.data.inprogress);
                settasksc(res.data.completed);               
            } catch (error) {
                 console.log(error, 'error in useeffect in alltask');                                
            }
        }
        fetchdata();
    }, [])
    console.log(tasksyet);
    // console.log(tasksin);
    // console.log(tasksc);

    
  return (
    <div>
        <div className='flex flex-col text-center items-center justify-center text-blue-400 text-5xl'><h1> All Task </h1></div>
        <div className='flex gap-4 px-12 py-4 bg-blue-50 min-h-[80.6vh] max-h-auto'>
            <div className='w-1/3'>
            <Settitle title="Yet To Start"/>
            <div className='pt-2'>
                <YetToStart data={tasksyet}/>
            </div>
            </div>
            <div className='w-1/3'>
            <Settitle title="In Progress"/>
            <div className='pt-2'>
                <InProgress data={tasksin}/>
            </div>
            </div>
            <div className='w-1/3'>
            <Settitle title="Completed"/>
            <div className='pt-2'>
                <Completed  data={tasksc}/>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Alltask
