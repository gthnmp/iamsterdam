import Image, { StaticImageData } from "next/image";
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl'

const content = {
  header: {
    title: ["Discover", "Amsterdam"],
    paragraph: "I amsterdam is the official guide to everything Amsterdam. Find all the resources you need for the perfect trip, look up essential information on living, studying and working in the Amsterdam Area, and learn how to start a business in our beautiful city",
    heroImage: "/hero.webp"
  }
}

interface StoryCardProps {
  title? : string;
  src? : string | StaticImageData | undefined;
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

const Header = () => {
  return (
    <header className="w-full h-screen flex font-sans gap-10 px-4 py-4 my-8 border-b-neutral-200 border-b-2 ">
      <div className="w-1/2 h-full relative">
        <div className="w-full h-3/4 bg-red-600 rounded-md"/>
        <div className="w-full h-full absolute top-0 p-8 flex flex-col gap-2 ">
          <img src={content.header.heroImage} className="w-full h-full object-cover rounded-md"/>
          <p className="text-xs text-neutral-700">| Photography of Van Gogh Museum</p>
        </div>
      </div>

      <div className='w-1/2 h-full flex justify-center px-20'>
        <div className="flex flex-col gap-8">
          <div className='flex flex-col gap-2'>
            <h1 className="font-bold text-red-600 text-6xl">{content.header.title[0]}</h1>
            <h1 className="font-bold text-6xl">{content.header.title[1]}</h1>
          </div>
          <p className="text-neutral-700">
            {content.header.paragraph}
          </p>
        </div>
      </div>
    </header>
  );
};

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
      
      <section className="flex border-b-neutral-200 border-b-2 px-2 py-24 h-full relative">
        <div className="h-[25rem] w-screen bg-neutral-100 flex">
          <div className="w-1/2 h-full pl-6">
            <div className="bg-red-500 h-full w-auto aspect-square"></div>
          </div>
          <div className="w-1/2 h-full flex justify-center flex-col">
            <h2>Sharing the best of the Amsterdam Area</h2>
            <h1 className='font-bold text-5xl'><span className="text-red-600">I am</span>sterdam on Instagram</h1>
          </div>
        </div>
      </section>
    </article>
  )
}

const Navbar = () => {
  return (
    <nav className="sticky h-28 border-b-neutral-200 border-b-2 px-4 bg-white flex justify-between w-screen z-50">
      <ul className="flex gap-8 items-center h-full text-md">
        <li className="font-bold">
          <div className="text-lg">
            <span className="text-red-500">I am</span>sterdam
          </div>
          <div>
            <p className="font-light text-xs text-neutral-600">Discover Amsterdam</p>
          </div>
        </li>
        
        <li className="font-semibold flex gap-2 items-center"><a href="/">What's on</a><SlArrowDown/></li>
        <li className="font-semibold flex gap-2 items-center"><a href="/">See and do</a><SlArrowDown/></li>
        <li className="font-semibold flex gap-2 items-center"><a href="/">Travel and stay</a><SlArrowDown/></li>
        <li className="font-semibold flex gap-2 items-center"><a href="/">City Card and tickets</a><SlArrowDown/></li>
      </ul>

      <ul className="flex gap-8 items-center h-full text-md">
        <li className="font-semibold bg-blue-600 text-white px-6 py-3 rounded-3xl"><a href="/">Order your City Card</a></li>
        <li className="font-semibold bg-neutral-100 rounded-full w-10 aspect-square h-auto grid place-items-center">
          <a href="/">
            <AiOutlineHeart />
          </a>
        </li>
        <li className="font-semibold bg-neutral-100 rounded-full w-10 aspect-square h-auto grid place-items-center">
          <a href="/">
            <AiOutlineSearch />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Top = () => {
  return (
    <div className="w-full h-10 bg-neutral-100 px-4 flex justify-between items-center text-xs">
      <ul className="flex gap-5 items-center h-full font-normal">
        <li className="font-bold">Discover Amsterdam</li>
        <li><a href="/">Meetings and Conventions</a></li>
        <li><a href="/">Business</a></li>
        <li><a href="/">Live, Work, and Study</a></li>
      </ul>

      <button className="font-medium">English</button>
    </div>
  );
};

const Footer = () => {
  return(
    <footer className="bg-black w-screen min-h-[30rem] flex flex-col gap-16 px-4 py-16 text-white">
      
      <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-x-8">
        <div className="flex flex-col text-xl">
          <h1 className="font-bold">I amsterdam.</h1>
          <h2 className="font-medium text-neutral-400">Discover Amsterdam</h2>
        </div>
        <div>
          <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
            <a>Discover Amsterdam</a>
          </div>
        </div>
        <div>
          <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
            <a>Meetings and Conventions</a>
          </div>
        </div>
        <div>
          <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
            <a>Business</a>
          </div>
        </div>
        <div>
          <div className="border-[1px] border-white w-full h-max py-3 grid place-items-center rounded-md">
            <a>Live, Work, and Study</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold"> Follow us </h1>
          <ul className="flex flex-col gap-2">
            <li> Facebook </li>
            <li> Twitter </li>
            <li> Instagram </li>
            <li> TikTok </li>
            <li> Youtube </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold"> About us </h1>
          <ul className="flex flex-col gap-2">
            <li> Amsterdam & Partners </li>
            <li> Partership and Advertising </li>
            <li> Vacancies and Internship </li>
            <li> Contact Us </li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold"> Our Products </h1>
          <ul className="flex flex-col gap-2">
            <li> I amsterdam City Card </li>
            <li> Canal Cruise Ticket </li>
            <li> Products and Services </li>
            <li> I amsterdam Store </li>
            <li> I amsterdam Webshop </li>
          </ul>
        </div>
      </div>
      <ul className="flex gap-8 text-neutral-400 text-sm">
        <li>© 2023 I amsterdam</li>
        <li>Cookie Declaration</li>
        <li>Privacy Statement</li>
        <li>Disclaimer</li>
      </ul>
      
    </footer>
  )
}
const Home = () => {
  return (
    <div className='w-screen h-full overflow-x-hidden'>
      <Top />
      <Navbar />
      <Header />
      <News />
      <Footer/>
    </div>
  );
};

export default Home;
