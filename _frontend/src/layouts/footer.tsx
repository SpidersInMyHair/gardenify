import React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import { FormattedMessage } from 'react-intl';
const Box = styled.div(
  css({
    fontFamily: 'body',
    fontSize: 'sm',
    fontWeight: 'regular',
    color: 'text.regular',
    px: 20,

    a: {
      color: 'primary.regular',
    },
  }),
  {
    marginTop: 50,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
);
const Footer = () => {
  return (
    <Box>
      <FormattedMessage
        id='siteFooter'
        defaultMessage='gardenify is a product of'
      />
      &nbsp;
      <a href='https://www.cse.unsw.edu.au/~cs4920/' target='_blank'>
        SENG 4920
      </a>
    </Box>
  );
};
export default Footer;
