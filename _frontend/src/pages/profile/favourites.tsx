import React, { useContext, useState, useEffect } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic'
import { Modal } from '@redq/reuse-modal';
import {
  HeadingSection,
  Title,
} from 'features/user-profile/settings/settings.style';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { SEO } from 'components/seo';
import Footer from 'layouts/footer';
import { toast } from 'react-toastify';
import { AuthContext } from 'contexts/auth/auth.context';
import { getFavourites } from 'utils/api/user';
const Plants = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  user: any;
};

const FavouritesPage: NextPage<Props> = ({ deviceType }) => {
  const [ favourites, setFavourites ] = useState(undefined);
  const {
    authState: { isLoading, isAuthenticated }
  } = useContext<any>(AuthContext);

  if (!isLoading && !isAuthenticated) {
    toast.error("User not logged in")
    window.location.href = "/"
    return null
  }

  useEffect(() => {
    getFavourites().then((favs) => setFavourites(favs))
  }, [])
  
  return (
    <>
      <SEO title="Favourites - gardenify" description="Favourites Details" />
      <Modal>
        <PageWrapper>
          <SidebarSection>
            <Sidebar />
          </SidebarSection>
          <ContentBox>
            <HeadingSection>
              <Title>
                Favourites
              </Title>
            </HeadingSection>
              <Plants
                deviceType={deviceType}
                data={favourites}
              />
          </ContentBox>

          <Footer />
        </PageWrapper>
      </Modal>
    </>
  );
};

export default dynamic(() => Promise.resolve(FavouritesPage), {ssr: false});
