import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorPicker from '../../form-views/color-picker';

const Wrapper = styled.div`
    padding: .8rem;
    border-radius: 0 0 0 1.5rem;
    background-color: #fff;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const ColorPanel = ({ activeColor, setActiveColor }) => (
  <Wrapper>
    <ColorPicker
      width="450px"
      circleSize={35}
      value={activeColor}
      onChange={setActiveColor}
    />
  </Wrapper>
);

ColorPanel.propTypes = {
  activeColor: PropTypes.string,
  setActiveColor: PropTypes.func.isRequired,
};

ColorPanel.defaultProps = {
  activeColor: undefined,
};

export default ColorPanel;
