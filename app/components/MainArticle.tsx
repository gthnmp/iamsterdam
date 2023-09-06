import Amsterdam from '@/public/assets/amsterdam.webp'
import SwanLake from '@/public/assets/SwanLake.webp'
import Art from '@/public/assets/Art.webp'
import Rijskmuseum from '@/public/assets/Rijskmuseum.webp'
import Nemomuseum from '@/public/assets/Sciencemuseum.webp'
import AmsterdamArea from '@/public/assets/AmsterdamArea.webp'
import MediumSizedGroup, { MediumSizedContent } from './ui/group/MediumSizedGroup';
import LargeSizedGroup, {LargeSizedGroupContent} from './ui/group/LargeSizedGroup';
import SmallSizedGroup, {SmallSizeGroupContent} from './ui/group/SmallSizedGroup';
import InstagramSection from './ui/InstagramSection';

const happeningContent: MediumSizedContent = {
  headline: "What's Happening This Week",
  contents: [
    {
      title: "The Swan Lake",
      thumbailSrc:SwanLake,
      alt: "Picture of a ballet show",
      location: "Royal Theatre Carre",
    },
    {
      title: "New Era, New Art",
      thumbailSrc: Art, 
      alt: "Picture of art exhibition",
      location: "Jewish Museum",
    },
    {
      title: "Mission Masterpiece",
      thumbailSrc: Rijskmuseum,
      alt: "Picture of museum exhibition",
      location: "Rijksmuseum",
    },
    {
      title: "Summer Holidays at NEMO Science Museum",
      thumbailSrc: Nemomuseum,
      alt: "Picture of science museum",
      location: "NEMO Science Museum",
    },
  ],
};

const amsterdamAreasContent: LargeSizedGroupContent = {
  headline: "Explore all corners of amsterdam",
  subHeadline:"More than just The Canal Ring",
  items: [
    {
      name : "Neighboorhood",
      thumbnail : Amsterdam,
      alt:"Picture of an Amsterdam neighboorhood"
    },
    {
      name : "Amsterdam Areas",
      thumbnail : AmsterdamArea,
      alt:"Picture of a random area in Amsterdam"
    }
  ]
}  

const stories: SmallSizeGroupContent = {
  title : "Our Latest Stories",
  items : [
    {
      title: "Weekend Guide (1 - 3 September)",
      src: Amsterdam,
      date: "November 9th, 2022",
    },
    {
      title: "Culture Guide (September 2023)",
      src: Rijskmuseum,
      date: "January 9th, 2023",
    },
    {
      title: "Music Guide (September 2023)",
      src: Art,
      date: "November 30th, 2022",
    },
    {
      title: "Reasons to visit Amsterdam in Summer",
      src: Nemomuseum,
      date: "November 30th, 2022",
    },
    {
      title: "Cultural tips for Amsterdam this Summer",
      src: SwanLake,
      date: "November 30th, 2022",
    },
    {
      title: "Summer day trips from Amsterdam",
      src: AmsterdamArea,
      date: "November 30th, 2022",
    },
  ]
}

const discoverAmsterdam : SmallSizeGroupContent = {
  title : "Discover Amsterdam with the I amsterdam City Card",
  items : [
    {
      title: "Reasons to visit Amsterdam in Summer",
      src: Amsterdam,
      date: "November 30th, 2022",
    },
    {
      title: "Cultural tips for Amsterdam this summer",
      src: Rijskmuseum,
      date: "November 30th, 2022",
    },
    {
      title: "Summer day trips from Amsterdam",
      src: Art,
      date: "November 30th, 2022",
    },
  ]
}

const News = () => {
  return(
    <article className='w-screen h-full px-4'>
      <MediumSizedGroup content={happeningContent}/>
      <LargeSizedGroup content={amsterdamAreasContent}/>
      <SmallSizedGroup content={stories} />
      <SmallSizedGroup content={discoverAmsterdam} gridSize={3} />
      <InstagramSection />
    </article>
  )
}
export default News
