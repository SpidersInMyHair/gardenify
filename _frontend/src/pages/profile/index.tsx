import React, { useContext } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic'
import { Modal } from '@redq/reuse-modal';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'features/user-profile/settings/settings';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { SEO } from 'components/seo';
import Footer from 'layouts/footer';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { AuthContext } from 'contexts/auth/auth.context';
import Loader from 'components/loader/loader'; 

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  user: any;
};

const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  
  const {
    authState: { isLoading, isAuthenticated, user }
  } = useContext<any>(AuthContext);

  const router = useRouter();
  if (!isLoading && !isAuthenticated) {
    toast.error("User not logged in")
    router.push("/");
    return null
  }

  if (isLoading) return <Loader />
  
  return (
    <>
      <SEO title="Profile - gardenify" description="Profile Details" />
      <ProfileProvider initData={user}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <SettingsContent deviceType={deviceType} />
            </ContentBox>

            <Footer />
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProfilePage), {ssr: false});
