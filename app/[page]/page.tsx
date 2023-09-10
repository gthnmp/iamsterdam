import React from "react";
import Header from "../components/Header";
import MediumSizedGroup, { MediumSizedContent } from '../components/ui/group/MediumSizedGroup';
import LargeSizedGroup, { LargeSizedGroupContent } from '../components/ui/group/LargeSizedGroup';
import SmallSizedGroup, { SmallSizedGroupContent } from '../components/ui/group/SmallSizedGroup';
import PromotionSection from '../components/ui/PromotionSection';

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

export default async function Page({ params }: { params: { page: string } }) {
  const { page } = params;
  const content_data = await import(`../contents/${page}.json`);

  return (
    <div className='w-screen h-full overflow-x-hidden px-4'>
      {content_data.default.map((section: PageSection) => {
        const Component = typeToComponent[section.type];

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
