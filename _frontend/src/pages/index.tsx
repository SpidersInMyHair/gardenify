import React, { useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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
const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
import { getAllPlants, getPlantsByKeyword } from 'utils/api/plant';

const PAGE_TYPE = 'book'; //remove this when backend shit is working

type Props = {
  deviceType?: {
    mobile: any;
    tablet: any;
    desktop: boolean;
  };
  data: any;
};

export async function getStaticProps() {
  const data = await getAllPlants();
  return {
    props: {
      data,
    },
  };
}

export async function getKeywordPlants(text) {
  const data = await getPlantsByKeyword(text);
  return data;
}

const HomePage: NextPage<Props> = ({ deviceType, data }) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  const [plants, setPlants] = useState(data);

  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }

    if (query.text) {
      getKeywordPlants(query.text).then((data) => setPlants(data))
    }
  }, [query.text, query.category]);
  return (
    <>
      <SEO title="Gardenify" description="Search our index of flora for all your gardening needs" />
      <ModalProvider>
        <Modal>
          <MobileBanner intlTitleId="home.title" type={PAGE_TYPE} />
          <Banner
            intlTitleId="home.title"
            intlDescriptionId="home.subtitle"
            imageUrl={bannerImage}
          />
          <MobileCarouselDropdown>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </MobileCarouselDropdown>
          <MainContentArea>
            <SidebarSection>
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </SidebarSection>
            <ContentSection>
              <div ref={targetRef}>
                <Products
                  deviceType={deviceType}
                  data={plants}
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
