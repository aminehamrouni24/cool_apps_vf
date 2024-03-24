/* eslint-disable */
import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

//Components
import Header from '../../../components/Header/Header';

//Third Party
import {useDispatch} from 'react-redux';

//Utils
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import {allColors} from '../../../assets/styles/mainColors';
import {
  FONT_FAMILY,
} from '../../../constants/constants';

//Dummy Data
import AddressSettingDummyData from '../../../DummyData/AddressSettingDummyData.json';

//Components
import DeliveryConfirmationPopUp from '../../../components/popups/DeliveryConfirmationPopUp/DeliveryConfirmationPopUp';
import OrderProcessPopUp from '../../../components/popups/OrderProcessPopUp/OrderProcessPopUp';
import OrderSuccessPopUp from '../../../components/popups/OrderSuccessPopUp/OrderSuccessPopUp';
import RequestFailedPopUp from '../../../components/popups/RequestFailedPopUp/RequestFailedPopUp';
import RequestSuccessPopUp from '../../../components/popups/RequestSuccessPopUp/RequestSuccessPopUp';
import TitleWithUnderline from '../../../components/TitleWithUnderline/TitleWithUnderline';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';


const Other = ({navigation}) => {
  const dispatch = useDispatch();

  const [showRequestFailedPopUp, setRequestFailedPopUp] = useState(false);
  const [showRequestSuccessPopUp, setRequestSuccessPopUp] = useState(false);
  const [showOrderSuccessPopUp, setOrderSuccessPopUp] = useState(false);
  const [showOrderProcessPopUp, setOrderProcessPopUp] = useState(false);
  const [showDeliveryPopUp, setDeliveryPopUp] = useState(false);


  //store addresses in the redux
  const storeUserAddressData = useCallback(
    () => dispatch(Action.storeUserAddress(AddressSettingDummyData.data)),
    [dispatch],
  );

  //update screen after store update
  useEffect(() => {
    storeUserAddressData();
  }, []);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Address Setting'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyles.flex}>
          <View style={[globalStyles.horizontalGeneralPadding, globalStyles.marginTop15]}>
            {/*-------- Popups Definition Start -----------*/}
            <View>
              <View style={globalStyles.marginBottom20}>
              <TitleWithUnderline
                  borderBottomColor={allColors.grey}
                  bottomBorderWidth={'100%'}
                  borderMarginTop={15}
                  titleFontSize={18}
                  titleFontWeight={'normal'}
                  title={'Popups'}
              />
              </View>
              <View>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => setRequestFailedPopUp(true)}
                    isUnderlined={true}
                    title={'Open Request Failed Pop Up'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <View style={[globalStyles.marginTop10]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => setRequestSuccessPopUp(true)}
                    isUnderlined={true}
                    title={'Open Request Success Pop Up'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <View style={[globalStyles.marginTop10]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => setOrderSuccessPopUp(true)}
                    isUnderlined={true}
                    title={'Open Order Success Pop Up'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <View style={[globalStyles.marginTop10]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => {
                      setOrderProcessPopUp(true);
                      setTimeout(() => {
                        setOrderProcessPopUp(false);
                        navigation.navigate(Routes.DeliveryProcessScreen);
                      }, 5000)
                    }}
                    isUnderlined={true}
                    title={'Open Order Process Pop Up'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <View style={[globalStyles.marginTop10]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => setDeliveryPopUp(true)}
                    isUnderlined={true}
                    title={'Open Delivery Confirmation Pop Up'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <RequestFailedPopUp closePopUp={() => setRequestFailedPopUp(false)} showPopUp={showRequestFailedPopUp} />
              <RequestSuccessPopUp closePopUp={() => setRequestSuccessPopUp(false)} showPopUp={showRequestSuccessPopUp} />
              <OrderSuccessPopUp closePopUp={() => setOrderSuccessPopUp(false)} showPopUp={showOrderSuccessPopUp} />
              <OrderProcessPopUp closePopUp={() => setOrderProcessPopUp(false)} showPopUp={showOrderProcessPopUp} />
              <DeliveryConfirmationPopUp closePopUp={() => setDeliveryPopUp(false)} showPopUp={showDeliveryPopUp} />
            </View>
            {/*-------- Popups Definition End -----------*/}

            {/*-------- Other Screens Start -----------*/}
            <View>
              <View style={globalStyles.marginTop20}>
                <TitleWithUnderline
                    borderBottomColor={allColors.grey}
                    bottomBorderWidth={'100%'}
                    borderMarginTop={15}
                    titleFontSize={18}
                    titleFontWeight={'normal'}
                    title={'Other Screens'}
                />
              </View>
              <View style={[globalStyles.marginTop20]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => navigation.navigate(Routes.ChatScreen)}
                    isUnderlined={true}
                    title={'Messenger Screen'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <View style={[globalStyles.marginTop20]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => navigation.navigate(Routes.RestaurantDescriptionScreen)}
                    isUnderlined={true}
                    title={'Restaurant Description Menu with Categories Screen'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
              <View style={[globalStyles.marginTop20]}>
                <UnderlineTextIcon
                    fontFamily={FONT_FAMILY.RobotoLight}
                    fontWeight={'300'}
                    fontSize={14}
                    onPress={() => navigation.navigate(Routes.RestaurantMenuScreen,{title: 'Some Restaurant'})}
                    isUnderlined={true}
                    title={'Restaurant Menu for a Single Screen'}
                    color={'rgb(255,0,0)'}
                    style={{opacity: 0.8}}
                />
              </View>
            </View>
            {/*-------- Other Screens End-----------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Other;
