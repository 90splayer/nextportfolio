import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import expo from '../../../public/images/projects/expo.png'
import expo3 from '../../../public/images/projects/expo3.png'
import expo2 from '../../../public/images/projects/expo2.png'
import expo4 from '../../../public/images/projects/expo4.png'
import auth from '../../../public/images/projects/tiddixworks.png'
import largescreen from '../../../public/images/projects/tiddixres3.png'
import mobile1 from '../../../public/images/projects/tiddixres2.png'
import mobile2 from '../../../public/images/projects/tiddixres.png'
import pwa from '../../../public/images/projects/pwa.png'
import access from '../../../public/images/projects/access.png'
import compat from '../../../public/images/projects/compat.png'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import Link from 'next/link'

const rentspace = () => {
  return (
    <>
      <Head>
        <title> Michael | Projects Page </title>
        <meta name="rentspace" content="project to rent creative spaces" />
      </Head>
      <main>
        <Layout className="pt-16">
        <div className='grid grid-cols-12 mt-4 dark:text-light'>
       <div className='flex flex-col col-span-6 my-4 items-start'>
       <AnimatedText
            text="Techonnect"
            className="mb-2 !text-4xl !text-left lg:!text-2xl sm:!text-xl xs:!text-xl sm:mb-8"
          />
           <div className='inline-block mr-5'>
                <ul className='text-gray-500 text-sm sm:text-xs'>
                    <li className='inline-block  mr-2'>EXPO</li>
                    <li className='inline-block mr-2'>JAVASCRIPT</li>
                    <li className='inline-block  mr-2'>RAPID API</li>
                    <li className='inline-block  mr-2'>REACT-NATIVE</li>
                </ul>
            </div>
       </div>
       <motion.div 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, ease:'easeIn'}}
       className='flex flex-col col-span-6 space-y-4 items-start lg:text-sm sm:text-xs'>
        <p className=''>An IOS and Android Mobile Application that compiles Tech jobs from around the world using Expo and Rapid Api then serves it to it users based on parameters.</p>
        <p className=' underline underline-offset-4 decoration-primary'>Visit the site</p>
       </motion.div>
       <div className="col-span-12 my-32 md:my-16">
              <Image
                src={expo}
                alt="techonnect"
                className="w-full h-auto rounded-lg"
              />
        </div>
       <div className='col-span-12 grid grid-cols-10 items-start justify-between my-32 md:my-16'>
        <div className='col-span-4 flex flex-col items-start space-y-4 md:col-span-10'>
            <h2 className='text-4xl font-bold lg:text-xl'>Totally Responsive,<br/>Every device matters</h2>
            <p className='lg:text-sm sm:text-xs'>The experience is excellent everywhere, from small to large screens.</p>
            <div className='w-full'>
            <Image src={expo2} alt='techonnect large screen' className='w-full h-auto mt-16 p-4 bg-dark rounded-sm' />
            </div>
        </div>
        <div className='col-span-3 px-8 md:col-span-5 md:px-4'>
        <Image src={expo3} alt='techonnect large screen' className='w-full h-auto mt-16 px-2 py-4 md:mt-0 md:px-1 md:py-2 bg-dark rounded-sm' />
        </div>
        <div className='col-span-3 px-8 md:col-span-5 md:px-4'>
        <Image src={expo4} alt='techonnect large screen' className='w-full h-auto px-2 py-4 md:px-1 md:py-2 bg-dark rounded-sm' />
        </div>
       </div>
       <div className='col-span-12 flex flex-col items-center space-y-4 mt-32 md:mt-16'>
       <p className='text-gray-500 lg:text-sm sm:text-xs'>Got a project? Tell me about it.</p>
       <Link href="mailto:ojogbomichael@gmail.com" target={"_blank"}>
       <h2 className='text-4xl font-bold hover:text-primary transition md:text-xl'>ojogbomichael@gmail.com</h2>
       </Link>
       </div>
        </div>
        </Layout>
      </main>
    </>
  );
}

export default rentspace