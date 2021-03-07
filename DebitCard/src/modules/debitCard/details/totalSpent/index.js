import React from 'react';
import { View, Text } from 'react-native';
import { Bar } from 'react-native-progress';
import PropTypes from 'prop-types';
import styles from './style';
import { formatAmount } from '../../../../utils';

const TotalSpent = ({ spent, limit, percentage }) => {
    return (
        <View style={{ marginHorizontal: 24, marginTop: 32 }}>
            <View style={styles.rowContainer}>
                <Text style={[styles.text, { flex: 1 }]}>Debit card spending limit</Text>
                <Text style={styles.text}>
                    <Text style={{ color: '#01D167' }}>{`$${formatAmount(spent)}`}</Text>
                    <Text style={{ color: '#22222233' }}>{` | $${formatAmount(limit)}`}</Text>
                </Text>
            </View>
            <Bar
                progress={percentage}
                height={15}
                width={null}
                color="#01D167"
                borderRadius={15}
                unfilledColor="#DDDDDD"
                borderColor="#DDDDDD" />
        </View>
    );
};

TotalSpent.propTypes = {
    spent: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default TotalSpent;
