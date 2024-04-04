import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  headerView: {
    height: 100,
    backgroundColor: '#ccccd2',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    width: '100%',
    fontWeight: '700',
    marginBottom: 16,
  },
  bagIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginBottom: 16,
    marginRight: 10,
  },
  collectionContainer: {
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop:16,
    height:60,
    marginHorizontal:16,
    alignItems:"center"
  },
  likeButtonContainer: {
    height: 35,
    width: 35,
    borderRadius:8,
    backgroundColor: colors.grayPinkSwan,
    alignItems:"center",
    justifyContent:"center"
  },
  likeIcon:{
    width:25,
    height:25,
  },
  cardTitleView:{
    marginLeft:6
  },
  shareIcon:{width: 16, height: 16},
  menuView:{
    width: 20,
    height: 20,
    backgroundColor: colors.dimGray,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  menuIcon:{width: 10, height: 10, tintColor: colors.white}
});
