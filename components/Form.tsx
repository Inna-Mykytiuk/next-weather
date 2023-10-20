"use client"
// import { BsSearch } from 'react-icons/bs';
import Image from 'next/image'

interface FormProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Form = ({ handleSearch, setLocation, handleClick }: FormProps) => {
  const logo = '/assets/logo2.png'

  return (
    <form
      // onSubmit={fetchWeather}
      className='flex justify-between items-center w-full m-auto px-4 bg-transparent border border-gray-300 text-white rounded-2xl max-w-[700px]'
    >
      <div>
        <input
          onChange={(e) => setLocation(e.target.value)}
          className='bg-transparent border-none text-white focus:outline-none text-lg sm:text-2xl placeholder-gray-200 outline-none'
          type='text'
          placeholder='Search city'
          onKeyDown={handleSearch}
        />
      </div>
      <button type="button"
        // onClick={fetchWeather}
        onClick={handleClick}
      >
        <Image
          className='object-cover'
          src={logo}
          width={60}
          height={60}
          alt='weather' />
      </button>


    </form>
  )
}

export { Form }

{/* <button
// onClick={fetchWeather}
// onClick={fetchWeather}
>
  <Image
    className='object-cover'
    src={logo}
    width={60}
    height={60}
    alt='weather' />
</button> */}