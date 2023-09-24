import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import project1 from '../../../public/images/projects/tiddix.png'
import tiddix2 from '../../../public/images/projects/tiddix2.png'
import tidmis from '../../../public/images/projects/tiddixmission.png'
import tid3 from '../../../public/images/projects/tiddix3.png'
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
            text="Tiddix"
            className="mb-2 !text-4xl !text-left lg:!text-2xl sm:!text-xl xs:!text-xl sm:mb-8"
          />
           <div className='inline-block mr-5'>
                <ul className='text-gray-500 text-sm sm:text-xs'>
                    <li className='inline-block  mr-2'>PYTHON</li>
                    <li className='inline-block mr-2'>TYPESCRIPT</li>
                    <li className='inline-block  mr-2'>CHAKRA</li>
                    <li className='inline-block  mr-2'>FRAMER MOTION</li>
                </ul>
            </div>
       </div>
       <motion.div 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, ease:'easeIn'}}
       className='flex flex-col col-span-6 space-y-4 items-start lg:text-sm sm:text-xs'>
        <p className=''>A Full Stack Web Application that helps creatives realise their dreams by connecting them with supporters, investors and funding throuh a metric-based data system.</p>
        <p className=' underline underline-offset-4 decoration-primary'>Visit the site</p>
       </motion.div>
       <div className="col-span-12 my-32 md:my-16">
              <Image
                src={project1}
                alt="rentspace"
                className="w-full h-auto rounded-lg"
              />
        </div>
        
        <div className='col-span-12 grid grid-cols-12 items-start text-center my-32 md:my-16'>
        <div className='col-span-4 flex flex-col space-y-4 p-2 sm:p-1'>
        <h2 className='text-lg font-bold lg:text-xl sm:text-base'>Minimalistic design</h2>
        <p className='lg:text-sm sm:text-xs'>To avoid users encountering any difficulties while booking, the overall experience must be simple while also appearing modern and elegant.</p>
        </div>
        <div className='col-span-4 flex flex-col space-y-4 p-2 sm:p-1'>
        <h2 className='text-lg font-bold lg:text-xl sm:text-base'>Easy checkout</h2>
        <p className='lg:text-sm sm:text-xs'>Checking out should be as quick and easy as possible, with a variety of payment options.</p>
        </div>
        <div className='col-span-4 flex flex-col space-y-4 p-2 sm:p-1'>
        <h2 className='text-lg font-bold lg:text-xl sm:text-base'>Progressive web app</h2>
        <p className='lg:text-sm sm:text-xs'>Satisfied customers who plan on re-visiting and updating their travel collection should be able to do so in a single click.</p>
        </div>
        </div>
      
       <div className='col-span-12 w-full h-auto p-8 bg-dark rounded-lg'>
       <Image src={tiddix2} alt='rentspace date'/>  
       </div>
       <div className='col-span-12 grid grid-cols-12 items-center justify-between my-32 md:my-16'>
       <div className='col-span-7 md:col-span-12 md:mb-8'>
        <Image src={tid3} alt='tiddix collect'/>
       </div>
       <div className='flex flex-col col-span-5 text-start space-y-4 pl-10 md:col-span-12 md:pl-0'>
        <h2 className='text-4xl font-bold lg:text-xl'>Our Creative Categories</h2>
        <p className='lg:text-sm sm:text-xs'>Our creative categories span over various fields to give investors more options to niche.</p>
        </div> 
       </div>
       <div className='col-span-12 grid grid-cols-12 flex-col items-start space-y-16 md:space-y-8'>
       <div className='col-span-6 flex flex-col items-start space-y-4 md:col-span-12'>
        <h2 className='text-4xl font-bold lg:text-xl'>Search page</h2>
        <p className='lg:text-sm sm:text-xs'>A sweet and swift experience in the rent page is essential as customers spend the most time here searching and deciding what to buy. I made deciding easy with organization features such as categories, search, sort, filter, etc. Have a look.</p>
       </div>
       <div className='col-span-12 w-full h-auto p-8 bg-dark rounded-lg'>
       <Image src={tidmis} alt='tiddix collect'/>
       </div>
       </div>
       <div className='col-span-12 grid grid-cols-10 items-start justify-between my-32 md:my-16'>
        <div className='col-span-4 flex flex-col items-start space-y-4 md:col-span-10'>
            <h2 className='text-4xl font-bold lg:text-xl'>Totally Responsive,<br/>Every device matters</h2>
            <p className='lg:text-sm sm:text-xs'>The experience is excellent everywhere, from small to large screens.</p>
            <div className='w-full'>
            <Image src={largescreen} alt='rent space large screen' className='w-full h-auto mt-16 p-4 bg-dark rounded-sm' />
            </div>
        </div>
        <div className='col-span-3 px-8 md:col-span-5 md:px-4'>
        <Image src={mobile1} alt='rent space large screen' className='w-full h-auto mt-16 px-2 py-4 md:mt-0 md:px-1 md:py-2 bg-dark rounded-sm' />
        </div>
        <div className='col-span-3 px-8 md:col-span-5 md:px-4'>
        <Image src={mobile2} alt='rent space large screen' className='w-full h-auto px-2 py-4 md:px-1 md:py-2 bg-dark rounded-sm' />
        </div>
       </div>
       <div className='col-span-12 grid grid-cols-12 flex-col items-start space-y-16 md:space-y-8'>
       <div className='col-span-6 flex flex-col items-start space-y-4 md:col-span-12'>
        <h2 className='text-4xl font-bold lg:text-xl'>Authentication</h2>
        <p className='lg:text-sm sm:text-xs'>To save user data to serve them better, users have to create accounts. I made this seamless by implementing “login with google” where users can log in easily using their gmails.</p>
       </div>
       <div className='col-span-12 w-full h-auto p-8 bg-dark rounded-lg'>
       <Image src={auth} alt='rentspace auth'/>
       </div>
       </div>
       <div className='col-span-12 grid grid-cols-12 flex-col items-start space-y-8 mt-32 md:mt-8'>
       <div className='col-span-6 flex flex-col items-start space-y-4 md:col-span-12'>
        <h2 className='text-4xl font-bold lg:text-xl'>Other features</h2>
        <p className='lg:text-sm sm:text-xs'>Here are a couple of other features I implemented.</p>
       </div>
       <div className='col-span-12 grid grid-cols-12 items-start justify-between text-center'>
       <div className='col-span-4 flex flex-col p-4 md:p-1'>
       <Image src={pwa} alt='pwa rentspace'/>
       <h2 className='py-4 mb-2 bg-dark text-light lg:text-base'>Progressive web app</h2>
       <p className='lg:text-xs'>To enable users return to the shop in just one click, i made the product a progressive web app.</p>
       </div>
       <div className='col-span-4 flex flex-col p-4 md:p-1'>
       <Image src={access} alt='pwa rentspace'/>
       <h2 className='py-4 mb-2 bg-dark text-light lg:text-base'>Browsers Compactibility</h2>
       <p className='lg:text-xs'>The product looks great on all browsers and more importantly, the experience is the same in all.</p>
       </div>
       <div className='col-span-4 flex flex-col p-4 md:p-1'>
       <Image src={compat} alt='pwa rentspace'/>
       <h2 className='py-4 mb-2 bg-dark text-light lg:text-base'>Accessiblity</h2>
       <p className='lg:text-xs'>This projects should pass the google lighthouse web accessibility test in flying colors.</p>
       </div>
       </div>
       </div>
       <div className='col-span-12 flex flex-col items-center space-y-4 mt-32 md:mt-16'>
       <p className='text-gray-500 lg:text-sm sm:text-xs'>Got a project? Tell me about it.</p>
       <Link href='/'>
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