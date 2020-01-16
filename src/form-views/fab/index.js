import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FabLabel = styled.span`
  color: #fff;
  background-color: #000;
  margin-right: 1rem;
  padding: .8rem;
  border-radius: 40%;
`;

const FabWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ hollow, color }) => (hollow ? { primary: '#01579B', secondary: '#b71c1c' }[color] : '#fff')};
    background-color: ${({ hollow, color }) => (hollow ? 'inherit' : { primary: '#01579B', secondary: '#b71c1c' }[color])};
    border: 2px solid ${({ color }) => ({ primary: '#01579B', secondary: '#b71c1c' }[color])};
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Fab = ({
  children, label, showLabel, color, hollow,
}) => (
  <Wrapper>
    {label && showLabel
    && (
      <FabLabel>{label}</FabLabel>
    )}
    <FabWrapper color={color} hollow={hollow}>
      {children}
    </FabWrapper>
  </Wrapper>
);

Fab.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  color: PropTypes.string,
  hollow: PropTypes.bool,
};

Fab.defaultProps = {
  label: undefined,
  showLabel: false,
  color: 'primary',
  hollow: false,
};

export default Fab;
