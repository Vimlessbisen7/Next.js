

"use client"

import React, { useState } from 'react'


const page = () => {

  const  [username, setusername] = useState("");


  const submitHendler=(e)=>{
    e.preventDefault()
    console.log(username)
  }





  return (


    <div className=' ml-[25%] w-[50%] shadow-inner shadow-blue-900/100 opacity-100 bg-blend-lighten rounded-lg border border-none mt-[6%] py-[8%] '>

<h2 className='font-bold flex justify-center mb-[1%] italic underline underline-1 text-5xl text-zinc-600'> N e x t.js  </h2>

<p className='font-bold flex justify-center mb-[10%]  text-sm text-zinc-600'> Day-01 | Next.js </p>

    <form onSubmit={(e)=>submitHendler(e)} className=' justify-center flex gap-x-5'>
       
     

      <input  value={username} onChange={(e)=>setusername(e.target.value)} className='px-[15%]  shadow-inner shadow-blue-900/100 opacity-100 bg-blend-lighten    outline-none text-start rounded text-zinc-300 text-xl font-semibold bg-transparent '  name="username" type="text"></input>

      <button className=' px-[3%] py-4 rounded font-semibold text-zinc-600 shadow-inner shadow-blue-900/100 opacity-100 bg-blend-lighten  text-xl border-1 bg-transparent hover:bg-blue-900/20'>Submit</button>

       

    </form >



    </div>


  )
}

export default page