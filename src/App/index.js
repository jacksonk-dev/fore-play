import React from 'react';
import styled from 'styled-components';

import ColorPanel from '../components/color-panel';
import SideActionsPanel from '../components/side-actions-panel';
import PlayGround from '../components/play-ground';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-grow: 1;
`;

function App() {
  return (
    <Wrapper>
      <ColorPanel />
      <InnerWrapper>
        <PlayGround />
        <SideActionsPanel />
      </InnerWrapper>
    </Wrapper>
  );
}

export default App;
