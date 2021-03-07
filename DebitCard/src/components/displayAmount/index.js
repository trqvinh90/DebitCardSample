import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './style';
import { formatAmount } from '../../utils';

const DisplayAmount = ({ amount, textStyle, currency }) => {
    return (
        <View style={styles.rowContainer}>
            <View style={styles.currencyWrapper}>
                <Text style={styles.currency}>{currency}</Text>
            </View>
            {amount && <Text style={[styles.balance, textStyle]}>{formatAmount(amount)}</Text>}
        </View>
    );
};

DisplayAmount.propTypes = {
    textStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    amount: PropTypes.number,
    currency: PropTypes.string,
};

DisplayAmount.defaultProps = {
    currency: 'S$',
};

export default DisplayAmount;
