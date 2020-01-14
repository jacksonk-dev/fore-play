import React from 'react';
import styled from 'styled-components';

import Fab from '../../form-views/fab';
import actions from './actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const FabWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SideActionsPanel = () => (
  <Wrapper>
    {
      actions.map(({ label, Icon }) => (
        <FabWrapper key={label}>
          <Fab
            label={label}
          >
            {Icon}
          </Fab>
        </FabWrapper>
      ))
    }
  </Wrapper>
);

export default SideActionsPanel;
