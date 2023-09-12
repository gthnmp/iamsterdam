import Image, { StaticImageData } from "next/image";
import React from "react";

interface Headline {
  title : string[];
  noBreakLine? : boolean;
  paragraph : string;
  containerHeight?: string;
  heroImageSrc: string | StaticImageData
  heroImageAlt: string;
}

interface Props {
  content : Headline
}

const Header: React.FC<Props> = ({content}) => {
  return (
    <header className={`w-full ${content.containerHeight ? content.containerHeight : "h-screen"} flex font-sans gap-10 px-4 py-4 my-8 border-b-neutral-200 border-b-2`}>
      {
        content.heroImageSrc &&
        <div className="w-1/2 h-full relative">
          <div className="w-full h-3/4 bg-red-600 rounded-md"/>
          <div className="w-full h-full absolute top-0 p-8 flex flex-col gap-2 ">
            <Image src={content.heroImageSrc} alt={content.heroImageAlt} width={1280} height={1920} className="w-full h-full object-cover rounded-md"/>
            <p className="text-xs text-neutral-700">| {content.heroImageAlt} </p>
          </div>
        </div>
      }

      <div className='w-1/2 h-full flex justify-center px-20'>
        <div className="flex flex-col gap-8">
          <div className={`flex font-bold text-6xl ${content.noBreakLine ? "gap-3" : "flex-col gap-2"}`}>
            <h1 className="text-red-600">{content.title[0]}</h1>
            <h1 className="">{content.title[1]}</h1>
          </div>
          <p className="text-neutral-700 font-normal text-lg">
            {content.paragraph}
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header
