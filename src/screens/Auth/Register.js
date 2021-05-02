import {Alert} from 'react-native';
import {connect} from 'react-redux';
import ScreenContainer from './Register.container';
import {authActions} from '../../store';
import {Helpers} from '../../utils';

class Register extends ScreenContainer {
  state = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
  };

  onSuccessAlert = () => {
    Alert.alert(
      'Notice',
      'Sign up successfully!',
      [{text: 'OK', onPress: this.props.navigateToLogin}],
      {cancelable: false},
    );
  };

  onFailAlert = () => {
    Alert.alert(
      'Notice',
      'Email has already existed!',
      [{text: 'OK', onPress: () => this.setState({email: ''})}],
      {cancelable: false},
    );
  };

  onWrongRepasswordAlert = () => {
    Alert.alert(
      'Notice',
      'Password and Re-password are different. Please check again!',
      [
        {
          text: 'OK',
          onPress: () => this.setState({password: '', rePassword: ''}),
        },
      ],
      {cancelable: false},
    );
  };

  onUnFullFillAlert = () => {
    Alert.alert('Notice', 'Please fill full all information!', [{text: 'OK'}], {
      cancelable: false,
    });
  };

  onInvalidateEmailAndPassAlert = () => {
    Alert.alert(
      'Notice',
      'Invalid Email or Password!',
      [
        {
          text: 'OK',
          onPress: () =>
            this.setState({email: '', password: '', rePassword: ''}),
        },
      ],
      {cancelable: false},
    );
  };

  onSignupPress = () => {
    const {name, email, password, rePassword} = this.state;
    if (name !== '' && email !== '' && password !== '' && rePassword !== '') {
      if (
        Helpers.validateEmail(email) &&
        Helpers.validatePassword(password) &&
        Helpers.validatePassword(rePassword)
      ) {
        if (password !== rePassword) {
          this.onWrongRepasswordAlert();
          return;
        }
        const data = {name, email, password};
        this.props.onSignup(data, (resolve) => {
          if (resolve === 'THANH_CONG') {
            this.onSuccessAlert();
          } else {
            this.onFailAlert();
          }
        });
      } else {
        this.onInvalidateEmailAndPassAlert();
      }
    } else {
      this.onUnFullFillAlert();
    }
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSignup: (data, resolve) => {
    dispatch(authActions.signup(data, resolve));
  },
});

const RegisterConnect = connect(mapStateToProps, mapDispatchToProps)(Register);
export {RegisterConnect as RegisterScreen};
