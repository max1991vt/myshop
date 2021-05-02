import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {SCREEN} from './Screen';
import {ProductListScreen, ProductDetailScreen, AuthScreen, OrderHistoryScreen, UserInformationScreen,} from '../screens';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.DRAWER} component={DrawerNavigator} />
      <Stack.Screen
        name={SCREEN.AUTH}
        component={AuthScreen}
        options={{
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name={SCREEN.ORDER_HISTORY}
        component={OrderHistoryScreen}
        options={{
          gestureDirection: 'horizontal-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name={SCREEN.USER_INFORMATION}
        component={UserInformationScreen}
        options={{
          gestureDirection: 'horizontal-inverted',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name={SCREEN.PRODUCT_LIST}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={SCREEN.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
