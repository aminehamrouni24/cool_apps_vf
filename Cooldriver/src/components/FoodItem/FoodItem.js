import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//Component
import CachableImage from '../CachableImage/CachableImage';
import ImagePopUp from '../ImagePopUp/ImagePopUp';
import ReviewDisplay from '../ReviewDisplay/ReviewDisplay';

//Third Party
import PropTypes from 'prop-types';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {horizontalScale, verticalScale} from '../../utility/Scale';

const FoodItem = props => {
  //Image Popup set
  const [isImagePopUpShow, setImagePopUpShow] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => props.onItemPress && props.onItemPress()}
        style={[
          styles.container,
          {
            borderTopLeftRadius: props.isActive && props.leftTopIcon ? 0 : 10,
          },
        ]}>
        {/* --- Top Left Icon Start --*/}
        {props.isActive && props.leftTopIcon && (
          <View style={styles.leftProductIcon}>
            {props.leftTopIcon && props.leftTopIcon}
          </View>
        )}
        {/* --- Top Left Icon End --*/}

        {/* --- Top Right Icon Start --*/}
        <TouchableOpacity
          onPress={() =>
            props.onTopRightIconPress && props.onTopRightIconPress()
          }
          style={styles.productIcon}>
          {props.topRightIconComponent &&
            typeof props.topRightIconComponent === 'object' &&
            props.topRightIconComponent}
          {props.topRightIconComponent &&
            typeof props.topRightIconComponent !== 'object' && (
              <Image
                style={{
                  borderRadius: 3,
                  height: verticalScale(20),
                  width: horizontalScale(20),
                }}
                source={props.topRightIconComponent}
              />
            )}
        </TouchableOpacity>
        {/* --- Top Right Icon End --*/}

        <View style={[globalStyles.flexDirectionRow, styles.subContainer]}>
          {/*---Show Popup When Pressing the Food Item Image & Food Item Image Start ---*/}
          <TouchableOpacity
            onPress={() => setImagePopUpShow(props.showImagePopup)}
            style={styles.imageContainer}>
            {props.imageIconPath.length > 0 && (
              <CachableImage
                source={{uri: props.imageIconPath}}
                style={styles.imageIcon}
              />
            )}
            {!props.imageIconPath && props.imageIconComponent && (
              <View style={styles.imageIcon}>{props.imageIconComponent}</View>
            )}
          </TouchableOpacity>
          {/*---Show Popup When Pressing the Food Item Image & Food Item Image End ---*/}

          <View style={globalStyles.flex}>
            {/*-- Food Item Title Start --*/}
            <View style={[globalStyles.flexDirectionRow, globalStyles.flex]}>
              <View style={globalStyles.flex}>
                {/*-- Shows only one line and if not completely visible puts dots instead --*/}
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </View>
            {/*-- Food Item Title End --*/}

            {/*-- Food Item Description Start --*/}
            <View style={[globalStyles.flex, globalStyles.justifyCenter]}>
              <Text numberOfLines={1} style={styles.descriptionText}>
                {props.description}
              </Text>
            </View>
            {/*-- Food Item Description End --*/}

            {/*-- Food Item Rating Start--*/}
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.flex,
                globalStyles.alignItemsCenter,
              ]}>
              {/*--Review Start--*/}
              <View style={[globalStyles.flex, globalStyles.justifyFlexEnd]}>
                <ReviewDisplay
                  rating={props.rating}
                  ratingNum={props.ratingNum}
                  isDescriptionShown={true}
                />
              </View>
              {/*--Review End--*/}
            </View>
            {/*-- Food Item Rating End--*/}
          </View>

          {/*-- Food Item Total Count/Add To Cart/Dropdown Start--*/}
          <View style={styles.spaceBetween}>
            {/*--Delivery Fee Start--*/}
            {!props.showTotalCount && (
              <Text style={styles.deliveryFee}>{props.deliveryFee}</Text>
            )}
            {/*--Delivery Fee End--*/}
          </View>

          {props.showTotalCount && (
            <View
              style={[
                styles.totalCountView,
                props.activateCount && props.isActive && styles.activeCount,
              ]}>
              <Text
                style={[
                  styles.totalCountText,
                  props.activateCount &&
                    props.isActive &&
                    styles.activeCountText,
                ]}>
                {props.itemPurchasedCount}
              </Text>
            </View>
          )}
        </View>
        {/*-- Food Item Total Count/Add To Cart/Dropdown End--*/}
      </TouchableOpacity>

      {/*-- Food Item Popup View Start--*/}
      {isImagePopUpShow && (
        <ImagePopUp
          closeModal={() => setImagePopUpShow(false)}
          showImage={isImagePopUpShow}
          imagePath={props.imageIconPath}
          imageComponent={props.imageIconComponent}
        />
      )}
      {/*-- Food Item Popup View End--*/}
    </View>
  );
};

/*---- Default Props Start -------*/
FoodItem.defaultProps = {
  activateCount: false,
  deliveryFee: '$0',
  description: '',
  imageIconPath: '',
  imageIconComponent: null,
  isActive: false,
  itemPurchasedCount: 0,
  leftTopIcon: null,
  rating: 0,
  ratingNum: 0,
  showTotalCount: false,
  showImagePopup: true,
  title: '',
  topRightIconComponent: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
FoodItem.propTypes = {
  activateCount: PropTypes.bool,
  addToCartOnPress: PropTypes.func,
  deliveryFee: PropTypes.string,
  description: PropTypes.string,
  imageIconPath: PropTypes.string,
  isActive: PropTypes.bool,
  imageIconComponent: PropTypes.object,
  itemPurchasedCount: PropTypes.number,
  leftTopIcon: PropTypes.object,
  onItemPress: PropTypes.func,
  onTopRightIconPress: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  showTotalCount: PropTypes.bool,
  showImagePopup: PropTypes.bool,
  title: PropTypes.string,
  topRightIconComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
};
/*---- Prop Type Expectations End -------*/
export default FoodItem;
