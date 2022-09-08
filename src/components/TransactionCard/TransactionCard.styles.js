import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: '#c0c0c0',
    marginBottom: 2,
    marginTop: 2,
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4682b4',
    marginLeft: 5,
  },
  priceContainer: {
    justifyContent: 'flex-end',
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 13,
  },
});
