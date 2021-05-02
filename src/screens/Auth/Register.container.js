import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './Auth.styles';

export default class ScreenContainer extends Component {
  render() {
    const {name, email, password, rePassword} = this.state;

    return (
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.textInput}
          placeholder={'Enter your name'}
          value={name}
          onChangeText={(text) => this.setState({name: text})}
        />
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
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder={'Re-enter your password'}
          value={rePassword}
          onChangeText={(text) => this.setState({rePassword: text})}
        />
        <TouchableOpacity 
          style={styles.signinNowButton}
          onPress={this.onSignupPress}>
          <Text style={{color: 'white', fontSize: 16}}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
