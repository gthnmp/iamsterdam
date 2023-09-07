import MediumSizedGroup from './ui/group/MediumSizedGroup';
import LargeSizedGroup from './ui/group/LargeSizedGroup';
import SmallSizedGroup from './ui/group/SmallSizedGroup';
import InstagramSection from './ui/InstagramSection';

import homeContents from '@/app/contents/home.json'

const News = () => {
  const { happeningContent, amsterdamAreasContent, stories, discoverAmsterdam } = homeContents
  
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
