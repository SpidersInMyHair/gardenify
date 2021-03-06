import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import HeaderWrapper from './header.style';
import LogoImage from 'assets/images/Gardenify.png';
import Logo from 'layouts/logo/logo';
import UserImage from 'assets/images/user.svg';
import { isCategoryPage } from '../is-home-page';
import Search from 'features/search/search';
import { useCookies } from 'react-cookie';
type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  const {
    authState: { isAuthenticated, user },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const { pathname, query } = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(['UID', 'SID']);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      removeCookie("UID");
      removeCookie("SID")
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };
  const showSearch =
    isCategoryPage(query.type) ||
    pathname === '/furniture-two' ||
    pathname === '/grocery-two'
  return (
    <HeaderWrapper className={className} id="layout-header">
      <Logo
        imageUrl={LogoImage}
        alt={'Shop Logo'}
      />      {showSearch && <Search minimal={true} className="headerSearch" />}
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={user && user.image_url ? user.image_url : UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
