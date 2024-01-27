"use client"
import React,{useState} from 'react';


const Priority = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [mainTask, setMainTask] = useState([]);
  
    const priorityHandlar = (e)=>{
      e.preventDefault()/*It prevent the reload of the page and remove text after each entry*/
      setMainTask([...mainTask,{title,desc}]);
      settitle("");
      setdesc("");
      console.log(mainTask);
    }
    const deleteHandler = (i)=>{
      let copyTask = [...mainTask];
      copyTask.splice(i,1)
      setMainTask(copyTask)
    }
  
    let renderpriorityTask = <p className='text-center m-28'>No task Available</p>;
    if(mainTask.length>0){
        renderpriorityTask =mainTask.map((t,i)=>{
        return(
          
            <li key={i} className='flex justify-between border-slate-300 border-2 items-center rounded-md mb-2'>
            <input type='checkbox'  className='box-border h-6 w-11 p-4 border-4 checked'/>
            <div className='flex justify-between mb-5 w-2/3 '> 
              
              <h5 className='text-xl font-semibold block'>  {t.title}</h5>
              <div className='block'> <h6 className='text-xl font-lg '>{t.desc}</h6></div>
            
            </div>
            <button onClick={()=>{
              deleteHandler(i)
            }} className='text-xl text-zinc-500 font-bold p-2 mb-2 mt-1 mr-2 bg-sky-200 rounded-2xl hover:text-black'>Delete</button>
            
            <Link href="/Priority" className='border-2 border-black p-5 bg-sky-400'>Priority</Link>
          </li>  
        )
    });
    }
  
  return (
    <div className='bg-slate-300 text-center text-4xl font-bold p-11'>Priority Tasks
        <form onSubmit={()=>{priorityHandlar(i)}}>
            <ul>
                {renderpriorityTask }
            </ul>
        </form>
    </div>
  )
}

export default Priority;