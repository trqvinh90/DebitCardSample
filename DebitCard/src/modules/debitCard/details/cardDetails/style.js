import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    hideCardNumberArea: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 14,
        paddingBottom: 10,
        borderRadius: 6,
    },
    hideText: {
        marginLeft: 6,
        fontSize: 12,
        color: '#01D167',
        fontWeight: 'bold'
    },
    cardDetailsContainer: {
        height: 220,
        backgroundColor: '#01D167',
        marginTop: 32,
        borderRadius: 12,
    },
    cardName: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 0.53,
    },
    cardNumber: {
        fontSize: 14,
        color: '#FFFFFF',
        marginRight: 24,
        letterSpacing: 3.46,
    },
    cardCvv: {
        fontSize: 13,
        color: '#FFFFFF',
        letterSpacing: 1.56,
        marginRight: 32,
    },
});

export default styles;