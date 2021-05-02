import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './StackNavigator';

export const Navigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}