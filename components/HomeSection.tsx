"use client"

import React from 'react'
import { Form } from './Form'
import { useState } from 'react'
import { CurrentData } from './Current'
import { WeatherDetails } from './WeatherDetails'
import { WeekForecast } from './WeekForecast'

const HomeSection = () => {
  const [data, setData] = useState({});

  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=1afb03c498bb474489c193714230102&q=${location}&days=4&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  const handleClick = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setData(data);
      setLocation("");
      setError("");
    } catch (error) {
      setError("City not found");
      setData({});
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center mt-[5rem] px-8 w-full flex justify-center ">
        <h2 className="text-[45px] sm:text-[80px] font-bold max-w-[600px] font-josefin ">Welcome to the Weather App</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center mt-[5rem] px-8">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <div className='text-white text-center mt-[5rem] px-8'>
        <div className="flex md:flex-row flex-col items-center justify-between mt-[-4rem] gap-10">
          <CurrentData data={data} />
          <WeekForecast data={data} />
        </div>
        <WeatherDetails data={data} />
      </div>
    );
  }

  return (

    <section className='w-full flex flex-col justify-center items-center text-center'>


      <div className='px-8'>
        <Form handleSearch={handleSearch} setLocation={setLocation} handleClick={handleClick} />
      </div>
      {content}


    </section>
  )
}

export { HomeSection };
