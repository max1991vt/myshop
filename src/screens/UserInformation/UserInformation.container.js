import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {UserAreaHeader} from '../../components';
import styles from './UserInformation.styles';

export default class ScreenContainer extends Component {
  render() {
    const {name, phone, address} = this.state;

    return (
      <View style={{flex: 1}}>
        <UserAreaHeader
          title={'User Information'}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.userInformationWrapper}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(text) => this.setState({name: text})}
          />
          <TextInput
            style={styles.textInput}
            value={address}
            onChangeText={(text) => this.setState({address: text})}
          />
          <TextInput
            style={styles.textInput}
            value={phone}
            onChangeText={(text) => this.setState({phone: text})}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={this.onChangeUserInfoPress}>
            <Text style={{color: 'white'}}>CHANGE YOUR INFORMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
