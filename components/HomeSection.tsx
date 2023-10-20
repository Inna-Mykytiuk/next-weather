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


  const url = `https://api.weatherapi.com/v1/forecast.json?key=1afb03c498bb474489c193714230102&q=${location}&days=3&aqi=yes&alerts=yes`;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      // Fetch data from the API using the location
      const response = await fetch(url);
      const result = await response.json();

      // Check if the response contains an error
      if (result.error) {
        setError(result.error.message);
        setData({});
      } else {
        setError('');
        setData(result);
      }
    } catch (error) {
      setError('An error occurred while fetching data');
      setData({});
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLocation(e.currentTarget.value);

  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white/75 text-center mt-[5rem] px-8 w-full flex justify-center flex-col items-center">
        <h2 className="text-[45px] sm:text-[80px] font-bold max-w-[600px] font-josefin">Welcome to the Weather App</h2>
        <p className="text-lg sm:text-xl font-normal max-w-[600px] font-josefin"> Immerse yourself in the atmospheric tales that shape your day. From the gentle whispers of a sunny morning to the dramatic crescendos of stormy afternoons, ElementalForecast brings you a personalized journey through the elements. Step into a world where weather isn&apos;t just a forecast; it&apos;s an epic narrative waiting to unfold. Let the elements guide you on your daily adventures.</p>
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
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      {content}


    </section>
  )
}

export { HomeSection };


