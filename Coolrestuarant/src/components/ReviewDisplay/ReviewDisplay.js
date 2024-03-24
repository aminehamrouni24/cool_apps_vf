import React from 'react';
import {View, Text} from 'react-native';

//Third Party
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import {FONT_FAMILY} from '../../constants/constants';
import {allColors} from '../../assets/styles/mainColors';
import {horizontalScale, scaleFontSize} from '../../utility/Scale';
import UnderlineTextIcon from '../UnderlineTextIcon/UnderlineTextIcon';
import ChevronRightIcon from '../../assets/icons/generalIcons/chevronRightBlackSVG.svg';

const ReviewDisplay = props => {
  const ratingText = {
    color: props.textColor,
    fontSize: scaleFontSize(props.textSize),
    fontFamily: FONT_FAMILY.RobotoThin,
    fontWeight: '100',
    marginLeft: horizontalScale(props.marginLeftText),
  };

  return (
    <View
      style={[
        globalStyles.flexDirectionRow,
        globalStyles.justifySpaceBetween,
        globalStyles.alignItemsCenter,
      ]}>
      {/*--Star Rating Start--*/}
      <StarRating
        disabled={true}
        maxStars={5}
        rating={props.rating}
        fullStarColor={allColors.yellow}
        starSize={11}
        containerStyle={globalStyles.justifyFlexStart}
        starStyle={{marginRight: 3, height: 12}}
      />
      {/*--Star Rating End--*/}

      {/*--Rating Start--*/}
      {props.isDescriptionShown && (
        <Text style={[ratingText]}>
          {props.rating + ' ' + '(' + props.ratingNum + ' ratings' + ')'}
        </Text>
      )}
      {/*--Rating Start--*/}

      {props.isReadReviewVisible && (
        <View style={[globalStyles.marginLeft2]}>
          <UnderlineTextIcon
            fontFamily={FONT_FAMILY.RobotoCondensedLight}
            fontWeight={'300'}
            fontSize={11}
            onPress={() => props.onReadReviewPress()}
            isUnderlined={true}
            title={'read review'}
            rightIconSVG={<ChevronRightIcon style={globalStyles.marginLeft2} />}
          />
        </View>
      )}
    </View>
  );
};

/*---- Default Props Start -------*/
ReviewDisplay.defaultProps = {
  isDescriptionShown: true,
  isReadReviewVisible: false,
  marginLeftText: 0,
  onReadReviewPress: () => {},
  rating: 0,
  ratingNum: 0,
  textColor: allColors.black,
  textSize: 10,
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
ReviewDisplay.propTypes = {
  isDescriptionShown: PropTypes.bool,
  isReadReviewVisible: PropTypes.bool,
  marginLeftText: PropTypes.number,
  onReadReviewPress: PropTypes.func,
  rating: PropTypes.number,
  ratingNum: PropTypes.number,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
};
/*---- Prop Type Expectations End -------*/
export default ReviewDisplay;
