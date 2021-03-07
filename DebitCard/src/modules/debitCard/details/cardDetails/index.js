import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

import styles from './style';
import IconEye from '../../../../assets/svg/icon_eye.svg';
import LogoFull from '../../../../assets/svg/logo_aspire_full.svg';
import LogoVisa from './logo_visa.svg';
import Store from '../../store';

const Details = () => {
  const { cardOwner, expireDate, cvv } = Store.cardDetails;

  return (
    <View style={{ marginHorizontal: 24 }}>
      <View style={styles.hideCardNumberArea}>
        <IconEye />
        <Text style={styles.hideText}>Hide card number</Text>
      </View>
      <View style={styles.cardDetailsContainer}>
        <View style={{ position: 'absolute', left: 24, right: 24, top: 69 }}>
          <Text style={styles.cardName}>{cardOwner}</Text>
          <View style={{ flexDirection: 'row', marginTop: 24 }}>
            {Store.cardNumbers.map((num, id) => <Text key={id} style={styles.cardNumber}>{num}</Text>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={styles.cardCvv}>{`Thru: ${expireDate}`}</Text>
            <Text style={styles.cardCvv}>{`CVV: ${cvv}`}</Text>
          </View>
        </View>
        <LogoFull style={{ position: 'absolute', right: 24, top: 24 }} />
        <LogoVisa style={{ position: 'absolute', right: 24, bottom: 24 }} />
      </View>
    </View>
  );
};

export default observer(Details);
