// External Dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DebitCardNavigator from '../modules/debitCard/routes';
import { MainNavigation } from '../constants/route.const';

const RootStack = createStackNavigator();

const ApplicationContainer = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={MainNavigation.DebitCard}
            component={DebitCardNavigator}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationContainer;
