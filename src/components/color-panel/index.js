import React from 'react';
import styled from 'styled-components';
import ColorPicker from '../../form-views/color-picker';

const Wrapper = styled.div`
    padding: .8rem;
    border-radius: 0 0 0 1.5rem;
    background-color: #fff;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const ColorPanel = () => (
  <Wrapper>
    <ColorPicker
      width="450px"
      circleSize={35}
    />
  </Wrapper>
);

export default ColorPanel;
