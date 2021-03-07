import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C365A',
  },
  settingContainer: {
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  desc: {
    marginLeft: 12,
    fontSize: 14,
    color: '#222222'
  },
  rowContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    backgroundColor: '#E5E5E5',
    height: 1,
    opacity: 0.5,
    marginVertical: 12
  },
  tooltip: {
    fontSize: 13,
    color: '#22222266',
  },
  amountContainer: {
    width: 114,
    paddingVertical: 12,
    backgroundColor: '#20cf661A',
    borderRadius: 4,
  },
  amount: {
    color: '#01D167',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;