import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [time,setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)
  useEffect(()=>{
    let timer;
    if(isRunning){
      timer =setInterval(()=>{setTime((prev)=>prev+10)},10)
    }else{
      clearInterval(timer)
    }
    return ()=>clearInterval(timer)
  },[isRunning])
  const formatTime = (time) =>{
    const minutes = String(Math.floor(time/60000)).padStart(2,'0')
    const seconds = String(Math.floor(time%60000/1000)).padStart(2,'0')
    const centiSeconds = String(Math.floor(time%1000/10)).padStart(2,'0')
    return `${minutes}:${seconds}:${centiSeconds}`
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-white text-white'>
      <div className='bg-zinc-300 bg-opacity-20 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-gray-300/30 
      text-center w-[500px] relative'>
      <h1 className='text-4xl font-mono font-semibold mb-6 tracking-widest text-black '>STOPWATCH</h1>
      <div className='bg-gradient-to-br from-gray-900 to-black p-4 rounded-2xl shadow-2xl text-6xl font-mono font-semibold mb-6'>
        {formatTime(time)}
      </div>
      <div className='space-x-4'>
          <button className='bg-red-500 p-4 px-6 text-3xl rounded-2xl'  onClick={()=>setIsRunning(true)}>Start</button>
          <button className='bg-blue-500 p-4 px-6 text-3xl rounded-2xl' onClick={()=>setIsRunning(false)}>Stop</button>
          <button className='bg-green-500 p-4 px-6 text-3xl rounded-2xl' onClick={()=>{setIsRunning(false);setTime(0)}}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default App
