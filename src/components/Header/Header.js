import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from '../../images/icons';

const {width, height} = Dimensions.get('window');

class Header extends Component {
  render() {
    const {
      loginHeaderShow,
      onPress,
      value,
      onChangeText,
      onFocus,
      onSubmitEditing,
    } = this.props;

    return (
      <View
        style={[
          styles.container,
          loginHeaderShow && {height: width * 0.23, backgroundColor: '#33bb79'},
        ]}>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            loginHeaderShow && {margin: 10},
          ]}>
          {loginHeaderShow ? (
            <Icon.MaterialIcons
              name={'arrow-back-ios'}
              size={24}
              color={'white'}
              onPress={onPress}
            />
          ) : (
            <Icon.Ionicons
              name={'md-menu-outline'}
              size={32}
              color={'white'}
              onPress={onPress}
            />
          )}
          <Text
            style={[
              {color: 'white'},
              loginHeaderShow ? {fontSize: 25} : {fontSize: 16},
            ]}>
            Wearing a Dress
          </Text>
          <Image
            source={require('../../images/img/ic_logo.png')}
            style={
              loginHeaderShow
                ? {height: 32, width: 32}
                : {height: 25, width: 25}
            }
          />
        </View>
        {!loginHeaderShow && (
          <TextInput
            placeholder={'What do you want to buy?'}
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onSubmitEditing={onSubmitEditing}
            // enablesReturnKeyAutomatically={true}
            // onEndEditing={onEndEditing}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: width * 0.2,
    backgroundColor: '#28b08a',
    padding: 10,
    paddingTop: 0,
    justifyContent: 'space-around',
  },
  textInput: {
    backgroundColor: 'white',
    height: height / 23,
    padding: 0,
    paddingLeft: 10,
  },
});

export {Header};
