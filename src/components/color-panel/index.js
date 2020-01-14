import React from 'react';
import ColorPicker from '../../form-views/color-picker';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #fff;
    padding: 1rem;
`

const ColorPanel = () => (
    <Wrapper>
        <ColorPicker 
            width="500px"
            circleSize={40}
        />
    </Wrapper>
)

export default ColorPanel