import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  margin-right: 2rem;
  display: grid;
  flex-grow: 0;
  grid-template-columns: repeat(${({ numOfBoxes, boxesPerColumn }) => numOfBoxes / boxesPerColumn}, 4rem);
  grid-gap:  ${({ exploded }) => (exploded ? '3rem' : '0')};
  transition: all 1s ease;
  max-height: 50rem;
`;

const GridColumn = styled.div`
  display:  grid;
  grid-gap:  ${({ exploded }) => (exploded ? '3rem' : '0')};
  transition: all 1s ease;
`;

const PlayBox = styled.button`
  width: 4rem;
  height: 4rem;
  outline: none;
  border: 1px solid ${({ shading }) => (shading || '#E0E0E0')};
  border: ${({ hideUnshaded }) => (hideUnshaded && 'none')};
  background-color: ${({ shading }) => (shading || 'inherit')};
  transition: all .5s ease;
`;

const PlayGrid = ({
  boxes, boxesPerColumn, onBoxClick, exploded, hideUnshaded,
}) => {
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
      exploded={exploded}
    >
      {
        boxesInColumns.map((collection, collectionIndex) => {
          const reactKey = `play-column-${collectionIndex}`;
          return (
            <GridColumn
              key={reactKey}
              exploded={exploded}
            >
              {
                collection.map(({ key, shading }) => (
                  <PlayBox
                    key={key}
                    shading={shading}
                    exploded={exploded}
                    hideUnshaded={hideUnshaded}
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

PlayGrid.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
  })).isRequired,
  boxesPerColumn: PropTypes.number.isRequired,
  onBoxClick: PropTypes.func.isRequired,
  exploded: PropTypes.bool.isRequired,
  hideUnshaded: PropTypes.bool.isRequired,
};

export default PlayGrid;
