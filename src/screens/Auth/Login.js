import {Alert} from 'react-native';
import {connect} from 'react-redux';
import ScreenContainer from './Login.container';
import {authActions} from '../../store';
import {SCREEN} from '../../routes/Screen';
import {AuthStorage} from '../../utils';
import {ReactNativeFirebase} from '@react-native-firebase/app';

class Login extends ScreenContainer {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    AuthStorage.retrieveTokenData().then((token) => console.log(token));
  }

  onUnFullFillAlert = () => {
    Alert.alert('Notice', 'Please fill full all information!', [{text: 'OK'}], {
      cancelable: false,
    });
  };

  onSigninPress = () => {
    const {email, password} = this.state;
    if (email !== '' && password !== '') {
      const data = {email, password};
      this.props.onSignin(data, (response) => {
        this.props.navigation.navigate(SCREEN.DRAWER);
        AuthStorage.storeTokenData(response.token);
        console.log(response.token);
      });
    } else {
      this.onUnFullFillAlert();
    }
    // nếu mà đăng ko đúng email
    // nếu mà nhập sai email và pass
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSignin: (data, resolve) => {
    dispatch(authActions.signin(data, resolve));
  },
});

const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login);
export {LoginConnect as LoginScreen};
