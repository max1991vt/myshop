import { StyleSheet, Dimensions } from 'react-native';

// xây dựng 1 hàm responsive ở util chứa kích cỡ của mấy tấm hình
const { width, height } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 933 * 465;

const productImageWidth = (width - 80) / 2;
const productImageHeight = productImageWidth / 361 * 452;

const styles = StyleSheet.create({
    cardWrapper: {
        height: height * 0.35,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerDotStyle: {
        paddingTop: 0,
        paddingBottom: 0,
        height: 0,
        width: 0,
        left: imageWidth * 0.43,
        bottom: imageHeight / 5,
    },
    productContainer: {
        flex: 1, 
        backgroundColor: 'white', 
        width: width - 20, 
        padding: 20, 
        paddingTop: 0,
        marginTop: 10
    },
    productImage: {
        width: productImageWidth,
        height: productImageHeight,
        marginVertical: 10,
    },
    productCard: {
        backgroundColor: 'white',
        width: productImageWidth + 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        paddingBottom: 15,
        marginBottom: 10
    },
    productWrapper: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        flexWrap: 'wrap'
    }    
});

export default styles;