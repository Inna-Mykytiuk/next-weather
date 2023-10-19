import { BsSearch } from 'react-icons/bs';

const Form = () => {
  return (
    <div className='relative flex justify-between items-center max-w-[700px] text-white z-10'>
      <form
        // onSubmit={fetchWeather}
        className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
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
  )
}

export { Form }
