import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delet from '../assets/delet.png'
import edit from '../assets/Edit.png'


const TodoItems = ({text , id, iscomplete, deleteTodo, toggle}) => {
  return (

    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>

        <img src = {iscomplete ? tick : not_tick}  alt="" className='w-8' />
          <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${iscomplete ? "line-through" : ""}`}>
               {text} </p>
                 

      </div>
      

      <div>

        <img src={edit} alt="" className=' w-10 cursor-pointer'/>
         </div>
     

      <div>

        <img onClick={()=>{deleteTodo(id)}} src={delet} alt="" className=' w-10 cursor-pointer'/>
         </div>
     



    </div>
  )
}

export default TodoItems
