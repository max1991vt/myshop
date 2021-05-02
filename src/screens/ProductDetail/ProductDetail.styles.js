import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  productListWrapper: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  productColor: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#be2a77',
  },
  productDetailWrapper: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },
  productInformation: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    paddingTop: 5
  },
  priceText: {
    fontSize: 17, 
    marginLeft: 5, 
    color: '#ababab'
  },
  slashText: {
    fontSize: 17, 
    marginLeft: 5, 
    color: '#8361c8'
  }
});

export default styles;
