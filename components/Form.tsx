"use client"

import Image from 'next/image'

interface FormProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ handleChange, handleSubmit }) => {
  const logo = '/assets/logo2.png'

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-between items-center w-full m-auto px-4 bg-transparent border border-gray-300 text-white rounded-2xl max-w-[700px]'
    >
      <div>
        <input
          onChange={handleChange}
          className='bg-transparent border-none text-white focus:outline-none text-lg sm:text-2xl placeholder-gray-200 outline-none'
          type='text'
          placeholder='Search city'
        // onKeyDown={handleSearch}
        />
      </div>
      <button type="submit"
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