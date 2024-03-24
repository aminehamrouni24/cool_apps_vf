import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//Component
import CachableImage from '../CachableImage/CachableImage';
import ImagePopUp from '../ImagePopUp/ImagePopUp';

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
        disabled={props.onItemPress}
        style={[
          styles.container,
          {
            borderTopLeftRadius: props.leftTopIcon ? 0 : 10,
          },
        ]}>
        {/* --- Top Left Icon Start --*/}
        {props.leftTopIcon && (
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
          <View>
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
          </View>
          <View style={globalStyles.flexGrow1}>
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.justifySpaceBetween,
              ]}>
              {/*-- Food Item Title Start --*/}
              <View style={{maxWidth: '70%'}}>
                {/*-- Shows only one line and if not completely visible puts dots instead --*/}
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
              </View>
              {/*-- Food Item Title End --*/}
              {/*--Item Price Start--*/}
              <View style={[globalStyles.alignItemsFlexEnd, {maxWidth: '30%'}]}>
                <Text style={styles.itemPrice}>
                  $ {props.itemPrice.toFixed(2)}
                </Text>
                <View style={[styles.totalCountView]}>
                  <Text style={[styles.totalCountText]}>
                    {props.itemPurchasedCount}
                  </Text>
                </View>
              </View>
              {/*--Item Price End--*/}
            </View>
          </View>
        </View>
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
  addToCartOnPress: () => {},
  description: '',
  imageIconComponent: null,
  imageIconPath: '',
  itemPrice: 0,
  itemPurchasedCount: 0,
  leftTopIcon: null,
  rating: 0,
  ratingNum: 0,
  showImagePopup: true,
  title: '',
  topRightIconComponent: null,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
FoodItem.propTypes = {
  addToCartOnPress: PropTypes.func,
  description: PropTypes.string,
  imageIconComponent: PropTypes.object,
  imageIconPath: PropTypes.string,
  itemPrice: PropTypes.number,
  itemPurchasedCount: PropTypes.number,
  leftTopIcon: PropTypes.object,
  onItemPress: PropTypes.func,
  onTopRightIconPress: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  showImagePopup: PropTypes.bool,
  title: PropTypes.string,
  topRightIconComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
};
/*---- Prop Type Expectations End -------*/
export default FoodItem;
