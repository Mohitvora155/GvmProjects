import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import images from '../../constants/images';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'Search Item'}</Text>
        <Image source={images.bag} style={styles.bagIcon} />
      </View>
    </View>
  );
};
export default SearchScreen;
