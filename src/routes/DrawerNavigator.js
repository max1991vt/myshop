import React from 'react';
import TabNavigator from './TabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREEN} from './Screen';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      drawerType={'back'}
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        width: 200,
        borderRightWidth: 2,
        borderRightColor: 'white',
      }}>
      <Drawer.Screen name={SCREEN.TAB} component={TabNavigator} />
    </Drawer.Navigator>
  );
};
