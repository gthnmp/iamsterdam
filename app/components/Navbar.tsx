import { AiOutlineSearch, AiOutlineHeart  } from 'react-icons/ai'
import { SlArrowDown } from 'react-icons/sl'

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

const Navbar = () => {
  return (
    <>
      <Top/>
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
    </>
  );
};


export default Navbar 
