import React from 'react';
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

const PAGE_TYPE = 'book'; //remove this when backend shit is working

const HomePage = ({ deviceType }) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
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
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={20}
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
