export default function Loading() {
  return (
    <header className={`w-screen h-screen flex font-sans gap-10 px-4 py-4 my-8 border-b-neutral-200 border-b-2`}>
      <div className="w-1/2 h-full relative">
        <div className="w-full h-3/4 bg-neutral-300 rounded-md skeleton"/>
      </div>
      <div className='w-1/2 h-full flex justify-center  px-20'>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full h-20 bg-neutral-300 rounded-md skeleton" style = {{animationDelay : "100ms"}} />
          <div className="w-full h-40 bg-neutral-300 rounded-md skeleton" style = {{animationDelay : "200ms"}} />
        </div>
      </div>
    </header>
  );
}
