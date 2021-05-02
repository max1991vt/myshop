import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './Shop.styles';
import {Header} from '../../components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {CategoryItem} from './components';
import {SCREEN} from '../../routes/Screen';
import {config} from '../../constants';

const {width, height} = Dimensions.get('window');

const categories = [
  {
    id: '1',
    name: 'Maxi Dress',
    image: require('../../images/img/little.jpg'),
  },
  {
    id: '2',
    name: 'Maxi Dress',
    image: require('../../images/img/maxi.jpg'),
  },
  {
    id: '3',
    name: 'Maxi Dress',
    image: require('../../images/img/party.jpg'),
  },
];

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
      <CategoryItem
        data={item}
        onPress={() =>
          this.props.navigation.navigate(SCREEN.PRODUCT_LIST, {
            productCategory: item,
          })
        }
      />
    );
  };

  render() {
    const {activeSlide, categories, products, keySearch} = this.state;
    const imageWidth = width - 40;
    const imageHeight = (imageWidth / 933) * 465;

    return (
      <View style={{flex: 1}}>
        <Header
          onPress={this.openDrawer}
          value={keySearch}
          onChangeText={this.onChangeTextSearch}
          onFocus={this.gotoSearchScreen}
        />

        <ScrollView style={{flex: 1, backgroundColor: '#dcdbd9', padding: 10}}>
          <View style={styles.cardWrapper}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#a8a8a8', fontSize: 17}}>
                SPRING COLLECTION
              </Text>
            </View>
            <TouchableOpacity
              style={{flex: 4}}
              activeOpacity={0.8}
              onPress={() =>
                this.props.navigation.navigate(SCREEN.PRODUCT_LIST, {
                  productCategory: {
                    name: 'SPRING COLLECTION',
                    id: 'SPRING_COLLECTION',
                  },
                })
              }>
              <Image
                source={require('../../images/img/banner.jpg')}
                style={{width: imageWidth, height: imageHeight}}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.cardWrapper, {marginTop: 10}]}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#a8a8a8', fontSize: 17}}>
                LIST OF CATEGORY
              </Text>
            </View>
            <View style={{flex: 4}}>
              <Carousel
                data={categories}
                renderItem={this.renderItem}
                sliderWidth={imageWidth}
                itemWidth={imageWidth}
                // loop={true}
                enableSnap={true}
                onSnapToItem={(index) => this.setState({activeSlide: index})}
              />
              <Pagination
                dotsLength={categories.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.containerDotStyle}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: '#0d63ff',
                }}
                inactiveDotStyle={{
                  backgroundColor: 'gray',
                }}
                s
                inactiveDotOpacity={0.6}
                inactiveDotScale={1}
              />
            </View>
          </View>

          <View style={styles.productContainer}>
            <View style={{height: height / 15, justifyContent: 'center'}}>
              <Text style={{color: '#a8a8a8', fontSize: 17}}>TOP PRODUCT</Text>
            </View>
            <View style={styles.productWrapper}>
              {products.map((product) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={product.id}
                  style={styles.productCard}
                  onPress={() =>
                    this.props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {
                      product,
                      products,
                    })
                  }>
                  <Image
                    source={{
                      uri: `${config.PRODUCT_IMAGE_URL}` + product.images[0],
                    }}
                    style={styles.productImage}
                  />
                  <View style={{marginVertical: 10}}>
                    <Text style={{color: '#9b9b9b'}}>
                      {product.name.toUpperCase()}
                    </Text>
                    <Text style={{color: '#c53469'}}>{product.price}$</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
