import React from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

const ColorPicker = ({
  width, circleSize, value, onChange,
}) => (
  <CirclePicker
    color={value}
    onChange={(color) => {
      onChange(color.hex);
    }}
    width={width}
    circleSize={circleSize}
  />
);

ColorPicker.propTypes = {
  width: PropTypes.string,
  circleSize: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ColorPicker.defaultProps = {
  value: undefined,
  width: undefined,
  circleSize: undefined,
};

export default ColorPicker;
