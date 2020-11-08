import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Modal } from '@redq/reuse-modal';
import { Banner } from 'components/banner/banner';
import { MobileBanner } from 'components/banner/mobile-banner';

import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import bannerImage from 'assets/images/banner/banner.png';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';
import { ModalProvider } from 'contexts/modal/modal.provider';
const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const Plants = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
import { getPlants } from 'utils/api/plant';

type Props = {
  deviceType?: {
    mobile: any;
    tablet: any;
    desktop: boolean;
  };
  data: any;
  query: string;
};

export async function getServerSideProps({ query }) {
  const queryString = Object.keys(query).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
  }).join('&');
  const data = await getPlants(queryString);
  return {
    props: {
      data,
      query: queryString
    },
  };
}

const HomePage: NextPage<Props> = ({ deviceType, data, query }) => {
  // const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });

  React.useEffect(() => {
    if (query) scroll();
  }, [query]);
  return (
    <>
      <SEO title="Gardenify" description="Search for a plant here..." />
      <ModalProvider>
        <Modal>
          <MobileBanner intlTitleId="home.title" />
          <Banner
            intlTitleId="home.title"
            intlDescriptionId="home.subtitle"
            imageUrl={bannerImage}
          />
          <MobileCarouselDropdown>
            <Sidebar />
          </MobileCarouselDropdown>
          <MainContentArea>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentSection>
              <div ref={targetRef}>
                <Plants
                  deviceType={deviceType}
                  data={data}
                />
              </div>
            </ContentSection>
          </MainContentArea>
        </Modal>
      </ModalProvider>
    </>
  );
};
export default HomePage;
