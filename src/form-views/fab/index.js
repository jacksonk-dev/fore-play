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

const FabButton = styled.button`
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ hollow, color }) => (hollow ? { primary: '#01579B', secondary: '#b71c1c' }[color] : '#fff')};
    background-color: ${({ hollow, color }) => (hollow ? 'inherit' : { primary: '#01579B', secondary: '#b71c1c' }[color])};
    border: 2px solid ${({ color }) => ({ primary: '#01579B', secondary: '#b71c1c' }[color])};
    opacity: ${({ disabled }) => (disabled ? '.2' : '1')};
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    outline: none;
`;

const Fab = ({
  children, label, showLabel, onClick, color, hollow, disabled,
}) => (
  <Wrapper>
    {label && showLabel
    && (
      <FabLabel>{label}</FabLabel>
    )}
    <FabButton
      color={color}
      hollow={hollow}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </FabButton>
  </Wrapper>
);

Fab.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  color: PropTypes.string,
  hollow: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Fab.defaultProps = {
  label: undefined,
  showLabel: false,
  color: 'primary',
  hollow: false,
  onClick: null,
  disabled: false,
};

export default Fab;
