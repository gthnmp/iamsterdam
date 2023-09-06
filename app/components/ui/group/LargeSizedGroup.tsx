import React from 'react';
import Image, { StaticImageData } from 'next/image'; 
import { BsArrowRight } from 'react-icons/bs'; 

type LargeSizeItem = {
  name: string;
  thumbnail: string | StaticImageData;
  alt: string;
};

export interface LargeSizedGroupContent {
  headline: string;
  subHeadline: string;
  items: LargeSizeItem[];
};

interface Props {
  content : LargeSizedGroupContent
}

const LargeSizedGroup: React.FC<Props> = ({ content }) => {
  return (
    <section className="flex flex-col items-center gap-16 border-b-neutral-200 border-b-2 py-8 h-full">
      <div className="flex flex-col items-center">
        <h2>{content.subHeadline}</h2>
        <h1 className="text-2xl font-bold">{content.headline}</h1>
      </div>
      <div>
        <ul className="grid grid-flow-col gap-4">
          {content.items.map((item, index) => (
            <li key={index} className="flex flex-col gap-2">
              <div className="aspect-square w-96 h-auto bg-red-700 rounded-md">
                <Image src={item.thumbnail} alt={item.alt} height={1920} width={1280} className='w-full h-full object-cover'/>
              </div>
              <div className='w-full h-max flex justify-between items-center'>
                <span>
                  {item.name}
                </span>
                <BsArrowRight />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LargeSizedGroup;
