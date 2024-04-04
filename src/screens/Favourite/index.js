import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import images from '../../constants/images';

const FavoriteScreen = () => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'Favorites & Collections'}</Text>
        <Image source={images.bag} style={styles.bagIcon} />
      </View>
      <View style={styles.collectionContainer}>
        <TouchableOpacity
          onPress={() => setLike(!like)}
          style={styles.likeButtonContainer}>
          <Image
            source={images.favoriteIcon}
            style={[
              styles.likeIcon,
              {tintColor: like ? colors.red : colors.white},
            ]}
          />
        </TouchableOpacity>
        <View style={styles.cardTitleView}>
          <Text style={{color: colors.black, fontWeight: '600'}}>
            {'Favorites'}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: colors.black, fontWeight: '400'}}>
              {`${like ? '1' : '0'} Items`}
            </Text>
            <Text style={{color: colors.lightGrey, marginLeft: 10}}>
              {'Default Collection'}
            </Text>
            <Image
              source={images.greenRight}
              style={{width: 16, height: 16, marginLeft: 3}}
            />
          </View>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <TouchableOpacity>
            <Image source={images.share} style={styles.shareIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuView}>
            <Image source={images.menu} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default FavoriteScreen;
