import Image, { StaticImageData } from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai'
import {SlLocationPin} from 'react-icons/sl'

interface NewsCardProps {
  title? : string;
  src : string | StaticImageData; 
  alt : string;
  date_start?: string;
  date_end? : string;
  location?: string;
}

const Date = ({day, month} : {day:string | number, month:string}) => {
  return(
    <div className='flex flex-col items-center leading-tight'>
      <span className="font-bold">{day}</span>
      <span className="font-normal">{month}</span>
    </div>
  )
}

const NewsCard = ({title, src, alt, location}:NewsCardProps) => {
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

export default NewsCard
