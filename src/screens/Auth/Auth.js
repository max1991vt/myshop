import {connect} from 'react-redux';
import ScreenContainer from './Auth.container';

class Auth extends ScreenContainer {
  state = {
    isSignin: true,
  };

  componentDidMount() {
      
  }

  gotoLoginScreen = () => {
    this.setState({isSignin: true});
  }

  onSigninPress = () => {
    this.setState({isSignin: true});
  };

  onSignupPress = () => {
    this.setState({isSignin: false});
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  
});

const AuthConnect = connect(mapStateToProps, mapDispatchToProps)(Auth);
export {AuthConnect as AuthScreen};
