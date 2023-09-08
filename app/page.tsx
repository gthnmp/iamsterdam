import React from "react";
import Header from "./components/Header";
import MediumSizedGroup from './components/ui/group/MediumSizedGroup';
import LargeSizedGroup from './components/ui/group/LargeSizedGroup';
import SmallSizedGroup from './components/ui/group/SmallSizedGroup';
import PromotionSection from './components/ui/InstagramSection';
import homeContents from './contents/home.json'; 

const typeToComponent = {
  Header: Header,
  PromotionSection: PromotionSection,
  SmallSizedGroup: SmallSizedGroup,
  MediumSizedGroup: MediumSizedGroup,
  LargeSizedGroup: LargeSizedGroup,
};

const Home = () => {
  return (
    <div className='w-screen h-full overflow-x-hidden px-4'>
      {homeContents.map((section, index) => {
        const Component = typeToComponent[section.type];
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
