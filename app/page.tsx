import Header from "./components/Header";
import MediumSizedGroup from './components/ui/group/MediumSizedGroup';
import LargeSizedGroup from './components/ui/group/LargeSizedGroup';
import SmallSizedGroup from './components/ui/group/SmallSizedGroup';
import InstagramSection from './components/ui/InstagramSection';
import homeContents from './contents/home.json'

const Home = () => {
  const { headline, happeningContent, amsterdamAreasContent, stories, discoverAmsterdam } = homeContents
  return (
    <div className='w-screen h-full overflow-x-hidden'>
      <Header content={headline}/>
      <article className='w-screen h-full px-4'>
        <MediumSizedGroup content={happeningContent}/>
        <LargeSizedGroup content={amsterdamAreasContent}/>
        <SmallSizedGroup content={stories} />
        <SmallSizedGroup content={discoverAmsterdam} gridSize={3} />
        <InstagramSection />
      </article>
    </div>
  );
};

export default Home;
