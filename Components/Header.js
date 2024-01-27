import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <nav className='bg-slate-800 flex justify-around '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKgz7miva6BgXbnTvrm0C6Tvsdt_9p5bkOw&usqp=CAU" className='size-16 mx-5 my-6'/>
        <h1 className=' text-sky-100 text-5xl p-6 font-bold font-mono '>My To-Do List </h1>
        <Link href="/Homebar" className='text-white font-bold text-2xl p-5 m-4  hover:bg-sky-400 active:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 '>Home</Link>
        <Link href="/Signup" className='text-white font-bold text-2xl p-5 m-4  hover:bg-sky-400 active:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 '>Sign up</Link>
        <Link href="/Login"  className='text-white font-bold text-2xl p-5 m-4 hover:bg-sky-400 active:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400'>Sign in</Link>
        <Link href="/Priority"  className='text-white font-bold text-2xl p-6 m-4 hover:bg-sky-400 active:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400'>Priority-Tasks</Link>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVACDFXu9VWb91po91fT7J4eYrIKCSbPLNqQ&usqp=CAU" className='size-11 mt-10 mr-4'/>

    </nav>
    </>
  )
}

export default Header