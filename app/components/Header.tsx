const content = {
  header: {
    title: ["Discover", "Amsterdam"],
    paragraph: "I amsterdam is the official guide to everything Amsterdam. Find all the resources you need for the perfect trip, look up essential information on living, studying and working in the Amsterdam Area, and learn how to start a business in our beautiful city",
    heroImage: "/assets/hero.webp"
  }
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
export default Header
