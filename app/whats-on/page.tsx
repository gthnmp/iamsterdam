import Header from "../components/Header";
import MediumSizedGroup from '../components/ui/group/MediumSizedGroup';
import LargeSizedGroup from '../components/ui/group/LargeSizedGroup';
import SmallSizedGroup from '../components/ui/group/SmallSizedGroup';
import InstagramSection from '../components/ui/InstagramSection';
import homeContents from '../contents/whats-on.json'

const Home = () => {
  const { headline, editorialGuides, topPicks, articles, amsterdamEvent } = homeContents
  return (
    <div className='w-screen h-full overflow-x-hidden'>
      <Header content={headline}/>
      <article className='w-screen h-full px-4'>
        <MediumSizedGroup content={editorialGuides}/>
        <MediumSizedGroup content={topPicks}/>
        <SmallSizedGroup content={articles}/>
        <LargeSizedGroup content={amsterdamEvent} />
        <InstagramSection />
      </article>
    </div>
  );
};

export default Home;
