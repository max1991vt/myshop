import { connect } from 'react-redux';
import ScreenContainer from './Contact.container';

class Contact extends ScreenContainer {
    state = {

    }

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

const ContactConnect =  connect(mapStateToProps, mapDispatchToProps)(Contact);
export { ContactConnect as ContactScreen }