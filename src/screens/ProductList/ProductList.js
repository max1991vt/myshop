import {connect} from 'react-redux';
import ScreenContainer from './ProductList.container';
import {productActions} from '../../store';

class ProductList extends ScreenContainer {
  state = {
    isRefreshing: false,
    page: 1,
  };

  componentDidMount() {
    const {productCategory} = this.props.route.params;
    const {page} = this.state;
    const {id} = productCategory;
    if (id === 'SPRING_COLLECTION') {
      const data = {page};
      this.props.onGetProductsOfSpringCollection(data, () => {
        this.setState({isRefreshing: false});
      });
      return;
    }
    const data = {id, page};
    this.props.onGetProducts(data, () => {
      this.setState({isRefreshing: false});
    });
  }

  onPullRefresh = () => {
    const {productCategory} = this.props.route.params;
    this.setState(
      (prevState) => {
        return {
          isRefreshing: true,
          page: prevState.page + 1,
        };
      },
      () => {
        const {page} = this.state;
        const {id} = productCategory;
        if (id === 'SPRING_COLLECTION') {
          const data = {page};
          this.props.onGetAddProductsOfSpringCollection(data, () => {
            this.setState({isRefreshing: false});
          });
          return;
        }
        const data = {id, page};
        this.props.onGetAddProducts(data, () => {
          this.setState({isRefreshing: false});
        });
      },
    );
  };
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProducts: (data, resolve) => {
    dispatch(productActions.getProducts(data, resolve));
  },
  onGetAddProducts: (data, resolve) => {
    dispatch(productActions.getAddProducts(data, resolve));
  },
  onGetProductsOfSpringCollection: (data, resolve) => {
    dispatch(productActions.getProductsOfSpringCollection(data, resolve));
  },
  onGetAddProductsOfSpringCollection: (data, resolve) => {
    dispatch(productActions.getAddProductsOfSpringCollection(data, resolve));
  },
});

const ProductListConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
export {ProductListConnect as ProductListScreen};
