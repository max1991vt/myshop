import {connect} from 'react-redux';
import ScreenContainer from './Search.container';
import {productActions} from '../../store';

class Search extends ScreenContainer {
  state = {
    keySearch: '',
    products: [],
  };

  onChangeTextSearch = (text) => {
    this.setState({keySearch: text});
  };

  onSearch = () => {
    const {keySearch} = this.state;
    const data = {keySearch};
    this.props.onGetSearchProducts(data, (resolve) =>
      this.setState({products: resolve}),
    );
  };

  // onEnterPress = () => {};
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  onGetSearchProducts: (data, resolve) => {
    dispatch(productActions.getSearchProducts(data, resolve));
  },
  // onGetClearProducts: () => {
  //   dispatch(productActions.getClearProducts());
  // },
});

const SearchConnect = connect(mapStateToProps, mapDispatchToProps)(Search);
export {SearchConnect as SearchScreen};
