"use client"

import Image from 'next/image'
import { motion } from "framer-motion"

interface FormProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ handleChange, handleSubmit }) => {
  const logo = '/assets/logo2.png'
  const ladyBug = '/assets/ladybug1.png'

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Image
          className='object-cover'
          src={ladyBug}
          width={60}
          height={60}
          alt='lady bug' />
      </motion.div>
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
      </form></>

  )
}

export { Form }