import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    balanceHeader: {
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 24,
    },
    balance: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    currencyWrapper: {
        backgroundColor: '#01D167',
        paddingHorizontal: 13,
        paddingVertical: 3,
        borderRadius: 4
    },
    currency: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
});

export default styles;