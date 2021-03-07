import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconLimit from './icon_limit.svg';
import { CustomButton, DisplayAmount } from '../../../components';
import { formatAmount } from '../../../utils';
import styles from './style';
import Store from '../store';

const WeeklyLimitation = () => {
  const { goBack } = useNavigation();
  const [limitAmount, setLimitAmount] = React.useState(Store.weeklyLimit);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingContainer}>
        <View style={styles.rowContainer}>
          <IconLimit />
          <Text style={styles.desc}>Set a weekly debit card spending limit</Text>
        </View>
        <View style={{ marginVertical: 12, flex: 1 }}>
          <DisplayAmount amount={limitAmount} textStyle={{ color: '#222222' }} />
          <View style={styles.separator} />
          <Text style={styles.tooltip}>Here weekly means the last 7 days - not the calendar week</Text>
          <View style={[styles.rowContainer, { justifyContent: 'space-between' }]}>
            {Store.defaultLimitRules.map((rule) =>
              <TouchableOpacity onPress={() => setLimitAmount(rule.value)} key={rule.id}>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>{`S$ ${formatAmount(rule.value)}`}</Text>
                </View>
              </TouchableOpacity>)}
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <CustomButton
          text="Save"
          isDisabled={!limitAmount}
          onPress={() => {
            Store.setWeeklyLimit(limitAmount);
            goBack();
          }}
          containerStyle={{ marginHorizontal: 33 }} />
      </View>
    </SafeAreaView>
  );
};

export default WeeklyLimitation;
