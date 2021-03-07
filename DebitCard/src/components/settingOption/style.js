import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
  },
  settingDescArea: {
    marginLeft: 12,
    flex: 1,
  },
  settingOption: {
    color: '#25345F',
    fontSize: 14
  },
  settinDesc: {
    color: '#222222',
    fontSize: 13,
    opacity: 0.4,
    marginTop: 3,
  },
  switch: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default styles;