import React from "react";
import Header from "./components/Header";
import MediumSizedGroup, { MediumSizedContent } from './components/ui/group/MediumSizedGroup';
import LargeSizedGroup, { LargeSizedGroupContent } from './components/ui/group/LargeSizedGroup';
import SmallSizedGroup, { SmallSizedGroupContent } from './components/ui/group/SmallSizedGroup';
import PromotionSection from './components/ui/PromotionSection';
import homeContents from './contents/home.json'; 

const typeToComponent = {
  Header: Header,
  PromotionSection: PromotionSection,
  SmallSizedGroup: SmallSizedGroup,
  MediumSizedGroup: MediumSizedGroup,
  LargeSizedGroup: LargeSizedGroup,
};

type PageSection = {
  name: string;
  type: keyof typeof typeToComponent; 
  content: typeof Header | typeof PromotionSection | SmallSizedGroupContent | MediumSizedContent | LargeSizedGroupContent;
}

const Home = () => {
  return (
    <div className='w-screen h-full overflow-x-hidden px-4'>
      {homeContents.map((section, index) => {
        const Component = typeToComponent[section.type as keyof typeof typeToComponent];
        if (!Component) {
          return null;
        }

        return (
          <Component
            key={index}
            content={section.content}
          />
        );
      })}
    </div>
  );
};

export default Home;
