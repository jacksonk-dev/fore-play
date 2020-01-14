import React from 'react';
import styled from 'styled-components'

import ColorPanel from '../components/color-panel';

const Wrapper = styled.div`
  background-color: #F5F5F5;
  height: 100vh;
`
function App() {
  return (
    <Wrapper>
      <ColorPanel />
    </Wrapper>
  );
}

export default App;
