import React, { useEffect, useState } from 'react'
import './css/style.css'

export default function Weather() {
    const[item,setItem]=useState('')
    const[search,setSearch]=useState('Mumbai')
    useEffect(()=>{
        async function getdata(){
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3823382688acdafba2264b77ea4b6302`);
            const resJson=await res.json();
            setItem(resJson.main)
        }
        getdata();
    },[search]);
  return (
    <>
    <div className='container'>
    <div className='box'>
        <div className='inputData'>
            <input className='inputData' value={search} type="search" placeholder='Search here' onChange={(event)=>{ 
                setSearch(event.target.value);
            }} /> 
        </div>
        {!item?(
            <p>No Data Found</p>):(<div>
            <div className='info'>
            <h2 className='location'>
            <i className="fa fa-street-view" aria-hidden="true"></i>{search}
            </h2>
            <h1 className='temp'>
                {item.temp}°C
            </h1>
            <h1 className='tempmin_max'>
               Min : {item.temp_min}°C | Max : {item.temp_max}°C
            </h1>
        </div>
        <div className='wave-one'></div>
        <div className='wave-two'></div>
        <div className='wave-three'></div>
        </div>)
        }
</div>
</div>
    </>

  )
}
