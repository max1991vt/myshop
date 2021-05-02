import {connect} from 'react-redux';
import ScreenContainer from './ProductDetail.container';
import {cartActions} from '../../store';

class ProductDetail extends ScreenContainer {
  state = {};

  addProductToCart = (product) => {
    this.props.onAddProduct({...product, quantity: 1});
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onAddProduct: (data) => {
    dispatch(cartActions.addProduct(data));
  },
});

const ProductDetailConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
export {ProductDetailConnect as ProductDetailScreen};
