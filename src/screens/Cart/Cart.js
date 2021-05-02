import {Alert} from 'react-native';
import {connect} from 'react-redux';
import ScreenContainer from './Cart.container';
import {cartActions} from '../../store';
import {AuthStorage} from '../../utils';

class Cart extends ScreenContainer {
  state = {};

  handleRemovePress = (item) => {
    this.props.onRemoveProduct(item);
  };

  handleIncreasePress = (item) => {
    this.props.onIncreaseQuantity(item);
  };

  handleDecreasePress = (item) => {
    this.props.onDecreaseQuantity(item);
  };

  onSuccessAlert = () => {
    Alert.alert(
      'Notice',
      'You have ordered successfully!',
      [
        {
          text: 'OK',
        },
      ],
      {cancelable: false},
    );
  };

  onFailAlert = () => {
    Alert.alert(
      'Notice',
      'You have ordered failed. Please try again!',
      [
        {
          text: 'OK',
        },
      ],
      {cancelable: false},
    );
  };

  handleSendOrder = () => {
    AuthStorage.retrieveTokenData().then((token) => {
      const {cartList} = this.props;
      const arrayDetail = cartList.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));
      const data = {token, arrayDetail};

      this.props.onSendOrder(data, (resolve) => {
        if (resolve === 'THEM_THANH_CONG') {
          this.onSuccessAlert();
        } else {
          this.onFailAlert();
        }
      });
    });
  };
}

const mapStateToProps = (state) => ({
  cartList: state.cart.cartList,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveProduct: (data) => {
    dispatch(cartActions.removeProduct(data));
  },
  onIncreaseQuantity: (data) => {
    dispatch(cartActions.increaseQuantity(data));
  },
  onDecreaseQuantity: (data) => {
    dispatch(cartActions.decreaseQuantity(data));
  },
  onSendOrder: (data, resolve) => {
    dispatch(cartActions.sendOrder(data, resolve));
  },
});

const CartConnect = connect(mapStateToProps, mapDispatchToProps)(Cart);
export {CartConnect as CartScreen};
