import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import project1 from '../../../public/images/projects/rentspace.png'
import space2 from '../../../public/images/projects/space1.png'
import space1 from '../../../public/images/projects/space2.png'
import space3 from '../../../public/images/projects/space3.png'
import date from '../../../public/images/projects/dateSection.png'
import auth from '../../../public/images/projects/auth.png'
import largescreen from '../../../public/images/projects/largesc.png'
import mobile1 from '../../../public/images/projects/mobile.jpg'
import mobile2 from '../../../public/images/projects/mobile2.png'
import pwa from '../../../public/images/projects/pwa.png'
import access from '../../../public/images/projects/access.png'
import compat from '../../../public/images/projects/compat.png'
import landing from '../../../public/images/projects/landingpage.png'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import video1 from '../../../public/videos/rentspacevideo.mov'
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
            text="Rent Space"
            className="mb-2 !text-4xl !text-left lg:!text-2xl sm:!text-xl xs:!text-xl sm:mb-8"
          />
           <div className='inline-block mr-5'>
                <ul className='text-gray-500 text-sm sm:text-xs'>
                    <li className='inline-block  mr-2'>NEXTJS</li>
                    <li className='inline-block mr-2'>CSS</li>
                    <li className='inline-block  mr-2'>FRAMER MOTION</li>
                </ul>
            </div>
       </div>
       <motion.div 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, ease:'easeIn'}}
       className='flex flex-col col-span-6 space-y-4 items-start lg:text-sm sm:text-xs'>
        <p className=''>A split image animation using clip-path css value, animated with framer motion and Nextjs.</p>
        <Link href="https://photion-4a8sne2bn-90splayer.vercel.app/"><p className=' underline underline-offset-4 decoration-primary'>Visit the site</p></Link>
       </motion.div>
      
       
       <div className='col-span-12 w-full h-auto p-8 bg-dark rounded-lg'>
       <div>
        <video src={require('../../../public/videos/photion.mov')} autoPlay loop muted />
       </div>
       </div>
      
      
        </div>
        </Layout>
      </main>
    </>
  );
}

export default rentspace