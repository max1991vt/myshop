import {connect} from 'react-redux';
import ScreenContainer from './OrderHistory.container';
import {orderActions} from '../../store';
import {AuthStorage} from '../../utils';

class OrderHistory extends ScreenContainer {
  state = {};

  componentDidMount() {
    AuthStorage.retrieveTokenData().then((token) => {
      const data = {token};
      this.props.onGetOrderHistory(data);
    });
  }
}

const mapStateToProps = (state) => ({
  orderHistory: state.order.orderHistory,
});

const mapDispatchToProps = (dispatch) => ({
  onGetOrderHistory: (data, resolve) => {
    dispatch(orderActions.getOrderHistory(data, resolve));
  },
});

const OrderHistoryConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderHistory);
export {OrderHistoryConnect as OrderHistoryScreen};
