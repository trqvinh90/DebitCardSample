import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Switch } from 'react-native';

const CustomSwitch = ({ isChecked, containerStyle }) =>
  <View style={containerStyle}>
    <Switch
      style={{ width: 34, height: 20 }}
      trackColor={{ false: "#EEEEEE", true: "#01D167" }}
      thumbColor="#FFFFFF"
      value={isChecked}
    />
  </View>;

CustomSwitch.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  containerStyle: ViewPropTypes.style,
};

export default CustomSwitch;