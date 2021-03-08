import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { observer } from 'mobx-react';

import Store from '../store';
import Balance from './balance';
import Details from './cardDetails';
import Settings from './settings';
import TotalSpent from './totalSpent';
import styles from './style';

const CardDetails = () => {
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    Store.getCardDetails();
  }, []);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={{ flex: 1 }}>
        <Balance />
        <View style={{ flex: 1 }}>
          <Details />
          <View style={styles.settingContainer}>
            <ScrollView style={{ flex: 1 }} alwaysBounceVertical showsVerticalScrollIndicator={false}>
              <>
                {Store.weeklyLimit > 0 &&
                  <TotalSpent
                    spent={Store.totalSpentLast7Days}
                    percentage={Store.spendingPercentage}
                    limit={Store.weeklyLimit}
                  />}
                <Settings />
              </>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default observer(CardDetails);
