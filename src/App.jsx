

import React, { useState } from 'react'


const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

  let btnClicked = (e) => {
    e.preventDefault()
    
    

    
const copyTast = [...task]

copyTast.push({
  title: title,
  details: details
})

setTask(copyTast)


    setTask(copyTast)
    console.log(copyTast);
    
    

    setTitle('')
    setDetails('')

   
  }

  const deleteNote = (idx) =>{
    const copyTast = [...task]

    copyTast.splice(idx,1)
    setTask(copyTast)
    

    
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      
      <form
      
        onSubmit={btnClicked}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10 ">
          <h1 className='text-3xl font-bold'>Add Notes</h1>

          {/* PEHLA INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="border-2 px-5 py-2 font-medium outline-none rounded w-full"
          value={title}
          onChange={(e)=>{
          setTitle(e.target.value)
          }}
        />

        <textarea
          placeholder="Write Details"
          className="border-2 px-5 py-2 font-medium h-32 outline-none rounded w-full"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button
          className="border-2 px-5 bg-white text-black py-2 font-medium outline-none rounded w-full"
          type="submit"
        >
          Add Note
        </button>
      </form>
      
      <div className=' bg-gray-950 lg:w-1/2 lg:border-l-2  p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap mt-5 gap-5 h-full overflow-auto'>
       
{task.map(function(elem, idx) {

  return (
    <div
      key={idx}
      className="h-52 relative w-42 bg-cover flex flex-col justify-between bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] p-6 text-black rounded-2xl"
    >
      <div>
        <h3 className="font-bold text-xl">
        {elem.title}
      </h3>

      <p className="mt-2">
        {elem.details}
      </p>
      </div>
      
      <div>
        <button onClick={()=>{
          deleteNote(idx)
        }} className='bg-red-600 cursor-pointer active:scale-95 py-1 w-full text-white  rounded '>delete</button>
      </div>
    
    </div>
  )
})}

        
        
       
        </div>
      </div>
    </div>
  )
}

export default App
