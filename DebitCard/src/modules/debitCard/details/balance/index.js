import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { DisplayAmount } from '../../../../components';

const Balance = () => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text style={styles.balanceHeader}>Available balance</Text>
      <DisplayAmount amount={3000} />
    </View>
  );
};

export default Balance;
