import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ numOfBoxes, boxesPerColumn }) => numOfBoxes / boxesPerColumn}, 4rem)
`;

const PlayBox = styled.button`
  width: 4rem;
  height: 4rem;
  outline: none;
  border: 1px solid ${({ shading }) => (shading || '#E0E0E0')};
  background-color: ${({ shading }) => (shading || 'inherit')}
`;

const PlayGround = ({ numOfBoxes, boxesPerColumn, shadingColor }) => {
  const [shading, setShading] = useState({});
  const boxes = [];
  for (let i = 0; i < numOfBoxes; i += 1) {
    boxes.push(PlayBox);
  }
  return (
    <Wrapper
      numOfBoxes={numOfBoxes}
      boxesPerColumn={boxesPerColumn}
    >
      {
        boxes.map((Box, i) => {
          const key = `p-box-${i}`;
          return (
            <Box
              key={key}
              shading={shading[key]}
              onClick={() => {
                setShading({
                  ...shading,
                  [key]: shadingColor,
                });
              }}
            />
          );
        })
      }
    </Wrapper>
  );
};

PlayGround.propTypes = {
  numOfBoxes: PropTypes.number.isRequired,
  boxesPerColumn: PropTypes.number.isRequired,
  shadingColor: PropTypes.string,
};

PlayGround.defaultProps = {
  shadingColor: undefined,
};

export default PlayGround;
