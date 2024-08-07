import React, { useState } from 'react'
import { GiSpellBook } from "react-icons/gi"
const Header = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState("")
    const [price, setPrice] = useState("")
    const [comment, setComment] = useState("")

    const handleCreate = (e) => {
        e.preventDefault()
        let object = {
            id: new Date().getTime(),
            text,
            price,
            comment,
        }
        setData( (preve) => [...preve, object] )
        setText("")
        setComment("")
        setPrice("")
    }
    console.log(data);
    
    
  return (
    <div>
        <div className='h-full bg-green-200 flex-col pt-48 pb-40'>
                <form onSubmit={handleCreate} className= ' bg-inherit rounded-lg mt-auto items-center justify-center flex flex-col gap-3'>
            <input placeholder='Book name' clas className='bg-gray-100 w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' required value={text} onChange={(e) => setText(e.target.value)} type="text" />
            <input placeholder='Comment' clas className='bg-gray-100 w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' required value={price} onChange={(e) => setPrice(e.target.value)} type="text" />
            <input placeholder='Price' clas className='bg-gray-100  w-60 h-10 rounded-md p-2 outline-none text-gray-500 font-mono text-sm' required value={comment} onChange={(e) => setComment(e.target.value)} type="number" />
            <button className='w-60 h-10 mt-10 rounded-md bg-neutral-400-500 bg-green-300 border-2 shadow-lg shadow-green-500/50 text-white font-sans text-xl p-2 border-none'> Create </button>
            
                </form>    
            <div className='flex gap-3 flex-wrap flex-row justify-center text-center mt-11'>
                {
                    data?.map((item) => (
                        <div className='p-4  bg-slate-100 shadow-lg shadow-slate-500/40  rounded-xl w-80 text-center' key={item.id}>
                          <h2 className='pl-20 text-9xl text-gray-700 pb-2'><GiSpellBook /></h2>
                            <p className='text-xl text-gray-700 font-mono'>
                                <span className='text-gray-500'>Book name: </span>{item.text}
                            </p>
                            <p className='text-xl text-gray-700 font-mono'>
                                <span className='text-gray-500 font-mono'>Price:</span> {item.comment} Sum
                            </p>
                            <p className='text-xl text-gray-700 font-mono' >
                            <span className='text-gray-500 font-mono'>Comment:</span> "{item.price}"
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header

