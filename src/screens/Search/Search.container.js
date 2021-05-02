import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {Header, ProductItemCard} from '../../components';
import {SCREEN} from '../../routes/Screen';

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
        onPress={() =>
          this.props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item})
        }
        data={item}
      />
    );
  };

  render() {
    const {keySearch, products} = this.state;

    return (
      <View style={{flex: 1}}>
        <Header
          onPress={this.openDrawer}
          value={keySearch}
          onChangeText={this.onChangeTextSearch}
          onSubmitEditing={this.onSearch}
          // onEndEditing={this.onEnterPress}
        />
        <View style={{flex: 1}}>
          <FlatList
            contentContainerStyle={{padding: 10}}
            data={products}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
