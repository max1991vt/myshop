import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Header} from '../../components';
import Icon from '../../images/icons';
import styles from './Contact.styles';

const {width} = Dimensions.get('window');

export default class ScreenContainer extends Component {
  openDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };

  render() {
    const imageWidth = width - 20;
    const imageHeight = (imageWidth / 1260) * 622 + 25;

    return (
      <View style={{flex: 1}}>
        <Header onPress={this.openDrawer} />
        <View style={{flex: 1, padding: 10}}>
          <View style={styles.mapView}>
            <Image
              style={{width: imageWidth, height: imageHeight}}
              source={require('../../images/img/map.png')}
            />
          </View>

          <View style={styles.contactWrapper}>
            <View style={styles.contactRow}>
              <Icon.MaterialIcons
                name={'location-on'}
                size={30}
                color={'#28b08a'}
              />
              <Text style={{color: '#be2a77'}}>357 Le Van Luong/ Dist 7</Text>
            </View>
            <View style={styles.contactRow}>
              <Icon.FontAwesome name={'phone'} size={30} color={'#28b08a'} />
              <Text style={{color: '#be2a77'}}>0829759979</Text>
            </View>
            <View style={styles.contactRow}>
              <Icon.MaterialCommunityIcons
                name={'telegram'}
                size={30}
                color={'#28b08a'}
              />
              <Text style={{color: '#be2a77'}}>Hoang Trong Huy</Text>
            </View>
            <View style={styles.contactLastRow}>
              <Icon.Foundation name={'mail'} size={30} color={'#28b08a'} />
              <Text style={{color: '#be2a77'}}>hoangtronghuy91@gmail.com</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
