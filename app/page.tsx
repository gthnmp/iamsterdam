const content = {
  header : {
    "title":["Discover", "Amsterdam"],
    "paragraph":"I amsterdam is the official guide to everything Amsterdam. Find all the resources you need for the perfect trip, look up essential information on living, studying and working in the Amsterdam Area, and learn how to start a business in our beautiful city",
    "heroImage":"/hero.webp"
  }
}

export default function Home() {
  return (
    <>
      <div className='w-screen h-full overflow-x-hidden'>
        
        <div className="w-full h-10 bg-neutral-100 px-4 flex justify-between items-center text-xs">
          <ul className="flex gap-5 items-center h-full">
            <li className="font-bold">Discover Amsterdam</li>
            <li className="font-normal"><a href="/">Meetings and Conventions</a></li>
            <li className="font-normal"><a href="/">Business</a></li>
            <li className="font-normal"><a href="/">Live, Work, and Study</a></li>
          </ul>

          <button className="font-medium">English</button>
        </div>
        
        <nav className="sticky top-0 h-28 border-b-neutral-200 border-b-2 px-4 z-50 bg-white flex justify-between">
          <ul className="flex gap-8 items-center h-full text-md">
            <li className="font-bold">
              <div className="text-lg">
                <span className="text-red-500">I am</span>sterdam
              </div>
              <div>
                <p className="font-light text-xs text-neutral-600">Discover Amsterdam</p>
              </div>
            </li>
            
            <li className="font-semibold"><a href="/">{"What's on"}</a></li>
            <li className="font-semibold"><a href="/">See and do</a></li>
            <li className="font-semibold"><a href="/">Travel and stay</a></li>
            <li className="font-semibold"><a href="/">City Card and tickets</a></li>
          </ul>

          <ul className="flex gap-8 items-center h-full text-md">
            <li className="font-semibold bg-blue-600 text-white px-6 py-3 rounded-3xl"><a href="/">Order your City Card</a></li>
            <li className="font-semibold bg-neutral-100 rounded-full w-10 aspect-square h-auto grid place-items-center"><a href="/">F</a></li>
            <li className="font-semibold bg-neutral-100 rounded-full w-10 aspect-square h-auto grid place-items-center"><a href="/">S</a></li>
          </ul>
        </nav>
        
        <header className="w-full h-screen flex font-sans gap-10 px-4 py-4">
          <div className="w-1/2 h-full relative">
            <div className="w-full h-3/4 bg-red-600 rounded-md"></div>
            <div className="w-full h-full absolute top-0 p-8 flex flex-col gap-2">
              <img src={content.header.heroImage} className="w-full h-full object-cover"/>
              <p className="text-xs text-neutral-700">| Photography of Van Gogh Museum</p>
            </div>
          </div>
          
          <div className='w-1/2 h-full flex justify-center px-20'>
            <div className="flex flex-col gap-8">
              <div className='flex flex-col gap-2'>
                <h1 className="font-bold text-red-600 text-6xl">Discover</h1>
                <h1 className="font-bold text-6xl">Amsterdam</h1>
              </div>
              <p className="text-neutral-700">
                {content.header.paragraph}
              </p>
            </div>
          </div>
        </header>
        
      </div>
    </>
  )
}
