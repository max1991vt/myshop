import React, {Component} from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import {ProductItemCard} from '../../components';
import {Header, ProductHeader} from '../../components';
import styles from './ProductDetail.styles';
import {config} from '../../constants';

const {width} = Dimensions.get('window');

export default class ScreenContainer extends Component {
  renderItem = ({item}) => {
    return <ProductItemCard data={item} />;
  };

  render() {
    const {product} = this.props.route.params;
    const imageWidth = (width - 50) / 2;
    const imageHeight = (imageWidth / 361) * 451;

    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{flex: 1, padding: 10}}>
          <View style={styles.productListWrapper}>
            <ProductHeader
              onAddCartPress={() => this.addProductToCart(product)}
              onBackPress={() => this.props.navigation.goBack()}
            />
            <View style={styles.productDetailWrapper}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  style={{width: imageWidth, height: imageHeight}}
                  source={{
                    uri: `${config.PRODUCT_IMAGE_URL}` + product.images[0],
                  }}
                />
                <Image
                  style={{width: imageWidth, height: imageHeight}}
                  source={{
                    uri: `${config.PRODUCT_IMAGE_URL}` + product.images[1],
                  }}
                />
              </View>

              <View style={styles.productInformation}>
                <View style={{flexDirection: 'row', paddingLeft: 30}}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    {product.name.toUpperCase()}
                  </Text>
                  <Text style={styles.slashText}>/</Text>
                  <Text style={styles.priceText}>{product.price}$</Text>
                </View>
                <View style={{height: 1, backgroundColor: '#f7f7f7'}} />
                <Text style={{color: '#ababab'}}>{product.description}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: '#be2a77'}}>
                    Material {product.material}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#be2a77', marginRight: 10}}>
                      Color {product.color}
                    </Text>
                    <View
                      style={[
                        styles.productColor,
                        {backgroundColor: product.color.toLowerCase()},
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
