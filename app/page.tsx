import Image from 'next/image'
import { HomeSection } from '../component/HomeSection'

export default function Home() {
  return (
    <>
      <HomeSection />
      <div className='relative flex justify-between items-center max-w-[500px]  mt-[100px] pt-4 px-4 text-white z-10'>
        {/* <form
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

        </form> */}
      </div>
    </>
  )
}

