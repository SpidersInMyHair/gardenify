export const HOME_PAGE = '/';
export const PROFILE_PAGE = '/profile';
export const FAVOURITES = '/profile/favourites'
export const ABOUT_PAGE = '/about';
export const HELP_PAGE = '/help';
export const TERMS_AND_SERVICES_PAGE = '/terms';
export const PRIVACY_POLICY_PAGE = '/privacy';
// Mobile Drawer Menus

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const ABOUT_MENU_ITEM = {
  id: 'nav.about',
  defaultMessage: 'About',
  href: ABOUT_PAGE,
};
export const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE,
};
export const FAVOURITES_MENU_ITEM = {
  id: 'nav.profile_favourites',
  defaultMessage: 'Profile',
  href: FAVOURITES,
};
export const AUTHORIZED_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: TERMS_AND_SERVICES_PAGE,
  },
  {
    id: 'nav.privacy_policy',
    defaultMessage: 'Privacy Policy',
    href: PRIVACY_POLICY_PAGE,
  },
];

export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  ABOUT_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM, FAVOURITES_MENU_ITEM];

export const LANGUAGE_MENU = [
  {
    id: 'ar',
    defaultMessage: 'Arabic',
    icon: 'SAFlag',
  },
  {
    id: 'zh',
    defaultMessage: 'Chinese',
    icon: 'CNFlag',
  },
  {
    id: 'en',
    defaultMessage: 'English',
    icon: 'USFlag',
  },
  {
    id: 'de',
    defaultMessage: 'German',
    icon: 'DEFlag',
  },
  {
    id: 'he',
    defaultMessage: 'Hebrew',
    icon: 'ILFlag',
  },
  {
    id: 'es',
    defaultMessage: 'Spanish',
    icon: 'ESFlag',
  },
];
