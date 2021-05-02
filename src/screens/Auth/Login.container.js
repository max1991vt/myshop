import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './Auth.styles';

export default class ScreenContainer extends Component {
  render() {
    const {email, password} = this.state;

    return (
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter your email'}
          value={email}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder={'Enter your password'}
          value={password}
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity
          onPress={this.onSigninPress}
          style={styles.signinNowButton}
          activeOpacity={0.8}>
          <Text style={{color: 'white', fontSize: 16}}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
