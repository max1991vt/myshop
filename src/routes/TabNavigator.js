import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREEN} from './Screen';
import {ShopScreen, CartScreen, SearchScreen, ContactScreen} from '../screens';
import Icon from '../images/icons';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let focusedIcon = focused ? '#28b08a' : '#dad9d6';

    if (route.name === SCREEN.SHOP) {
      return (
        <Icon.MaterialCommunityIcons
          name={'home'}
          size={24}
          color={focusedIcon}
        />
      );
    } else if (route.name === SCREEN.CART) {
      return (
        <Icon.AntDesign name={'shoppingcart'} size={24} color={focusedIcon} />
      );
    } else if (route.name === SCREEN.SEARCH) {
      return <Icon.Ionicons name={'md-search'} size={24} color={focusedIcon} />;
    } else {
      return <Icon.AntDesign name={'user'} size={24} color={focusedIcon} />;
    }
  },
});

const tabBarOptions = {
  activeTintColor: '#28b08a',
  inactiveTintColor: 'gray',
  tabStyle: {
    backgroundColor: '#f6f6f6',
  },
};

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      {...props}
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}
      initialRouteName={SCREEN.SHOP}>
      <Tab.Screen
        name={SCREEN.SHOP}
        component={ShopScreen}
        options={{title: 'Shop'}}
      />
      <Tab.Screen
        name={SCREEN.CART}
        component={CartScreen}
        options={{title: 'Cart', tabBarBadge: props.cartList.length}}
      />
      <Tab.Screen
        name={SCREEN.SEARCH}
        component={SearchScreen}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name={SCREEN.CONTACT}
        component={ContactScreen}
        options={{title: 'Contact'}}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cart.cartList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavigator);
