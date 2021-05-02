import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';
import Icon from '../../images/icons';

const { width, height } = Dimensions.get('window');

export const UserAreaHeader = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
        <View style={{ width: 30 }}/>
        <Text style={{ color: 'white', fontSize: 20 }}>{title}</Text>
        <Icon.MaterialIcons name={'arrow-forward-ios'} size={30} color={'white'} onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: width, 
      height: height / 10,
      flexDirection: 'row', 
      backgroundColor: '#28b08a', 
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
    }
});