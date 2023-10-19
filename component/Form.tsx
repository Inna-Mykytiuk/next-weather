"use client"
// import { BsSearch } from 'react-icons/bs';
import Image from 'next/image'

interface FormProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ handleSearch, setLocation }: FormProps) => {
  const logo = '/assets/logo2.png'

  return (
    <div className='relative flex justify-between items-center max-w-[700px] text-white z-10'>
      <form
        // onSubmit={fetchWeather}
        className='flex justify-between items-center w-full m-auto px-4 bg-transparent border border-gray-300 text-white rounded-2xl'
      >
        <div>
          <input
            onChange={(e) => setLocation(e.target.value)}
            className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder-white outline-none'
            type='text'
            placeholder='Search city'
            onKeyDown={handleSearch}
          />
        </div>
        <button
        // onClick={fetchWeather}
        >
          <Image
            className='object-cover w-10 h-10'
            src={logo}
            width={60}
            height={60}
            alt='weather' />
        </button>
      </form>
    </div>
  )
}

export { Form }
