import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-[2px] border-solid border-dark font-medium text-lg dark:text-light
    dark:border-light sm:text-base '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg-py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build with <span className='text-primary text-2xl px-1 dark:text-primaryDark'>&#9825;</span>by&nbsp;<Link href="/" className='underline
            underline-offset-2'>XC</Link>
            </div>
            <Link href="mailto:ojogbomichael@gmail.com" target={"_blank"} className='underline
            underline-offset-2'>Send Ideas</Link>
        </Layout>
    </footer>
  )
}

export default Footer