"use client"
import React,{useState} from 'react';
import Link from 'next/link'


const Home = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e)=>{
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

  let renderTask = <h2 className='text-center'>No task Available</h2>;
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
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
          
          <Link href="/Priority" className=''>Add Priority</Link>
        </li>  
      )
  });
  }

  return (
    <>     
     
    <form onSubmit={submitHandler} className='bg-slate-200 border-b-2 border-slate-500'>
    <input
      type="text"
      className='text-2xl m-28 px-4 py-2 border-2 border-zinc-800 '
      placeholder='Enter Title here'
      value={title}
      onChange={(elem)=>{
        settitle(elem.target.value)
      }}
    />
     <input
      type="text"
      className='text-2xl m-28 px-4 py-2 border-2 border-zinc-800 '
      placeholder='Enter description here'
      value={desc}
      onChange={(elem)=>{
        setdesc(elem.target.value)
      }}
    />
    <button className='bg-zinc-900 text-zinc-300 px-4 py-5 m-10 font-bold rounded-md' >Add Task</button>

  </form>
  <hr/>
  <div className='p-10 bg-slate-200 '>
    <h1 className='text-4xl text-zinc-600 p-5 mb-11 font-bold text-center border-4 border-cyan-200 border-b-cyan-500 bg-slate-100'>Daily Assigned Tasks</h1>
    <div className='flex justify-around '>
        <h3 className='text-2xl text-zinc-600 font-semibold underline mb-5 -mx-16 p,'>Title</h3>
        <h3 className='text-2xl text-zinc-600 font-semibold underline mb-5 '>Description</h3>
    </div>
    <ul>
       {renderTask}
       
    </ul>

  </div>

  </>
  )
}

export default Home;