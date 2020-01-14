import React from 'react';
import PropTypes from 'prop-types';
import {CirclePicker} from 'react-color'

const ColorPicker = ({width, circleSize}) => (
    <CirclePicker 
        width={width}
        circleSize={circleSize}
    />
)

ColorPicker.propTypes = {
    width: PropTypes.string,
    circleSize: PropTypes.number,
}

ColorPicker.defaultProps = {
    width: undefined,
    circleSize: undefined
}

export default ColorPicker;