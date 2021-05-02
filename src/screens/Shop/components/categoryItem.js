import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {config} from '../../../constants';

const {width} = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

export const CategoryItem = ({data, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} key={data.id}>
      <Image
        source={{uri: `${config.TYPE_IMAGE_URL}` + data.image}}
        style={styles.image}
      />
      <Text style={styles.titleImage}>{data.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  titleImage: {
    position: 'absolute',
    bottom: imageHeight / 3,
    fontSize: 20,
    color: '#bdbdbd',
    width: imageWidth,
    textAlign: 'center',
  },
});
