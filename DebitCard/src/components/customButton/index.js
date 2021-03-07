import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import styles from './style';

const CustomButton = ({ text, isDisabled, onPress, containerStyle }) => {
    return (
        <TouchableOpacity
            disabled={isDisabled}
            style={[styles.button, containerStyle, isDisabled && styles.isDisabled]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity >
    );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    containerStyle: ViewPropTypes.style,
};

export default CustomButton;
