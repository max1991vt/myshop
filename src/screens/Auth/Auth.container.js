import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './Auth.styles';
import { Header } from '../../components';
import { LoginScreen } from './Login';
import { RegisterScreen } from './Register';

export default class ScreenContainer extends Component {
    render() {
        const { isSignin } = this.state;
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1, backgroundColor: '#33bb79' }}>
                <Header 
                    loginHeaderShow
                    onPress={() => this.props.navigation.goBack()} />
                <View style={{ flex: 1, padding: 30, justifyContent: 'space-between', paddingTop: 10 }}>
                    {isSignin ? <LoginScreen navigation={navigation}/> : 
                        <RegisterScreen navigateToLogin={() => this.gotoLoginScreen()}/>}
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity 
                            onPress={this.onSigninPress}
                            style={styles.signinButton}>
                            <Text style={isSignin ? { color: '#33bb79' } : { color: '#dedede' }}>SIGN IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onSignupPress} 
                            style={styles.signupButton}>
                            <Text style={!isSignin ? { color: '#33bb79' } : { color: '#dedede' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}