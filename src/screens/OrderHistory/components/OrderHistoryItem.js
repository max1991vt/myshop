import React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const OrderHistoryItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={{color: '#959595', fontWeight: 'bold'}}>Order id:</Text>
        <Text style={{color: '#28b08a'}}>{data.id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: '#959595', fontWeight: 'bold'}}>OrderTime:</Text>
        <Text style={{color: '#be2a77'}}>{data.date_order}</Text>
      </View>
      <View style={styles.row}>
        <Text style={{color: '#959595', fontWeight: 'bold'}}>Status:</Text>
        <Text style={{color: '#28b08a'}}>{data.status}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#959595', fontWeight: 'bold'}}>Total:</Text>
        <Text style={{color: '#be2a77', fontWeight: 'bold'}}>
          {data.total}$
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    backgroundColor: 'white',
    padding: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
