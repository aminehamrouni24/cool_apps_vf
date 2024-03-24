/* eslint-disable */
import React, {useState} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

//Components
import DeliveryConfirmationPopUp from '../../../components/popups/DeliveryConfirmationPopUp/DeliveryConfirmationPopUp';
import Header from '../../../components/Header/Header';
import OrderProcessPopUp from '../../../components/popups/OrderProcessPopUp/OrderProcessPopUp';
import OrderSuccessPopUp from '../../../components/popups/OrderSuccessPopUp/OrderSuccessPopUp';
import RequestFailedPopUp from '../../../components/popups/RequestFailedPopUp/RequestFailedPopUp';
import RequestSuccessPopUp from '../../../components/popups/RequestSuccessPopUp/RequestSuccessPopUp';
import TitleWithUnderline from '../../../components/TitleWithUnderline/TitleWithUnderline';
import UnderlineTextIcon from '../../../components/UnderlineTextIcon/UnderlineTextIcon';

//Utils
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import {FONT_FAMILY,} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';


const Other = ({navigation}) => {

  const [showRequestFailedPopUp, setRequestFailedPopUp] = useState(false);
  const [showRequestSuccessPopUp, setRequestSuccessPopUp] = useState(false);
  const [showOrderSuccessPopUp, setOrderSuccessPopUp] = useState(false);
  const [showOrderProcessPopUp, setOrderProcessPopUp] = useState(false);
  const [showDeliveryPopUp, setDeliveryPopUp] = useState(false);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Other'}
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
            </View>
            {/*-------- Other Screens End-----------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Other;
