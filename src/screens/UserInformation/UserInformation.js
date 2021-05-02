import {connect} from 'react-redux';
import ScreenContainer from './UserInformation.container';
import {authActions} from '../../store/actions';
import {AuthStorage} from '../../utils';
import {SCREEN} from '../../routes/Screen';

class UserInformation extends ScreenContainer {
  state = {
    name: this.props.user.name,
    phone: this.props.user.phone,
    address: this.props.user.address,
  };

  onChangeUserInfoPress = () => {
    AuthStorage.retrieveTokenData().then((token) => {
      const {name, phone, address} = this.state;
      const data = {token, name, phone, address};
      this.props.onChangeUserInformation(data, () => {
        this.props.navigation.navigate(SCREEN.DRAWER);
      });
    });
  };
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeUserInformation: (data, resolve) => {
    dispatch(authActions.changeUserInformation(data, resolve));
  },
});

const UserInformationConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInformation);
export {UserInformationConnect as UserInformationScreen};
