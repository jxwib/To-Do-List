import React from 'react'
import todo_icon from '../assets/todo_icon.png'
const ToDo = () => {
  return (
    <div className='bg-orange-50 place-self-center w-11/12 max-w-md 
    flex flex-col p-7 min-h-[550px] rounded-xl'>
    
{/* the title */}
    <div className='flex items-center mt-7 gap-2'>
        <img className= 'w-10' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>
      </div>



    
    </div>
  )
}

export default ToDo
