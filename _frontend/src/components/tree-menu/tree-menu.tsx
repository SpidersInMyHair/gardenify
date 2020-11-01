import React, { useState, useEffect } from 'react';
import { usePrevious, useMeasure } from 'utils/hooks';
import { useSpring, animated } from 'react-spring';
import { Frame, Title, Content, Header, IconWrapper } from './tree-menu.style';

import * as icons from 'assets/icons/category-icons';
import { Input } from 'components/forms/input';
import { Button } from 'components/button/button';

const onSearch = (event: any) => {
  event.preventDefault();
  console.log('hello');
}

export const TreeMenu: React.FC = () => {
  return (
    <>
      <form onSubmit={onSearch}>
        {
          [
            { title: 'Name', name: 'name' },
            { title: 'Common Name', name: 'common_name' },
            { title: 'Genus', name: 'genus' },
            { title: 'Family', name: 'family' }
          ].map((category) => {
            return (
              <Input id={category.name} placeholder={category.title} />
            );
          })
        }
        <Button type="submit">Search</Button>
      </form>
    </>
  );
};
