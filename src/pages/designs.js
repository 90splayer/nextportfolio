import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import design1 from '../../public/images/designs/design1.png'
import design2 from '../../public/images/designs/design2.png'
import design3 from '../../public/images/designs/design3.png'
import design4 from '../../public/images/designs/design4.png'
import design5 from '../../public/images/designs/design5.png'
import design6 from '../../public/images/designs/design6.png'
import design7 from '../../public/images/designs/design7.png'
import design8 from '../../public/images/designs/design8.png'
import design9 from '../../public/images/designs/design9.png'
import design10 from '../../public/images/designs/design10.png'
import design11 from '../../public/images/designs/design11.png'
import design12 from '../../public/images/designs/design12.png'
import design13 from '../../public/images/designs/design13.png'
import design14 from '../../public/images/designs/design14.png'
import design15 from '../../public/images/designs/design15.png'
import design16 from '../../public/images/designs/design16.png'
import design17 from '../../public/images/designs/design17.png'
import design18 from '../../public/images/designs/design18.png'
import design19 from '../../public/images/designs/design19.png'
import design20 from '../../public/images/designs/design20.png'
import design21 from '../../public/images/designs/design21.png'
import design22 from '../../public/images/designs/design22.png'
import design23 from '../../public/images/designs/design23.png'
import design24 from '../../public/images/designs/design24.png'
import design25 from '../../public/images/designs/design25.png'
import design26 from '../../public/images/designs/design26.png'
import design27 from '../../public/images/designs/design27.png'
import design28 from '../../public/images/designs/design28.png'
import design29 from '../../public/images/designs/design29.png'
import design30 from '../../public/images/designs/design30.png'
import design31 from '../../public/images/designs/design31.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);





const FeaturedArticle = ({img, title}) => {
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
        dark:border-light dark:bg-dark'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl'/>
            <div className='w-full inline-block  cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
            </div>
        </li>
    )
}

const designs = () => {
  return (
    <>
        <Head>
            <title> Michael | Design Page </title>
            <meta name='designs' content='designs by Michael Ojogbo'/>
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="The Signs" className='mb-16 !text-7xl lg:!text-5xl sm:!text-3xl xs:!text-4xl sm:mb-8 duration-500'/>
                <ul className='grid grid-cols-3 lg:grid-cols-2 gap-12 lg:gap-6 md:grid-cols-1 md:gap-y-16 items-center'>
                    <FeaturedArticle img={design12}/>
                    <FeaturedArticle img={design26}/>
                    <FeaturedArticle img={design18}/>
                    <FeaturedArticle img={design25}/>
                    <FeaturedArticle img={design31}/>
                    <FeaturedArticle img={design29}/>
                    <FeaturedArticle img={design30}/>
                    <FeaturedArticle img={design3}/>
                    <FeaturedArticle img={design2}/>
                    <FeaturedArticle img={design5}/>
                    <FeaturedArticle img={design20}/>
                    <FeaturedArticle img={design8}/>
                    <FeaturedArticle img={design10}/>
                    <FeaturedArticle img={design14}/>
                    <FeaturedArticle img={design15}/>
                    <FeaturedArticle img={design17}/>
                    <FeaturedArticle img={design7}/>
                    <FeaturedArticle img={design9}/>
                    <FeaturedArticle img={design6}/>
                    <FeaturedArticle img={design11}/>
                    <FeaturedArticle img={design21}/>
                    <FeaturedArticle img={design22}/>
                    <FeaturedArticle img={design16}/>
                    <FeaturedArticle img={design4}/>
                    <FeaturedArticle img={design13}/>
                    <FeaturedArticle img={design19}/>
                    <FeaturedArticle img={design1}/>
                    <FeaturedArticle img={design23}/>
                    <FeaturedArticle img={design24}/>
                    <FeaturedArticle img={design27}/>
                </ul>
               
            </Layout>
        </main>
    </>
  )
}

export default designs