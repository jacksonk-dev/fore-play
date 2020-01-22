import React, { useState } from 'react';
import styled from 'styled-components';

import ColorPanel from '../components/color-panel';
import PlayGround from '../components/play-ground';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [activeColor, setActiveColor] = useState('#009688');

  return (
    <Wrapper>
      <ColorPanel
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <PlayGround
        shadingColor={activeColor}
      />
    </Wrapper>
  );
}

export default App;
