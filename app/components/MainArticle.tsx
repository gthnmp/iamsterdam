import Image, { StaticImageData } from 'next/image';
import Amsterdam from '@/public/assets/amsterdam.webp'
import SwanLake from '@/public/assets/SwanLake.webp'
import Art from '@/public/assets/Art.webp'
import Rijskmuseum from '@/public/assets/Rijskmuseum.webp'
import Nemomuseum from '@/public/assets/Sciencemuseum.webp'
import AmsterdamArea from '@/public/assets/AmsterdamArea.webp'
import { AiOutlineCheck, AiOutlineHeart } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs';
import {SlLocationPin} from 'react-icons/sl'
import Link from 'next/link';

interface StoryCardProps {
  title? : string;
  src? : string | StaticImageData;
  date: string;
}

interface NewsCardProps {
  title? : string;
  src : string | StaticImageData; 
  alt : string;
  date_start?: string;
  date_end? : string;
  location?: string;
}

const StoryCard = ({title, src, date}:StoryCardProps) => {
  return(
    <div className="w-[25rem] h-32 flex gap-4">
      <div className="h-20 w-auto aspect-square bg-red-700 rounded-md overflow-hidden">
        {
          src &&
          <Image src={src} alt="kontol" className='w-full h-full object-cover'/>
        }
      </div>
      <div className="flex flex-col">
        {date && <h2 className="text-sm">{date}</h2>}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </div>
  )
}

const NewsCard = ({title, src, alt, location}:NewsCardProps) => {
  
  const Date = ({day, month, year} : {day:string | number, month:string, year?:number}) => {
    return(
      <div className='flex flex-col items-center leading-tight'>
        <span className="font-bold">{day}</span>
        <span className="font-normal">{month}</span>
      </div>
    )
  }
  
  return(
    <div className="flex flex-col gap-2">
      <div className="aspect-video w-80 h-auto bg-red-700 rounded-md overflow-hidden relative">
        <button className="absolute bg-black right-0 p-4 bg-opacity-70 rounded-bl-md">
          <AiOutlineHeart className="fill-white w-full h-full scale-110 hover:scale-150 transition-all duration-300"/>
        </button>
        <div className="absolute bg-white left-2 bottom-2 px-4 py-2 rounded-tr-md rounded-bl-md font-semibold flex items-center gap-2">
          <Date day={"02"} month='Sep'/>
          -
          <Date day={"17"} month='Sep'/>
        </div>
        <Image draggable={false} src={src} alt={alt} width={1080} height={1920} className='w-full h-full object-cover' />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold">{title}</h1>
        <div className="font-normal text-neutral-400 flex gap-2 items-center text-sm">
          <SlLocationPin/> {location} 
        </div>
      </div>
    </div>
  )
}

const News = () => {
  return(
    <article className='w-screen h-full px-4'>
      <section className="flex flex-col gap-8 border-b-neutral-200 border-b-2 py-4">
        <h1 className="text-2xl font-bold">What&apos;s <span className="text-red-600">happening</span> this week</h1>
        <ul className="grid grid-flow-col gap-4">
          <li>
            <NewsCard title="The Swan Lake" src={SwanLake} alt="kontol" location='Royal Theatre Carre'/>
          </li>
          <li>
            <NewsCard title="New Era, New Art" src={Art} alt="kontol" location='Jewish Museum'/>
          </li>
          <li>
            <NewsCard title="Mission Masterpiece" src={Rijskmuseum} alt="kontol" location='Rijksmuseum'/>
          </li>
          <li>
            <NewsCard title="Summer Holidays at NEMO Science Museum" src={Nemomuseum} alt="kontol" location='NEMO Science Museum'/>
          </li>
        </ul>
      </section>
      
      <section className="flex flex-col items-center gap-16 border-b-neutral-200 border-b-2 py-8 h-full">
        <div className="flex flex-col items-center">
          <h2>More than just the Canal Ring</h2>
          <h1 className="text-2xl font-bold">Explore all corners of Amsterdam</h1>
        </div>
        <div>
          <ul className="grid grid-flow-col gap-4">
            <li className="flex flex-col gap-2">
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md">
                <Image src={Amsterdam} alt="Neighboorhood" height={1920} width={1280} className='w-full h-full object-cover'/>
              </div>
              <div className='w-full h-max flex justify-between items-center'>
                <span>
                  Neighboorhood
                </span>
                <BsArrowRight />
              </div>
            </li>
            <li className='flex flex-col gap-2'>
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md">
                <Image src={AmsterdamArea} alt="Neighboorhood" height={1920} width={1280} className='w-full h-full object-cover'/>
              </div>
              <div className='w-full h-max flex justify-between items-center'>
                <span>
                  Amsterdam Area
                </span>
                <BsArrowRight />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-4 border-b-neutral-200 border-b-2 py-4">
        <h1 className="text-2xl font-bold">Our Latest Stories</h1>
        <ul className="grid grid-cols-3 grid-rows-2 gap-4">
          <li>
            <StoryCard title="Weekend Guide (1 - 3 September)" src={Amsterdam} date="November 9th, 2022"/>
          </li>
          <li>
            <StoryCard title="Culture Guide (September 2023)" src={Rijskmuseum} date="January 9th, 2023"/>
          </li>
          <li>
            <StoryCard title="Music Guide (September 2023)" src={Art} date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Reasons to visit Amsterdam in Summer" src={Nemomuseum} date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Cultural tips for Amsterdam this Summer" src={SwanLake} date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Summer day trips from Amsterdam" src={AmsterdamArea} date="November 30th, 2022"/>
          </li>
        </ul>
      </section>
      
      <section className="flex flex-col gap-4 border-b-neutral-200 border-b-2 py-4">
        <h1 className="text-2xl font-bold">Discover Amsterdam with the I amsterdam City Card</h1>
        <ul className="grid grid-cols-3 grid-rows-1 gap-4">
          <li>
            <StoryCard title="Reasons to visit Amsterdam in Summer" src={Nemomuseum} date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Cultural tips for Amsterdam this Summer" src={SwanLake} date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Summer day trips from Amsterdam" src={AmsterdamArea} date="November 30th, 2022"/>
          </li>
        </ul>
      </section>
      
      <section className="flex border-b-neutral-200 border-b-2 p-16 gap-8 h-full relative pointer-events-none select-none">
        
        
        <div className="h-[30rem] w-auto aspect-square bg-red-600 rounded-md overflow-hidden">
          <Image src={Amsterdam} alt="Photography of the City of Amsterdam near the ring canal" width={1920} height={1080} className='w-full h-full object-cover'/>
        </div>
        
        <div className='font-medium text-neutral-600 flex flex-col justify-center gap-4'>
          <h2>Sharing the best of the Amsterdam Area </h2>
          <h1 className="text-5xl font-bold text-black"><span className="text-red-600">I am</span>sterdam on Instagram </h1>
          <ul>
            <li className="flex gap-2 items-center"><AiOutlineCheck/>Stay up-to-date on events and happenings </li>
            <li className="flex gap-2 items-center"><AiOutlineCheck/>Get inspiration for things to do and see</li>
            <li className="flex gap-2 items-center"><AiOutlineCheck/>Discover hidden gems</li>
          </ul>
          <div className="bg-blue-500 font-bold text-white rounded-3xl w-max grid place-items-center p-4 text-sm pointer-events-auto">
            <Link href={'https://www.instagram.com/iamsterdam/'} target='_blank'>Follow</Link>
          </div>
        </div>
      </section>
    </article>
  )
}
export default News
