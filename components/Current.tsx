import { getCurrentDate } from '../utils/currentDate';
import { IoLocationSharp } from 'react-icons/io5';
import Image from 'next/image'

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const CurrentData = ({ data }: CurrentProps) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;
  const currentDate = getCurrentDate();
  return (
    <div className="flex flex-col gap-2 p-6 rounded-xl"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(90, 72, 72, 0.3)',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 5px 15px',
      }}
    // style={{ backgroundColor: 'rgb(147, 159, 77, 0.5)' }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-start items-center text-start">
          <h1 className="text-3xl text-white">Today</h1>
          <p className="text-white flex flex-col justify-start items-center">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img className="w-[50px] object-cover" src={weatherIcon} alt="Weather Icon" />
          </div>
        )}
      </div>
      <div className='text-center'>
        {data.current ? (
          <p className="text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? <span className="text-white">{data.current.condition.text}</span> : null}
      </div>
      <div className='text-center'>
        {data.location ? (
          <div className="flex items-center justify-center text-black bg-white/10 px-2 py-2 rounded-xl">

            <div className='flex flex-col items-center justify-center text-orange-100'>
              <IoLocationSharp className="w-[30px] h-[30px]" />
              <p>{data.location.name},</p>
              <p>{data.location.region}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export { CurrentData }
