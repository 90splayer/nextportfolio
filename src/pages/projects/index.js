import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../../public/images/projects/rentspace.png'
import medicare from '../../../public/images/projects/medicare.png'
import tiddix from '../../../public/images/projects/tiddix.png'
import card from '../../../public/images/projects/card.png'
import project2 from '../../../public/images/projects/quoteworld.png'
import project3 from '../../../public/images/projects/Saas.png'
import project4 from '../../../public/images/projects/wavecrib.jpeg'
import project5 from '../../../public/images/projects/sneakers.png'
import project6 from '../../../public/images/projects/krypt.jpeg'
import project7 from '../../../public/images/projects/Akala.jpeg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

export const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-between rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark
        dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank' 
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
            <FramerImage src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold hover:underline 
                underline-offset-2 dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'>
                <GithubIcon />
                </Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg border-[1px] 
                border-opacity-0 border-dark font-semibold hover:bg-light 
                hover:text-dark hover:border-opacity-100 dark:bg-light 
                dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light
                sm:px-4 sm:text-base
                '
                >
                Visit Project
                </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center 
        rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4 '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
             <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
            <FramerImage src={img} alt={title} className='w-full h-auto' 
                whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
            />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg
                md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                className='text-lg
                font-semibold underline md:text-base'
                >
                Visit 
                </Link>
                <Link href={github} target='_blank' className='w-8 md:w-6'>
                <GithubIcon />
                </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title> Michael | Projects Page </title>
            <meta name='projects' content='by Michael Ojogbo'/>
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                  <div className='col-span-12'>
                    <FeaturedProject
                        title="Rent Space"
                        summary="A feature-rich Creative hospitality App using Nextjs, Tailwind CSS, Google Auth, App Router, Leaflet Api and Cloudinary. 
It shows detail regarding almost all the creative spaces. You can easily get a space to create content or relax."
                        link="/projects/rentspace"
                        type="Featured Project"
                        img={project1}
                        github="https://github.com/90splayer/rent-space"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Medicare"
                        link="/projects/medicare"
                        type="Featured Project"
                        img={medicare}
                        github="https://github.com/90splayer/medicare-frontend"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Wavecrib"
                        link="/projects"
                        type="Featured Project"
                        img={project4}
                        github="https://github.com/90splayer/nba-admin"
                    />
                  </div>

                  <div className='col-span-12'>
                    <FeaturedProject
                        title="Tiddix"
                        summary="A Full Stack Web Application that helps creatives realise their dreams by connecting them with supporters, investors and funding throuh a metric-based data system."
                        link="/projects/tiddix"
                        type="Featured Project"
                        img={tiddix}
                        github="https://github.com/90splayer/rent-space"
                    />
                  </div>
                 
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Split vignette"
                        link="/projects/photion"
                        type="Featured Project"
                        img={card}
                        github="https://github.com/90splayer/photion"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Quoteworld"
                        link="/"
                        type="Featured Project"
                        img={project2}
                        github="https://github.com/90splayer/quoteworld"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Saas"
                        link="/projects/nba"
                        type="Featured Project"
                        img={project3}
                        github="https://github.com/90splayer/nba-admin"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Sneakers"
                        link="/"
                        type="Featured Project"
                        img={project5}
                        github="https://github.com/90splayer/Ecommerce"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Krypt"
                        link="/projects"
                        type="Featured Project"
                        img={project6}
                        github="https://github.com/90splayer/krypt"
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-12'>
                  <Project
                        title="Akala"
                        link="/"
                        type="Featured Project"
                        img={project7}
                        github="https://github.com/90splayer/akala"
                    />
                  </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects