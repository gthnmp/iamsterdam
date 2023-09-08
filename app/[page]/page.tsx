import React from "react";
import Header from "../components/Header";
import MediumSizedGroup from '../components/ui/group/MediumSizedGroup';
import LargeSizedGroup from '../components/ui/group/LargeSizedGroup';
import SmallSizedGroup from '../components/ui/group/SmallSizedGroup';
import PromotionSection from '../components/ui/PromotionSection';

const typeToComponent = {
  Header: Header,
  PromotionSection: PromotionSection,
  SmallSizedGroup: SmallSizedGroup,
  MediumSizedGroup: MediumSizedGroup,
  LargeSizedGroup: LargeSizedGroup,
};

export default async function Page({ params }: { params: { page: string } }) {
  const { page } = params;
  const content_data = await import(`../contents/${page}.json`);

  return (
    <div className='w-screen h-full overflow-x-hidden px-4'>
      {content_data.default.map((section) => {
        const Component = typeToComponent[section.type];
        if (!Component) {
          return null;
        }

        return (
          <Component
            key={section.name}
            content={section.content}
          />
        );
      })}
    </div>
  )
}
