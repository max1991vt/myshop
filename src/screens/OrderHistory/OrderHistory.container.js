import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {UserAreaHeader} from '../../components';
import {OrderHistoryItem} from './components';

const orderHistory = [
  {
    id: '1',
    orderID: 'ORD15',
    orderTime: '2020-10-06 05:30:05',
    status: 'pending',
    total: '123$',
  },
  {
    id: '2',
    orderID: 'ORD15',
    orderTime: '2020-10-06 05:30:05',
    status: 'pending',
    total: '123$',
  },
];

export default class ScreenContainer extends Component {
  renderItem = ({item}) => {
    return <OrderHistoryItem data={item} />;
  };

  render() {
    const {orderHistory} = this.props;

    return (
      <View style={{flex: 1}}>
        <UserAreaHeader
          title={'Order History'}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={{flex: 1, padding: 10}}>
          <FlatList data={orderHistory} renderItem={this.renderItem} />
        </View>
      </View>
    );
  }
}
