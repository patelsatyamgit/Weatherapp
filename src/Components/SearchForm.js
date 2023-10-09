import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

function SearchForm(props) {
    const city=props.city;
    const setcity=props.setcity;
    const getweather=props.infocity;
  return (
    <div>
         <div className='flex flex-row justify-between text-white w-[90%] md:w-1/2  mx-auto'>
       
        <div className='flex justify-between w-full gap-6 items-center'>
        <input className="placeholder:text-slate-50 placeholder:font-bold  block w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-gray-600 focus:ring-sky-500 focus:ring-1 sm:text-sm bg-gray-400 text-white  font-bold" placeholder="Search for anything..." type="text" value={city} onChange={(event)=> setcity(event.target.value)} name="search"/>
        <button className='w-12 h-12 rounded-lg bg-gray-400 flex items-center justify-center' onClick={()=> getweather()}>
             <AiOutlineSearch/>
        </button>
                
        </div>
    </div>
    </div>
  )
}

export default SearchForm