import React from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import ViewMoreText from 'react-native-view-more-text';

//Component
import CachableImage from '../CachableImage/CachableImage';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';
import UnderlineTextIcon from '../UnderlineTextIcon/UnderlineTextIcon';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {FONT_FAMILY} from '../../constants/constants';
import {navigate} from '../../utility/NavigationService';

//Publicly Available Icons that Can be Used for Commercial Purposes
import ChevronRightIcon from '../../assets/icons/generalIcons/chevronRightBlackSVG.svg';

import {allColors} from '../../assets/styles/mainColors';
import Routes from '../../navigation/Routes';

const ProductItem = props => {
  //view more
  let renderViewMore = press => {
    return (
      <UnderlineTextIcon
        fontFamily={FONT_FAMILY.RobotoCondensedLight}
        fontWeight={'300'}
        fontSize={11}
        onPress={() => press()}
        isUnderlined={true}
        title={'show all'}
        rightIconSVG={<ChevronRightIcon style={globalStyles.marginLeft2} />}
      />
    );
  };
  //view less
  let renderViewLess = press => {
    return (
      <UnderlineTextIcon
        fontFamily={FONT_FAMILY.RobotoCondensedLight}
        fontWeight={'300'}
        fontSize={11}
        onPress={() => press()}
        isUnderlined={true}
        title={'hide all'}
        rightIconSVG={<ChevronRightIcon style={globalStyles.marginLeft2} />}
      />
    );
  };
  return (
    <View>
      <TouchableOpacity
        disabled={!props.isActive}
        onPress={() => props.onPress()}
        style={[styles.mainView]}>
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.justifySpaceBetween,
          ]}>
          {/*-Menu Item Image Start--*/}
          <View
            style={[
              styles.imageContainer,
              !props.isActive && styles.isNotActive,
            ]}>
            <View style={styles.imageView}>
              <CachableImage
                style={[globalStyles.flex, styles.iconImage]}
                source={{uri: props.iconImage}}
              />
            </View>
          </View>
          {/*-Menu Item Image End--*/}
          <View style={[{width: '45%'}, !props.isActive && styles.isNotActive]}>
            {/*--Title Start--*/}
            <Text style={styles.titleStyle}>{props.title}</Text>
            {/*--Title End--*/}
            {/*-View More Text Container Start--*/}
            <View>
              <ViewMoreText
                numberOfLines={1}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}>
                <Text style={styles.moreDescriptionText}>
                  {props.description}
                </Text>
              </ViewMoreText>
            </View>
            {/*-View More Text Container End--*/}
            {/*--Review Start--*/}
            <View style={[globalStyles.marginTop5]}>
              <ReviewDisplay
                rating={props.rating}
                isDescriptionShown={false}
                isReadReviewVisible={true}
                onReadReviewPress={() =>
                  navigate(Routes.StoreReviewScreen, {
                    headerTitle: "Product's Reviews",
                    title: props.title,
                  })
                }
              />
            </View>
            {/*--Review End--*/}
          </View>
          <View
            style={[
              globalStyles.flexDirectionColumn,
              globalStyles.justifySpaceBetween,
              globalStyles.alignItemsFlexEnd,
            ]}>
            <View style={[!props.isActive && styles.isNotActive]}>
              <Text style={styles.itemPrice}>{props.price} $</Text>
            </View>
            <View
              style={[
                !props.isActive && {
                  position: 'absolute',
                  zIndex: 100,
                  bottom: 0,
                },
              ]}>
              {/*-----------Product Active Switch Start -----*/}
              <Switch
                tintColor={'#5f5f5f'}
                ios_backgroundColor={'#5f5f5f'}
                thumbColor={allColors.white}
                trackColor={{true: allColors.yellow}}
                onValueChange={() => props.toggleIsActive()}
                value={props.isActive}
                style={styles.smallerSwitch}
              />
            </View>
            {/*-----------Product Active Switch End -----*/}
          </View>
        </View>
        {!props.isActive && (
          <View style={[styles.outOfStockContainer]}>
            <Text style={styles.outOfStockText}>OUT OF STOCK</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

/*---- Default Props Start -------*/
ProductItem.defaultProps = {
  categoryId: '',
  description: '',
  iconImage: '',
  isActive: true,
  onPress: () => {},
  price: 0,
  rating: 0,
  ratingNum: 0,
  title: '',
  toggleIsActive: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
ProductItem.propTypes = {
  categoryId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.string,
  iconImage: PropTypes.string,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  price: PropTypes.number,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  title: PropTypes.string,
  toggleIsActive: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default ProductItem;
