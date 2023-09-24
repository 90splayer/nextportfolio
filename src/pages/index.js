import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png";
import featured from "../../public/images/projects/rentspace.png";
import tiddix from "../../public/images/projects/tiddix.png";
import medicare from "../../public/images/projects/medicare.png";
import saas from "../../public/images/projects/Saas.png";
import card from "../../public/images/projects/card.png";
import card2 from "../../public/images/projects/card2.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';
import { FeaturedProject } from './projects';


export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Ojogbo</title>
        <meta name="portfolio" content="Michael Ojogbo" /> 
      </Head>
      <TransitionEffect/>
      <main className="flex  items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='!pt-0 md:!pt-16 sm:!pt-4'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2'>
              <Image src={profilePic} alt='MichaelOjogbo' className='w-full h-auto rounded-full 
              lg:hidden md:inline-block md:w-full' 
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
               As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
               Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="https://read.cv/enwerim" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light 
                border-2 border-solid border-transparent hover:border-dark hover:text-dark
                dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light
                md:p-2 md:px-4 md:text-base dark:hover:border-white'
                >Resume <LinkArrow className={"!w-6 ml-1"}/>
                </Link>
                <Link href="mailto:ojogbomichael@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
          <div className='mt-32 gap-16 flex flex-col'>
                    <FeaturedProject
                        title="Rent Space"
                        summary="A Full Stack hospitality App that helps creatives locate their desired spaces using Nextjs, Tailwind CSS, Google Auth, App Router, Leaflet Api and Cloudinary. 
                        It shows detail regarding all the creative spaces so you can easily get a space to create content or relax."
                        link="/projects/rentspace"
                        type="Featured Project"
                        img={featured}
                        github="https://github.com/90splayer/rent-space"
                    />
                    <FeaturedProject
                        title="Medicare"
                        summary="A full MERN Stack Doctor Appointment Booking Website Using ReactJs, Node Js, MongoDB, and Stripe."
                        link="/projects/medicare"
                        type="Featured Project"
                        img={medicare}
                        github="https://github.com/90splayer/medicare-frontend"
                    />
                    <FeaturedProject
                        title="Tiddix"
                        summary="A Full Stack Web Application that helps creatives realise their dreams by connecting them with supporters, investors and funding throuh a metric-based data system."
                        link="/projects/tiddix"
                        type="Featured Project"
                        img={tiddix}
                        github="https://github.com/90splayer/rent-space"
                    />
                    <FeaturedProject
                        title="NBA"
                        summary="Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL."
                        link="/projects/nba"
                        type="Featured Project"
                        img={saas}
                        github="https://github.com/90splayer/nba-admin"
                    />
                    <FeaturedProject
                        title="Split Vignette"
                        summary="A split image animation using clip-path css value, animated with framer motion and Nextjs."
                        link="/projects/photion"
                        type="Featured Project"
                        img={card2}
                        github="https://github.com/90splayer/photion"
                    />
           </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='XC' className='w-full h-auto' />
        </div>
       
      </main>
    </>
  )
}
