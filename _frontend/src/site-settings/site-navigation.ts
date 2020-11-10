export const HOME_PAGE = '/';
export const GROCERY_PAGE = '/grocery';
export const GROCERY_PAGE_TWO = '/grocery-two';
export const MAKEUP_PAGE = '/makeup';
export const CLOTHING_PAGE = '/clothing';
export const BAGS_PAGE = '/bags';
export const FURNITURE_PAGE = '/furniture';
export const FURNITURE_PAGE_TWO = '/furniture-two';
export const MEDICINE_PAGE = '/medicine';
export const RESTAURANT_PAGE = '/restaurant';
export const REQUEST_MEDICINE_PAGE = '/request-medicine';
export const PROFILE_PAGE = '/profile';
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
export const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE,
};
export const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE,
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
// category menu items for header navigation
export const CATEGORY_MENU_ITEMS = [
  {
    id: 'nav.grocery',
    href: GROCERY_PAGE,
    defaultMessage: 'Grocery',
    icon: 'FruitsVegetable',
    dynamic: true,
  },
  {
    id: 'nav.grocery-two',
    href: GROCERY_PAGE_TWO,
    defaultMessage: 'Grocery Two',
    icon: 'FruitsVegetable',
    dynamic: false,
  },
];

export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  ABOUT_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];

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
