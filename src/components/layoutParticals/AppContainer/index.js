import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';

class AppContainer extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} backgroundColor={'red'}>
                <SafeAreaView>
                    
                </SafeAreaView>
            </KeyboardAvoidingView>
        );
    }
}

export { AppContainer };