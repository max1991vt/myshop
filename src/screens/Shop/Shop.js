import {Keyboard} from 'react-native';
import {connect} from 'react-redux';
import ScreenContainer from './Shop.container';
import {shopActions, authActions} from '../../store';
import {AuthStorage} from '../../utils';
import {SCREEN} from '../../routes/Screen';

class Shop extends ScreenContainer {
  state = {
    activeSlide: 0,
    categories: [],
    products: [],
    keySearch: '',
  };

  componentDidMount() {
    // setInterval(() => {
    //   AuthStorage.retrieveTokenData().then((token) => {
    //     const data = {token};
    //     this.props.onRefreshToken(data, (token) => {
    //       AuthStorage.storeTokenData(token);
    //     });
    //   });
    // }, 30000);

    AuthStorage.retrieveTokenData().then((token) => {
      if (token === '') {
        // thì phải biến cái state redux user là {}
        this.props.onSignout();
        return;
      }

      const data = {token};
      this.props.onCheckJWT(data, (resolve) => {
        AuthStorage.storeTokenData(resolve.token);
      });
    });

    this.props.onGetAllCategoryAndProduct(() => {
      this.setState({
        categories: this.props.shop.type,
        products: this.props.shop.product,
      });
    });
  }

  onChangeTextSearch = (text) => {
    this.setState({keySearch: text});
  };

  gotoSearchScreen = () => {
    Keyboard.dismiss;
    this.props.navigation.navigate(SCREEN.SEARCH);
  };
}

const mapStateToProps = (state) => ({
  shop: state.shop.shop,
});

const mapDispatchToProps = (dispatch) => ({
  onGetAllCategoryAndProduct: (resolve) => {
    dispatch(shopActions.getAllCategoryAndProduct(resolve));
  },
  onCheckJWT: (data, resolve) => {
    dispatch(authActions.checkJWT(data, resolve));
  },
  onSignout: () => {
    dispatch(authActions.signout());
  },
  onRefreshToken: (data, resolve) => {
    dispatch(authActions.refreshToken(data, resolve));
  },
});

const ShopConnect = connect(mapStateToProps, mapDispatchToProps)(Shop);
export {ShopConnect as ShopScreen};
