"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Form } from './Form'

const video = '/hero.mp4'


const HomeSection = () => {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const API_KEY = process.env.WEATHER_API_KEY;

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data);
        setLocation("");
        setError("")
      } catch (error) {
        setError("City not found")
        setData({})
      }
    }
  }


  return (

    <section className='main'>
      <div className='overlay' />
      <video
        autoPlay
        loop
        muted
        preload="auto"
        poster="./images/whale.jpg"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className='contentFirst'>
        <Form handleSearch={handleSearch} setLocation={setLocation} />


      </div>
      <div className='contentSecond'>
        {data.current ? (
          <div>{data.current.temp_f}</div>
        ) : null}

      </div>



    </section>
  )
}

export { HomeSection };

{/* <div className={`${container} text-center relative z-10`}>
  <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
    <form
      // onSubmit={fetchWeather}
      className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-100 text-white rounded-2xl'
    >
      <div>
        <input
          // onChange={(e) => setCity(e.target.value)}
          className='bg-transparent border-none text-white focus:outline-none text-2xl'
          type='text'
          placeholder='Search city'
        />
      </div>
      <button
      // onClick={fetchWeather}
      >
        <BsSearch size={20} />
      </button>
    </form>
  </div>
</div> */}


// const container = "mx-auto min-h-full w-5/6 py-20"
// const flexBetween = "flex items-center justify-between";
// const bcgImg = 'https://images.unsplash.com/photo-1580193483760-d0ef2abaa348?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974'

// import HeroBg from '../img/44.jpg';

// const HomeContainer = () => {
//   return (
//     <section
//       className=" w-full md:min-h-screen h-auto drop-shadow-xl"
//       id="home"
//       style={{
//         backgroundImage: `url(${HeroBg})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       }}
//     ></section>

// className = "mx-auto min-h-full w-5/6 py-20"

{/* <div className='absolute w-full top-0 left-0 ring-0 bottom-0 bg-black/10 z-10
        '/>
      <Image
        className='object-cover'
        src='https://images.unsplash.com/photo-1580193483760-d0ef2abaa348?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974'
        fill={true}
        alt='weather' /> */}



