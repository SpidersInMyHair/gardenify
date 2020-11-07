import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Box,
  Content,
  ContentRow,
  Description,
  SearchWrapper,
} from './banner.style';
import { Waypoint } from 'react-waypoint';
import { useAppDispatch } from 'contexts/app/app.provider';
import Search from 'features/search/search';

interface Props {
  intlTitleId: string;
  type?: string;
}

export const MobileBanner: React.FC<Props> = ({ intlTitleId }) => {
  const dispatch = useAppDispatch();
  const setSticky = useCallback(() => dispatch({ type: 'SET_STICKY' }), [
    dispatch,
  ]);
  const removeSticky = useCallback(() => dispatch({ type: 'REMOVE_STICKY' }), [
    dispatch,
  ]);
  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };
  return (
    <Box display={['flex', 'flex', 'none']}>
      <Content>
        <ContentRow>
          <Description>
            <FormattedMessage
              id={intlTitleId}
              defaultMessage="Set Your Title Through Language File"
              values={{ minute: 90 }}
            />
          </Description>
        </ContentRow>

        <SearchWrapper>
          <Search minimal={true} />
        </SearchWrapper>
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </Content>
    </Box>
  );
};
