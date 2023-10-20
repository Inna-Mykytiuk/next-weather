import React from 'react'
interface WeatherDetailsProps {
  data: {
    current?: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_f: number;
      vis_km: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current) {
    return null;
  }

  return (
    <div className=" mt-8 mb-10 md:mt-12 ">
      <h1 className="mb-4 text-2xl sm:text-[30px] text-white italic font-bold font-josefin">Weather Details</h1>

      <div className="grid grid-cols-2 sm:grid-cols-6  gap-4 text-center italic font-bold">
        <div className="bg-white/50 flex p-2 md:p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <div className="flex flex-col gap-2 text-orange-100">
            <h3 className="text-lg sm:text-xl">Wind Speed</h3>
            <p
              className=" text-md bg-black/25 rounded-xl italic mb-2"
              aria-label={`Wind Speed: ${data.current.wind_mph} mph`}
            >
              {data.current.wind_mph} mph
            </p>
          </div>
        </div>
        <div className="bg-white/50 flex p-2 md:p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <div className="flex flex-col gap-2 text-orange-100">
            <h3 className="text-lg sm:text-xl">Humidity</h3>
            <p className=" text-md bg-black/25 rounded-xl" aria-label={`Humidity: ${data.current.humidity}%`}>
              {data.current.humidity}%
            </p>
          </div>
        </div>
        <div className="bg-white/50 flex p-2 md:p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <div className="flex flex-col gap-2 text-orange-100">
            <h3 className="text-lg sm:text-xl">Wind Direction</h3>
            <p
              className=" text-md bg-black/25 rounded-xl"
              aria-label={`Wind Direction: ${data.current.wind_dir}`}
            >
              {data.current.wind_dir}
            </p>
          </div>
        </div>
        <div className="bg-white/50 flex p-2 md:p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <div className="flex flex-col gap-2 text-orange-100">
            <h3 className="text-lg sm:text-xl">Sunrise</h3>
            <p
              className="text-md bg-black/25 rounded-xl px-2"
              aria-label={`Sunrise: ${data.forecast?.forecastday[0]?.astro.sunrise}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunrise}
            </p>
          </div>
        </div>
        <div className="bg-white/50 flex p-2 md:p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <div className="flex flex-col gap-2 text-orange-100">
            <h3 className="text-lg sm:text-xl">Sunset</h3>
            <p
              className="text-md bg-black/25 rounded-xl px-2"
              aria-label={`Sunset: ${data.forecast?.forecastday[0]?.astro.sunset}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunset}
            </p>
          </div>
        </div>
        <div className="bg-white/50 flex p-2 md:p-4 items-center justify-center gap-6 rounded-xl"
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(90, 72, 72, 0.3)',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
          }}
        >
          <div className="flex flex-col gap-2 text-orange-100">
            <h3 className="text-lg sm:text-xl">Visibility</h3>
            <p className="text-md bg-black/25 rounded-xl" aria-label={`Visibility: ${data.current.vis_km} km`}>
              {data.current.vis_km} km
            </p>
          </div>
        </div>
        {/* <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Air Pressure: ${data.current.pressure_mb} hPa`}
            >
              {data.current.pressure_mb} hPa
            </h3>
          </div>
        </div> */}
        {/* <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Feels Like</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Feels Like: ${data.current.feelslike_f}°`}
            >
              {data.current.feelslike_f}°
            </h3>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export { WeatherDetails }
