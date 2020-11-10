import React from 'react';
import dynamic from 'next/dynamic';
import NavLink from 'components/nav-link/nav-link';
import { ABOUT_MENU_ITEM } from 'site-settings/site-navigation';
import { RightMenuBox } from './right-menu.style';
const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  avatar: string;
  isAuthenticated: boolean;
};

export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
}) => {
  return (
    <RightMenuBox>
      <NavLink
        className="menu-item"
        href={ABOUT_MENU_ITEM.href}
        label={ABOUT_MENU_ITEM.defaultMessage}
        intlId={ABOUT_MENU_ITEM.id}
      />

      <AuthMenu
        avatar={avatar}
        onJoin={onJoin}
        onLogout={onLogout}
        isAuthenticated={isAuthenticated}
      />
    </RightMenuBox>
  );
};
