/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, FlatList, SafeAreaView, Image} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import NoInformationText from '../../../components/NoInformationText/NoInformationText';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';
import UserReview from '../../../components/UserReview/UserReview';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import {allColors} from '../../../assets/styles/mainColors';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {loadPagination} from '../../../utility/Helper';

//Dummy Data
import UserReviewDummy from '../../../DummyData/UserReviewDummyData';

const StoreReviewScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [userReviewArray, setUserReviewArray] = useState([]);
  const [offset, setOffset] = useState(1);
  const [noDataAvailable, setNoDataAvailable] = useState(false);

  const storeUserReviewList = useCallback(
    () => dispatch(Action.storeUserReviewList(UserReviewDummy.data)),
    [dispatch],
  );
  const reviewList = useSelector(state => state.userReviewList, []);

  //update after redux store
  useEffect(() => {
    storeUserReviewList();
  }, []);

  //pagination and update
  useEffect(() => {
    pagination(reviewList, 2, offset);
  }, [reviewList]);

  //pagination and update
  useEffect(() => {
    if (offset > 1) {
      pagination(reviewList, 2, offset);
    }
  }, [offset]);

  //pagination
  function pagination(array, page_size, page_number) {
    let temp = loadPagination(array, page_size, page_number);
    if (temp.length > 0) {
      setUserReviewArray([...userReviewArray, ...temp]);
      if (reviewList.length <= userReviewArray.length + page_size) {
        setNoDataAvailable(true);
      } else {
        setNoDataAvailable(false);
      }
    } else {
      setNoDataAvailable(true);
    }
  }

  //title and picture definition for the review screen
  const TitlePictureView = () => {
    return (
      <TitlePicture
        componentTopPadding={5}
        imageComponent={
          <Image
          source={require('../../../assets/placeholders/63x55.png')}
          style={{width: verticalScale(63), height: horizontalScale(55), borderRadius: 3}}
          />
        }
        titleTopPadding={6}
        title={'"La Casa" Cafe'}
        componentBottomPadding={9}
        descriptionTopPadding={7}
        description={
          'Curabitur sit amet massa nunc. Fusce at tristique magna. Fusce eget dapibus dui.'
        }
      />
    );
  };

  //render the rows of user reviews
  const renderReviewRows = ({item, index}) => {
    return (
      <View key={'user_review' + index}>
        <UserReview
          userName={item.userName}
          ratingDate={item.ratingDate}
          rating={item.rating}
          reviewText={item.reviewText}
          imagePath={item.imagePath}
        />
        {index !== userReviewArray.length - 1 && (
          <BorderDivider
            containerTopMargin={20}
            containerBottomMargin={19}
            activeAreaAlignment={index % 2 === 0 ? 'right' : 'left'}
            activeAreaWidth={47}
            isActiveOnly={false}
            activeAreaHeight={1}
          />
        )}
      </View>
    );
  };

  //load more button definition
  const LoadMoreButton = () => (
    <View style={globalStyles.marginTop30}>
      {noDataAvailable ? null : (
        <LongButton
          title={'LOAD MORE'}
          titleFontSize={18}
          titleFontColor={allColors.white}
          titleFontWeight={'400'}
          titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
          type={BUTTON_TYPE.SECONDARY}
          onPress={() => setOffset(offset => offset + 1)}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={"Restaurant's Review"}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View
          style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
          {/*---- Page Title and Picture Container Start ------*/}
          <TitlePictureView />
          {/*---- Page Title and Picture Container End ------*/}

          {/*---- User Review List Start ------*/}
          <View style={[globalStyles.flex, globalStyles.justifyCenter]}>
            {userReviewArray.length > 0 ? (
              <FlatList
                //performance settings
                //initialNumToRender={1} // Reduce initial render amount
                //maxToRenderPerBatch={1} // Reduce number in each render batch
                // windowSize={7} // Reduce the window size
                showsVerticalScrollIndicator={false}
                data={userReviewArray}
                renderItem={renderReviewRows}
                contentContainerStyle={[globalStyles.paddingTop15]}
                keyExtractor={(_item, index) => index.toString()}
                ListFooterComponent={() => <LoadMoreButton />}
              />
            ) : (
              <NoInformationText />
            )}
            {/*---- User Review List End ------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreReviewScreen;
