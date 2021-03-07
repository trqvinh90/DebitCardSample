// External Dependencies
import React from 'react';
import { View, TouchableWithoutFeedback, ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import CustomSwitch from '../customSwitch';

const SettingOption = ({ icon, option, desc, isSwitch, isChecked, onPress, containerStyle }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.settingRow, containerStyle]}>
        {icon}
        <View style={styles.settingDescArea}>
          <Text style={styles.settingOption}>{option}</Text>
          <Text style={styles.settinDesc}>{desc}</Text>
        </View>
        {isSwitch && <CustomSwitch isChecked={isChecked} containerStyle={styles.switch} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

// Prop Validation
SettingOption.propTypes = {
  icon: PropTypes.object.isRequired,
  option: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  isSwitch: PropTypes.bool,
  isChecked: PropTypes.bool,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
};

export default SettingOption;