import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Formate from './Components/Formate';
import SearchForm from './Components/SearchForm';
import WeatherDetail from './Components/WeatherDetail';
import GeolocationAccess from './Components/GeolocationAccess';
import { useEffect, useState } from 'react';
import Spinner from "./Components/Spinner"

function App() {
  const [current,setCurrent]=useState(1);
  const [lon,setLong]=useState(0);
  const [leti,setLeti]=useState(0);
  const [locationAcces,setLocationAcces]=useState(false);
  const [city,setCity]=useState('');
  const [details,setdetails]=useState(null);
  const [loading,setLoading]=useState(false);
  const [cityDetail,setCityDetail]=useState(null);

    useEffect(()=>{
      getLocation();
      if("lati" in sessionStorage || "lon" in sessionStorage){
             

              console.log(sessionStorage);
              console.log(leti,lon)
              if(+sessionStorage.getItem('leti')!=leti ){
                 sessionStorage.setItem("leti",leti);
                 sessionStorage.setItem("lon",lon);
                 getWeatherDetails();
              }
      
      }
      else{
        sessionStorage.setItem("leti",leti);
        sessionStorage.setItem("lon",lon);
      }
    },[])
   
  async function getWeatherDetails(){
    setLoading(true);
    let API_KEY='d1845658f92b31c64bd94f06f7188c9c';
    let URL=`https://api.openweathermap.org/data/2.5/weather?lat=${leti}&lon=${lon}&appid=${API_KEY}&units=matric`
    try {
      const data=await fetch(URL);
      const formaterData=await data.json();
      setdetails(formaterData);
      
    } catch (error) {
      console.log(error)
      console.error(error)
      
    }
    setLoading(false);
  }
  async function getWeatherDetailsCity(){
    setLoading(true);
    let API_KEY='d1845658f92b31c64bd94f06f7188c9c';
    let Url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=matric`;
    try {
      const data=await fetch(Url);
      const formaterData=await data.json();
      setCityDetail(formaterData);
      
    } catch (error) {
      console.log(error)
      console.error(error)
      
    }
    setLoading(false);
  }
   function getLocation(){
    if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition((p)=>{
          setLong(p.coords.longitude);
          setLeti(p.coords.latitude);
          sessionStorage.setItem("leti",leti);
          sessionStorage.setItem("lon",lon);
          getWeatherDetails();
        });
    }
    else{
      setLocationAcces(false);
    }
  }
  
  

  return (
    <div className="bg-blue-600 min-h-screen flex flex-col gap-10" >
      <Header/>
      <Formate status={current} setstatus={setCurrent}/>

      { current==2?(
                <SearchForm city={city} setcity={setCity} infocity={getWeatherDetailsCity}/>
      ):
      ("")
      
      }
      {
        current ==1 ?
        (
          sessionStorage.lon ==0 ?
          ( 
              <GeolocationAccess setJioLoacation={getLocation} />
           
          ):
          ("")

        ):
        (
          ""
        )
       
      }
      
      {
        loading ? 
        (
          <div className='w-full items-center flex justify-center'>
                      <Spinner></Spinner>
          </div>

        ):
        (
          current == 1?(

            <div>
              {
                sessionStorage.lon!=0?(
                  <WeatherDetail detail={details}/>
                ):
                (
                  <div>
                    
                  </div>
                )
              }
            
            </div>
          ):
          (
             cityDetail?.name ?(  <WeatherDetail detail={cityDetail}/>):(<div>
              
             </div>)
                              
          )
         
        )

      }
      
      
    </div>
  );
}

export default App;
