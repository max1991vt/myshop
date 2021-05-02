import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from '../../images/icons';

export const ProductHeader = ({
  onAddCartPress,
  isProductList,
  onBackPress,
  data,
}) => {
  return (
    <View style={[styles.container, isProductList && {paddingVertical: 10}]}>
      <Icon.MaterialIcons
        name={'arrow-back-ios'}
        size={30}
        color={isProductList ? '#be2a77' : '#28b08a'}
        onPress={onBackPress}
      />
      {isProductList && (
        <Text style={{color: '#be2a77', fontSize: 20}}>{data.name}</Text>
      )}
      {isProductList ? (
        <View style={{width: 30}} />
      ) : (
        <Icon.AntDesign
          name={'shoppingcart'}
          size={30}
          color={'#28b08a'}
          onPress={onAddCartPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
