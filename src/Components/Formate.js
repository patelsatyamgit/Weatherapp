import React from 'react'

function Formate(props) {
    const status=props.status;
    const setstatus=props.setstatus;
  return (
    <div className='flex flex-row justify-between text-white w-[90%] md:w-1/2  mx-auto'>
        <div>
            <button type="" className={`${status===1? "bg-gray-700 rounded-md py-[3px] px-3":"bg-transparent"}`} onClick={()=>setstatus(1)}>Your Weather</button>
        </div>
        <div>
        <button type="" className={`${status==2? "bg-gray-700 rounded-md py-[3px] px-3":"bg-transparent"}`} onClick={()=>setstatus(2)}>Search Weather</button>
        </div>
    </div>
  )
}

export default Formate