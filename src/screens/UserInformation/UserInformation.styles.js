import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  userInformationWrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#28b08a',
    borderWidth: 1,
    marginBottom: 20,
    height: height / 13,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#28b08a',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
});

export default styles;
