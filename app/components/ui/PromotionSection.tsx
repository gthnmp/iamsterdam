import Image from 'next/image';
import Amsterdam from '@/public/assets/amsterdam.webp'
import { AiOutlineCheck } from 'react-icons/ai'
import Link from 'next/link';

interface PromotionSectionProps {
  title: string[];
  subtitle: string;
  list: string[];
  link: {
    href : string;
    text : string
  }
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface Props {
  content : PromotionSectionProps
}

const PromotionSection = ({content}:Props) => {
  return(
    <section className="flex gap-16 border-b-neutral-200 border-b-2 p-16 h-full relative pointer-events-none select-none">
      <div className="h-[30rem] w-auto aspect-square bg-neutral-300 rounded-md overflow-hidden">
        <Image src={content.image.src} alt={content.image.alt} width={content.image.width} height={content.image.height} className='w-full h-full object-cover'/>
      </div>
      <div className='font-medium text-neutral-600 grid place-items-center w-2/3'>
        <div className="flex flex-col justify-center gap-8">
        <h2>{content.subtitle}</h2>
        <h1 className="text-5xl font-bold text-black break-word"><span className="text-red-600">{content.title[0]}</span>{content.title[1]}</h1>
        <ul>
          {
            content.list.map((item,index) => ( 
              <li key={index} className="flex gap-2 items-center"><AiOutlineCheck/>{item}</li>
            ))
          }
        </ul>
        <div className="bg-blue-500 font-bold text-white rounded-3xl w-max grid place-items-center p-4 text-sm pointer-events-auto">
          <Link href={content.link.href} target='_blank'>{content.link.text}</Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionSection
