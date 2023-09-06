import Image from 'next/image';
import Amsterdam from '@/public/assets/amsterdam.webp'
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link';

const InstagramSection = () => {
  return(
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
  )
}

export default InstagramSection
