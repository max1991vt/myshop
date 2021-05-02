import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {ProductItemCard} from '../../components';
import {Header, ProductHeader} from '../../components';
import styles from './ProductList.styles';
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
  renderItem = ({item}) => {
    return (
      <ProductItemCard
        onPress={() =>
          this.props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item})
        }
        isProductListScreen
        data={item}
      />
    );
  };

  render() {
    const {productCategory} = this.props.route.params;
    const {isRefreshing} = this.state;
    const {products} = this.props;

    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 1, padding: 10}}>
          <View style={styles.productListWrapper}>
            <ProductHeader
              data={productCategory}
              isProductList
              onBackPress={() => this.props.navigation.goBack()}
            />
            <FlatList
              ref="flatList"
              onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
              data={products}
              renderItem={this.renderItem}
              refreshing={isRefreshing}
              // mỗi lần gọi refresh thì sẽ gọi hàm này --> vào setstate lại thành true, và gọi change qua 1 page mới
              onRefresh={this.onPullRefresh}
            />
          </View>
        </View>
      </View>
    );
  }
}
