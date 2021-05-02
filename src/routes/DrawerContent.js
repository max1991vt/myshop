import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {SCREEN} from './Screen';
import {connect} from 'react-redux';
import {AuthStorage} from '../utils';
import {authActions} from '../store/actions';

const LogoutJSX = ({
  onPressGotoOrderHistory,
  onPressGotoUserInformationScreen,
  data,
  onPress,
}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={{color: 'white', fontSize: 15}}>{data.name}</Text>
      <View style={{padding: 10}}>
        <TouchableOpacity
          onPress={onPressGotoOrderHistory}
          style={styles.buttonWrapper}>
          <Text style={{color: '#28b08a', fontSize: 15}}>Order History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressGotoUserInformationScreen}
          style={styles.buttonWrapper}>
          <Text style={{color: '#28b08a', fontSize: 15}}>Change Info</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={onPress}
          activeOpacity={0.8}>
          <Text style={{color: '#28b08a', fontSize: 15}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
};

const LoginJSX = ({onPress}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <TouchableOpacity
        onPress={onPress}
        style={{backgroundColor: 'white', borderRadius: 10}}>
        <Text style={styles.signinText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerContent = ({navigation, user, onSignout}) => {
  function gotoLoginScreen() {
    navigation.navigate(SCREEN.AUTH);
  }

  function gotoOrderHistoryScreen() {
    navigation.navigate(SCREEN.ORDER_HISTORY);
  }

  function gotoUserInformationScreen() {
    navigation.navigate(SCREEN.USER_INFORMATION);
  }

  onSignoutPress = () => {
    AuthStorage.removeTokenData().then(() => {
      onSignout();
    });
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: '#28b08a',
        alignItems: 'center',
      }}>
      <Image
        source={require('../images/img/profile.png')}
        style={styles.image}
      />
      {user ? (
        <LogoutJSX
          onPress={onSignoutPress}
          data={user}
          onPressGotoOrderHistory={gotoOrderHistoryScreen}
          onPressGotoUserInformationScreen={gotoUserInformationScreen}
        />
      ) : (
        <LoginJSX onPress={gotoLoginScreen} />
      )}
    </DrawerContentScrollView>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onSignout: () => {
    dispatch(authActions.signout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  buttonWrapper: {
    backgroundColor: 'white',
    width: 190,
    paddingVertical: 13,
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 5,
  },
  signinText: {
    color: '#28b08a',
    fontSize: 15,
    paddingHorizontal: 60,
    paddingVertical: 15,
  },
});
