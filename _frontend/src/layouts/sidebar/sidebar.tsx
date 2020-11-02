import React from 'react';
import Sticky from 'react-stickynode';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import { useAppState } from 'contexts/app/app.provider';

import {
  CategoryWrapper,
  TreeWrapper,
  PopoverWrapper,
  SidebarWrapper,
} from './sidebar.style';

import { TreeMenu } from 'components/tree-menu/tree-menu';
import CategoryWalker from 'components/category-walker/category-walker';

const SidebarCategory: React.FC = () => {
  const isSidebarSticky = useAppState('isSidebarSticky');

  return (
    <CategoryWrapper>
      <PopoverWrapper>
        <CategoryWalker>

          <TreeMenu/>
        </CategoryWalker>
      </PopoverWrapper>

      <SidebarWrapper style={{ paddingTop: 45 }}>
        <Sticky enabled={isSidebarSticky} top={110}>

          <Scrollbar className='sidebar-scrollbar'>
            <TreeWrapper>
              <TreeMenu/>
            </TreeWrapper>
          </Scrollbar>
        </Sticky>
      </SidebarWrapper>
    </CategoryWrapper>
  );
};

export default SidebarCategory;
