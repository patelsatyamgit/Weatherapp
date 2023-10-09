import React from 'react'


function GeolocationAccess(props) {
    const getJioLocation=props.setJioLoacation;

  return (
    <div className='flex flex-col gap-4 items-center w-full'>
        <img src={process.env.PUBLIC_URL+"/location.png"} width={112} />
        <h1 className='text-white font-bold text-3xl'>Grant Location Access</h1>
        <p className='text-white'>Allow Access To Get Weather Information</p>
        <button type="" className='bg-gray-400 px-3 rounded-md text-white py-1 font-bold' onClick={()=> getJioLocation()}>GRANT ACCESS</button>
    </div>
  )
}

export default GeolocationAccess