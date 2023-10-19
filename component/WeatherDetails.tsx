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
  return (
    <div>
      WeatherDetails
    </div>
  )
}

export { WeatherDetails }
