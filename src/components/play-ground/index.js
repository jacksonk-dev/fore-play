import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PlayGrid from './play-grid';
import SideActionsPanel from './side-actions-panel';

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-grow: 1;
`;


const PlayGround = ({ shadingColor }) => {
  const [boxes, setBoxes] = useState((function () {
    const boxArray = [];
    for (let i = 0; i < 340; i += 1) {
      boxArray.push({ key: `p-box-${i}` });
    }

    return boxArray;
  })());
  const [boxesPerColumn] = useState(10);

  const addBoxes = () => {
    const newBoxBatch = [];
    for (let i = boxes.length; i < boxes.length + boxesPerColumn; i += 1) {
      newBoxBatch.push({ key: `p-box-${i}` });
    }
    setBoxes([...boxes, ...newBoxBatch]);
  };

  const removeBoxes = () => {
    if (boxes.length >= boxesPerColumn) {
      setBoxes(boxes.slice(0, boxes.length - 10));
    }
  };

  return (
    <InnerWrapper>
      <PlayGrid
        boxes={boxes}
        boxesPerColumn={boxesPerColumn}
        onBoxClick={(boxKey) => {
          setBoxes(boxes.map((boxObj) => {
            if (boxObj.key === boxKey) {
              return { ...boxObj, shading: shadingColor };
            }
            return boxObj;
          }));
        }}
      />
      <SideActionsPanel
        onClicks={{
          addBoxes,
          removeBoxes,
        }}
      />
    </InnerWrapper>
  );
};

PlayGround.propTypes = {
  shadingColor: PropTypes.string.isRequired,
};

export default PlayGround;
