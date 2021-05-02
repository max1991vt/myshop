import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
   textInput: {
    width: width - 60, 
    height: height / 13, 
    backgroundColor: 'white', 
    borderRadius: 20, 
    marginBottom: 20, 
    paddingLeft: 20, 
    fontSize: 16
   },
   signinNowButton: {
    width: width - 60, 
    height: height / 13, 
    backgroundColor: '#33bb79', 
    borderRadius: 20, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: 'white', 
    justifyContent: 'center'
   },
   signinButton: {
    flex: 1, 
    backgroundColor: 'white', 
    height: height / 13, 
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 2
   },
   signupButton: {
    flex: 1, 
    backgroundColor: 'white', 
    height: height / 13, 
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 2
   }
});

export default styles;