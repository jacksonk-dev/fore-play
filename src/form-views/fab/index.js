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
  margin-right: .7rem;
  padding: .4rem;
  border-radius: 40%;
`;

const FabWrapper = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #004D40;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const Fab = ({ children, label, showLabel }) => (
  <Wrapper>
    {label && showLabel
    && (
      <FabLabel>{label}</FabLabel>
    )}
    <FabWrapper>
      {children}
    </FabWrapper>
  </Wrapper>
);

Fab.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
};

Fab.defaultProps = {
  label: undefined,
  showLabel: false,
};

export default Fab;
