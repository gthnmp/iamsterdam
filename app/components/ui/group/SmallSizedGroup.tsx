import React from "react";
import { StaticImageData } from "next/image";
import StoryCard from "../StoryCard"

type SmallSizeGroupItem = {
  title : string;
  src : string | StaticImageData
  date : string;
}

export interface SmallSizeGroupContent {
  title : string;
  items : SmallSizeGroupItem[]
}

interface Prop {
  content : SmallSizeGroupContent;
  gridSize? : number;
}

const SmallSizedGroup: React.FC<Prop> = ({ content, gridSize = 6 }) => {
  const numRows = Math.ceil(gridSize / 3)
  return(
    <section className="flex flex-col gap-4 border-b-neutral-200 border-b-2 py-4">
      <h1 className="text-2xl font-bold">{content.title}</h1>
      <ul className={`grid grid-cols-3 grid-rows-${numRows} gap-4`}>
        {content.items.map((item, index) => (
          <li key={index}>
            <StoryCard title={item.title} src={item.src} date={item.date}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SmallSizedGroup
