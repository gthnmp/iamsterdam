import Image, {StaticImageData} from 'next/image'
interface StoryCardProps {
  title? : string;
  src? : string | StaticImageData;
  date: string;
}


const StoryCard = ({title, src, date}:StoryCardProps) => {
  return(
    <div className="w-[25rem] h-32 flex gap-4">
      <div className="h-20 w-auto aspect-square bg-red-700 rounded-md overflow-hidden">
        <Image src={src} alt="kontol" className='w-full h-full object-cover'/>
      </div>
      <div className="flex flex-col">
        {date && <h2 className="text-sm">{date}</h2>}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </div>
  )
}

export default StoryCard
