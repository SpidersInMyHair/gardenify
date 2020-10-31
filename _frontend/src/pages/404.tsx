import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NotFoundPage = () => {
  return (
    <NotFound>
      <h1>404: Page Not Found</h1>
    </NotFound>
  );
};

export default NotFoundPage;
