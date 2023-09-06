import { StaticImageData } from "next/image";
import NewsCard from "../NewsCard";

export interface EventContent {
  title: string;
  thumbailSrc: string | StaticImageData;
  alt: string;
  location: string;
}

export interface MediumSizedContent {
  headline: string;
  contents: EventContent[];
}

interface MediumSizedGroupProps {
  content: MediumSizedContent;
}

const MediumSizedGroup: React.FC<MediumSizedGroupProps> = ({ content }) => {
  return (
    <section className="flex flex-col gap-8 border-b-neutral-200 border-b-2 py-4">
      <h1 className="text-2xl font-bold">
        {content.headline}
        <span className="text-red-600"> happening</span> this week
      </h1>
      <ul className="grid grid-flow-col gap-4">
        {content.contents.map((event, index) => (
          <li key={index}>
            <NewsCard
              title={event.title}
              src={event.thumbailSrc}
              alt={event.alt}
              location={event.location}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediumSizedGroup
