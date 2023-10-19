import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
import './globals.css'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ["400", "500", "700"],
//   style: ["normal", "italic"]
// })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='text-[30px] font-poppins'>
        {children}
      </body>
    </html>
  )
}
