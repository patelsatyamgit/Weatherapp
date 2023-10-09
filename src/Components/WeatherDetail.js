import React from 'react'

function WeatherDetail(props) {
    const detail=props.detail;
    const number=(detail?.main?.temp)- 273.15;
  return (
    <div className='flex items-center flex-col gap-4'>
        <div className='flex gap-3 text-white'>
            <h1 className='text-2xl font-bold'>{detail?.name}</h1>
            <img src={`https://flagcdn.com/144x108/${detail?.sys?.country?.toLowerCase()}.png`} width={50}/>
        </div>
        <div className='text-white text-3xl'>
            <p>{detail?.weather[0]?.main}</p>
        </div>
        <div>
            <img src={`http://openweathermap.org/img/w/${detail?.weather?.[0]?.icon}.png`} width={80}/>
        </div>
        <div className='text-white text-4xl'>
            <h1>{number.toFixed(2)}℃</h1>
        </div>
        <div className='flex gap-10 flex-wrap items-center justify-center'>
            <div className='flex flex-col gap-2 w-60 bg-gray-400 rounded-md text-white items-center'>
                <img src={process.env.PUBLIC_URL+"/wind.png"} width={70}/>
                <h1 className='text-3xl'>WINDSPEED</h1>
                <p className='text-2xl'>{detail?.wind?.speed}M/S</p>
            </div>
            <div className='flex flex-col gap-2 w-60 bg-gray-400 rounded-md text-white items-center'>
            <img src={process.env.PUBLIC_URL+"/humidity.png"} width={70} />
                <h1 className='text-3xl'>HUMIDITY</h1>
                <p className='text-2xl'>{detail?.main?.humidity}%</p>
            </div>
            <div className='flex flex-col gap-2 w-60 bg-gray-400 rounded-md text-white items-center'>
            <img src={process.env.PUBLIC_URL+"/cloud.png"} width={70} />
                <h1>CLOUD</h1>
                <p className='text-2xl'>{detail?.clouds?.all}%</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherDetail