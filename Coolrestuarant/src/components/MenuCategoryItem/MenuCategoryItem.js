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
import PencilIcon from '../../assets/icons/generalIcons/pencilSVG.svg';

import {allColors} from '../../assets/styles/mainColors';
import Routes from '../../navigation/Routes';

const MenuCategoryItem = props => {
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
    <TouchableOpacity
      disabled={!props.isActive}
      onPress={() => props.onPress()}
      style={styles.mainView}>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
        ]}>
        {/*--Title Start--*/}
        <View>
          <Text style={styles.titleStyle}>{props.title}</Text>
        </View>
        {/*--Title End--*/}
        <View style={[globalStyles.flexDirectionRow]}>
          <TouchableOpacity
            onPress={() => {
              navigate(Routes.CategoryConfigScreen, {
                item: {
                  categoryId: props.categoryId,
                  description: props.description,
                  iconImage: props.iconImage,
                  isActive: props.isActive,
                  moreDescription: props.moreDescription,
                  rating: props.rating,
                  ratingNum: props.ratingNum,
                  title: props.title,
                  toggleIsActive: props.toggleIsActive,
                },
              });
            }}
            style={[globalStyles.marginRight10, globalStyles.flexDirectionRow]}>
            <PencilIcon />
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
          {/*-----------Menu Category Switch Start -----*/}
          <View>
            <Switch
              thumbColor={allColors.white}
              trackColor={{true: allColors.yellow}}
              onValueChange={() => props.toggleIsActive()}
              value={props.isActive}
              style={styles.smallerSwitch}
            />
          </View>
          {/*-----------Menu Category Switch End -----*/}
        </View>
      </View>

      <View>
        <View style={[!props.isActive && styles.isNotActive]}>
          {/*--Description Start--*/}
          {props.description.length > 0 && (
            <View style={globalStyles.marginTop5}>
              <Text style={styles.descriptionText}>{props.description}</Text>
            </View>
          )}
          {/*--Description End--*/}

          {/*--Review Start--*/}
          <View
            style={[globalStyles.marginTop5, globalStyles.flexDirectionRow]}>
            <ReviewDisplay
              marginLeftText={18}
              rating={props.rating}
              ratingNum={props.ratingNum}
              isDescriptionShown={true}
            />
          </View>
          {/*--Review End--*/}

          <View
            style={[
              globalStyles.marginTop10,
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
            ]}>
            <View style={{width: '55%'}}>
              {/*-View More Text Container Start--*/}
              <ViewMoreText
                numberOfLines={3}
                renderViewMore={renderViewMore}
                renderViewLess={renderViewLess}>
                <Text style={styles.moreDescriptionText}>
                  {props.moreDescription}
                </Text>
              </ViewMoreText>
              {/*-View More Text Container End--*/}
            </View>

            {/*-Menu Item Image Start--*/}
            <View style={styles.imageContainer}>
              <View style={styles.imageView}>
                <CachableImage
                  style={[globalStyles.flex, styles.iconImage]}
                  source={{uri: props.iconImage}}
                />
              </View>
            </View>
            {/*-Menu Item Image End--*/}
          </View>
        </View>
        {!props.isActive && (
          <View style={styles.outOfStockContainer}>
            <Text style={styles.outOfStockText}>OUT OF STOCK</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

/*---- Default Props Start -------*/
MenuCategoryItem.defaultProps = {
  categoryId: '',
  description: '',
  iconImage: '',
  isActive: true,
  moreDescription: '',
  onPress: () => {},
  rating: 0,
  ratingNum: 0,
  title: '',
  toggleIsActive: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
MenuCategoryItem.propTypes = {
  categoryId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.string,
  iconImage: PropTypes.string,
  isActive: PropTypes.bool,
  moreDescription: PropTypes.string,
  onPress: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  title: PropTypes.string,
  toggleIsActive: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/
export default MenuCategoryItem;
