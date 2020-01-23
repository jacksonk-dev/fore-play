import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Fab from '../../../form-views/fab';
import actions from './actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const FabWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SideActionsPanel = ({ onClicks, activeValues }) => (
  <Wrapper>
    {
      actions.map(({
        label, active, onClick, Icon,
      }) => (
        <FabWrapper key={label}>
          <Fab
            label={label}
            disabled={!activeValues[active]}
            onClick={onClicks[onClick]}
          >
            {Icon}
          </Fab>
        </FabWrapper>
      ))
    }
  </Wrapper>
);

SideActionsPanel.propTypes = {
  onClicks: PropTypes.shape({}).isRequired,
  activeValues: PropTypes.shape({}).isRequired,

};

export default SideActionsPanel;
