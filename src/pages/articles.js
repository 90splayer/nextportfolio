import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/localhost.jpg'
import article2 from '../../public/images/articles/virtualcare.png'
import article3 from '../../public/images/articles/react.jpg'
import article4 from '../../public/images/articles/mongo.png'
import article5 from '../../public/images/articles/What is higher order component in React.jpg'
import article6 from '../../public/images/articles/What is Redux with easy explanation.png'
import authimg from '../../public/images/articles/Authentication.png'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg =({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display ="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display ="none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
       <h2 className='capitalize text-lg font-semibold hover:underline'>{title}</h2>
       <FramerImage
       style={{ x:x, y:y}}
       initial={{opacity: 0}}
       whileInView={{opacity:1, transition:{duration: 0.2}}}
        ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
       </Link>
    )
}

const Article = ({img, title, date, link}) => {
   return ( 
     <motion.li
     initial={{y:200}}
     whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
     viewport={{once:true}}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
     bg-light text-dark first:mt-0 border border-solid border-dark dark:border-light dark:bg-dark
     border-r-4 border-b-4 dark:text-light sm:flex-col'>
       <MovingImg title={title} img={img} link={link}/>
       <span className='text-primary text-sm font-semibold pl-4 dark:text-primaryDark 
       sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
     </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
        dark:border-light dark:bg-dark' >
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl'/>
            <Link href={link} target='_blank' 
            className='w-full inline-block  cursor-pointer overflow-hidden rounded-lg'
            >
            <FramerImage src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
            </Link>
            <Link href={link} target='_blank'>
            <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title> Michael | About Page </title>
            <meta name='description' content='about Michael Ojogbo'/>
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle
                    title="Authentication with Next.js 13 Using Next-Auth"
                    img={authimg}
                    time="7 min read"
                    summary="Authentication /ɔːˌθɛntɪˈkeɪʃn/ — The process or action of verifying the identity of a user or process."
                    link="https://medium.com/stackademic/authentication-with-next13-using-next-auth-cad70b40d8ec"
                    />
                    <FeaturedArticle
                    title="Proud to Build My First Full-Stack Web App - Virtual Care 🏥"
                    img={article2}
                    time="9 min read"
                    summary="Developing a full-stack web-application for a hospital which allows you create a 
                    profile as a patient, search for specific doctors and get virtual treatment anytime. "
                    link="https://www.linkedin.com/feed/update/urn:li:activity:7111983039571767296/"
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <Article 
                        title="What is the difference between React & React Native?"
                        img={article3}
                        date="October 10, 2023"
                        link="https://medium.com/@ojogbomichael/what-is-the-difference-between-react-react-native-0b5aa16437c1"
                    />
                    <Article 
                        title="DATABASE RELATIONS"
                        img={article4}
                        date="October 3, 2023"
                        link="https://medium.com/@ojogbomichael/database-relations-6420f407518a"
                    />
                    <Article 
                        title="How to Preview localhost Website on Mobile Phone"
                        img={article1}
                        date="September 20, 2023"
                        link="https://medium.com/@ojogbomichael/how-to-preview-localhost-website-on-mobile-phone-7c260815374"
                    />
                    <Article 
                        title="ALL THE HTML TAGS YOU NEED TO KNOW (grouped by their roles and use)"
                        img={article6}
                        date="October 10, 2023"
                        link="https://medium.com/@ojogbomichael/all-the-html-tags-you-need-to-know-grouped-by-their-roles-and-use-ebbd4888505d"
                    />
                    
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles