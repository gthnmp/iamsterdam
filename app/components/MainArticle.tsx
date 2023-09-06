import Image from 'next/image';
import Amsterdam from '@/public/assets/amsterdam.webp'
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link';

interface StoryCardProps {
  title? : string;
  src? : string | undefined;
  date: string;
}

const StoryCard = ({title, src, date}:StoryCardProps) => {
  return(
    <div className="w-[25rem] h-32 flex gap-4">
      <div className="h-20 w-auto aspect-square bg-red-700 rounded-md">
        {
          src &&
          <img src={src}/>
        }
      </div>
      <div className="flex flex-col">
        {date && <h2 className="text-sm">{date}</h2>}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </div>
  )
}

const News = () => {
  return(
    <article className='w-screen h-full px-4'>
      <section className="flex flex-col gap-4 border-b-neutral-200 border-b-2 py-4">
        <h1 className="text-2xl font-bold">What&apos;s <span className="text-red-600">happening</span> this week</h1>
        <ul className="grid grid-flow-col gap-4">
          <li>
            <div className="aspect-[3/4] w-60 h-auto bg-red-700 rounded-md"/>
          </li>
          <li>
            <div className="aspect-[3/4] w-60 h-auto bg-red-700 rounded-md"/>
          </li>
          <li>
            <div className="aspect-[3/4] w-60 h-auto bg-red-700 rounded-md"/>
          </li>
          <li>
            <div className="aspect-[3/4] w-60 h-auto bg-red-700 rounded-md"/>
          </li>
          <li>
            <div className="aspect-[3/4] w-60 h-auto bg-red-700 rounded-md"/>
          </li>
        </ul>
      </section>
      
      <section className="flex flex-col items-center gap-16 border-b-neutral-200 border-b-2 py-4 h-full">
        <div className="flex flex-col items-center">
          <h2>More than just the Canal Ring</h2>
          <h1 className="text-2xl font-bold">Explore all corners of Amsterdam</h1>
        </div>
        <div>
          <ul className="grid grid-flow-col gap-4">
            <li>
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md"/>
            </li>
            <li>
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md"/>
            </li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col gap-4 border-b-neutral-200 border-b-2 py-4">
        <h1 className="text-2xl font-bold">Our Latest Stories</h1>
        <ul className="grid grid-cols-3 grid-rows-2 gap-4">
          <li>
            <StoryCard title="Weekend Guide (1 - 3 September)" date="November 9th, 2022"/>
          </li>
          <li>
            <StoryCard title="Culture Guide (September 2023)" date="January 9th, 2023"/>
          </li>
          <li>
            <StoryCard title="Music Guide (September 2023)" date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Reasons to visit Amsterdam in Summer" date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Cultural tips for Amsterdam this Summer" date="November 30th, 2022"/>
          </li>
          <li>
            <StoryCard title="Summer day trips from Amsterdam" date="November 30th, 2022"/>
          </li>
        </ul>
      </section>
      
      <section className="flex flex-col gap-4 border-b-neutral-200 border-b-2 py-4">
        <h1 className="text-2xl font-bold">Discover Amsterdam with the I amsterdam City Card</h1>
        <ul className="grid grid-cols-3 grid-rows-1 gap-4">
          <li>
            <StoryCard title="Explore All City Card activities"/>
          </li>
          <li>
            <StoryCard title="Canal cruise with the I amsterdam City Card" date="September 7th, 2022"/>
          </li>
          <li>
            <StoryCard title="Hidden gems to visit with you I amsterdam City Card" date="September 7th, 2022"/>
          </li>
        </ul>
      </section>
      
      <section className="flex flex-col items-center gap-16 border-b-neutral-200 border-b-2 py-4 h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Our Network</h1>
        </div>
        <div>
          <ul className="grid grid-flow-col gap-4">
            <li>
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md"/>
            </li>
            <li>
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md"/>
            </li>
          </ul>
        </div>
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
