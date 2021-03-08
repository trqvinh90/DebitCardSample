import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CardDetails from './details';
import WeeklyLimitation from './weeklyLimit';
import { DebitCardNavigation } from '../../constants/route.const';
import Logo from '../../assets/svg/logo_aspire.svg';

const DebitCardStack = createStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#0C365A',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTintColor: '#FFFFFF',
  headerRight: () => <Logo style={{ marginRight: 25 }} width={25} height={25} />,
  headerTitleStyle: { fontSize: 24 },
  headerBackTitleVisible: false,
  headerTitleAlign: 'left',
  headerLeftContainerStyle:{marginLeft: Platform.OS === 'ios' ? 10 : 0}
}

const DebitCardNavigator = () => {
  return (
    <DebitCardStack.Navigator>
      <DebitCardStack.Screen
        name={DebitCardNavigation.Details}
        component={CardDetails}
        options={{
          ...headerOptions,
          title: 'Debit Card',
        }}
      />
      <DebitCardStack.Screen
        name={DebitCardNavigation.WeeklyLimit}
        component={WeeklyLimitation}
        options={{
          ...headerOptions,
          title: 'Spending limit',
        }}
      />
    </DebitCardStack.Navigator>
  );
};

export default DebitCardNavigator;
