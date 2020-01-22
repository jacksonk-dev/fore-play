import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ numOfBoxes, boxesPerColumn }) => numOfBoxes / boxesPerColumn}, 4rem)
`;

const GridColumn = styled.div`
  display: grid;
`;

const PlayBox = styled.button`
  width: 4rem;
  height: 4rem;
  outline: none;
  border: 1px solid ${({ shading }) => (shading || '#E0E0E0')};
  background-color: ${({ shading }) => (shading || 'inherit')}
`;

const PlayGround = ({ boxes, boxesPerColumn, onBoxClick }) => {
  const boxesInColumns = boxes.reduce((acc, entry) => {
    if (!acc[0]) {
      return [[entry]];
    }

    if (acc[acc.length - 1].length < boxesPerColumn) {
      const newAcc = [...acc];
      newAcc[acc.length - 1].push(entry);
      return newAcc;
    }

    return [...acc, [entry]];
  }, []);

  return (
    <Wrapper
      numOfBoxes={boxes.length}
      boxesPerColumn={boxesPerColumn}
    >
      {
        boxesInColumns.map((collection, collectionIndex) => {
          const reactKey = `play-column-${collectionIndex}`;
          return (
            <GridColumn key={reactKey}>
              {
                collection.map(({ key, shading }) => (
                  <PlayBox
                    key={key}
                    shading={shading}
                    onClick={() => { onBoxClick(key); }}
                  />
                ))
              }
            </GridColumn>
          );
        })
      }
    </Wrapper>
  );
};

PlayGround.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  })).isRequired,
  boxesPerColumn: PropTypes.number.isRequired,
  onBoxClick: PropTypes.func.isRequired,
};

export default PlayGround;
