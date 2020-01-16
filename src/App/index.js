import React, { useState } from 'react';
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
  const [activeColor, setActiveColor] = useState('#009688');
  const [numOfBoxes, setNumOfBoxes] = useState(340);
  const [boxesPerColumn] = useState(10);

  return (
    <Wrapper>
      <ColorPanel
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
      <InnerWrapper>
        <PlayGround
          numOfBoxes={numOfBoxes}
          shadingColor={activeColor}
          boxesPerColumn={boxesPerColumn}
        />
        <SideActionsPanel
          onClicks={{
            addBoxes: () => { setNumOfBoxes(numOfBoxes + boxesPerColumn); },
            removeBoxes: () => {
              if (numOfBoxes >= boxesPerColumn) {
                setNumOfBoxes(numOfBoxes - boxesPerColumn);
              }
            },
          }}
        />
      </InnerWrapper>
    </Wrapper>
  );
}

export default App;
