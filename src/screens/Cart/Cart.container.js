import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {Header, ProductItemCard} from '../../components';
import {SCREEN} from '../../routes/Screen';
import styles from './Cart.styles';

const products = [
  {
    id: '1',
    name: 'Lace Sleeve Si',
    price: '117$',
    material: 'Material silk',
    color: 'Color RoyalBlue',
  },
  {
    id: '2',
    name: 'Lace Sleeve Si',
    price: '117$',
    material: 'Material silk',
    color: 'Color RoyalBlue',
  },
  {
    id: '3',
    name: 'Lace Sleeve Si',
    price: '117$',
    material: 'Material silk',
    color: 'Color RoyalBlue',
  },
  {
    id: '4',
    name: 'Lace Sleeve Si',
    price: '117$',
    material: 'Material silk',
    color: 'Color RoyalBlue',
  },
];

export default class ScreenContainer extends Component {
  openDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };

  renderItem = ({item}) => {
    return (
      <ProductItemCard
        isCartScreen
        onPress={() =>
          this.props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item})
        }
        onRemovePress={() => this.handleRemovePress(item)}
        data={item}
        onIncreasePress={() => this.handleIncreasePress(item)}
        onDecreasePress={() => this.handleDecreasePress(item)}
      />
    );
  };

  render() {
    const {cartList} = this.props;
    const productsPrice = cartList.map(
      (product) => product.quantity * product.price,
    );
    const totalPrice = cartList.length
      ? productsPrice.reduce(
          (previosValue, currentValue) => previosValue + currentValue,
        )
      : 0;

    return (
      <View style={{flex: 1}}>
        <Header onPress={this.openDrawer} />
        <View style={{flex: 1}}>
          <FlatList
            contentContainerStyle={{padding: 10}}
            data={cartList}
            renderItem={this.renderItem}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={this.handleSendOrder}>
          <Text style={{color: 'white'}}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
