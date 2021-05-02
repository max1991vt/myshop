import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import Icon from '../../images/icons';
import {config} from '../../constants';

const {width, height} = Dimensions.get('window');

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

export const ProductItemCard = ({
  data,
  isProductListScreen,
  isCartScreen,
  onPress,
  onRemovePress,
  onIncreasePress,
  onDecreasePress,
}) => {
  const imageWidth = width / 5;
  const imageHeight = (imageWidth / 361) * 452;

  return (
    <View
      style={[
        styles.container,
        isProductListScreen
          ? styles.productListContainer
          : styles.shadowContainer,
        isCartScreen && {paddingVertical: 0, paddingBottom: 0},
      ]}
      key={data.id}>
      <View style={{flex: 0.8}}>
        <Image
          source={{uri: `${config.PRODUCT_IMAGE_URL}` + data.images[0]}}
          style={{width: imageWidth, height: imageHeight}}
        />
      </View>
      <View style={styles.productInfo}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 18, color: '#a1a1a1'}}>
            {toTitleCase(data.name)}
          </Text>
          {isCartScreen && (
            <Icon.EvilIcons
              name={'close'}
              size={18}
              color={'#a1a1a1'}
              onPress={onRemovePress}
            />
          )}
        </View>
        <Text style={[{color: '#be2a77'}, isCartScreen && {fontSize: 18}]}>
          {data.price}$
        </Text>
        {isCartScreen ? null : <Text>Material {data.material}</Text>}
        <View style={styles.lastRow}>
          {isCartScreen && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon.MaterialIcons
                name={'add'}
                size={12}
                onPress={onIncreasePress}
              />
              <Text style={{marginLeft: 25, marginRight: 25}}>
                {data.quantity}
              </Text>
              <Icon.Entypo name={'minus'} size={12} onPress={onDecreasePress} />
            </View>
          )}
          {!isCartScreen && <Text>Color {data.color}</Text>}
          {!isCartScreen && (
            <View
              style={[
                styles.productColor,
                {backgroundColor: data.color.toLowerCase()},
              ]}
            />
          )}
          <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <Text style={{fontSize: 10, color: '#be2a77'}}>SHOW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  productListContainer: {
    borderTopWidth: 1,
    borderTopColor: '#f7f7f7',
    marginHorizontal: 10,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  productInfo: {
    flex: 2.2,
    justifyContent: 'space-around',
    height: height / 5,
  },
  lastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productColor: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
