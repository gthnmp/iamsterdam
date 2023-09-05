import { AiFillFacebook, AiFillYoutube, AiFillTwitterCircle,  } from 'react-icons/ai'
import { BsTiktok, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return(
    <footer className="bg-black w-screen min-h-[30rem] flex flex-col gap-16 px-16 py-16 text-white">
      
      <div className="w-full h-full grid grid-cols-5 grid-rows-[8rem_1fr] gap-x-8">
        <div className="flex flex-col text-xl">
          <h1 className="font-bold">I amsterdam.</h1>
          <h2 className="font-normal text-sm text-neutral-400">Discover Amsterdam</h2>
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
            <li className='flex gap-2 items-center'> <AiFillFacebook/>Facebook </li>
            <li className='flex gap-2 items-center'> <AiFillTwitterCircle/> Twitter </li>
            <li className='flex gap-2 items-center'> <BsInstagram/> Instagram </li>
            <li className='flex gap-2 items-center'> <BsTiktok/> TikTok </li>
            <li className='flex gap-2 items-center'> <AiFillYoutube/> Youtube </li>
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

export default Footer
