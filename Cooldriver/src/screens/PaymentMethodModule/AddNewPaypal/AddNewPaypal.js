/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import RadioButton from '../../../components/RadioButton/RadioButton';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';


import CloseIcon from '../../../assets/icons/generalIcons/closeRedSVG.svg';
import PayPalLogo from '../../../assets/images/paymentMethods/paypal_logoSVG.svg';
import PlusIcon from '../../../assets/icons/supportIcons/plusSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import {BUTTON_TYPE, FONT_FAMILY, TEXTFIELD_TYPE} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {screenHeight, screenWidth, verticalScale} from '../../../utility/Scale';

//Dummy Data
import PayPalAddressesDummyData from '../../../DummyData/PaypalAddressDummyData.json';

const AddNewPaypal = ({navigation, isNavigationHidden}) => {
  const [email, addEmail] = useState('');
  const [isAddEmailVisible, setIsAddEmailVisible] = useState(false);

  const dispatch = useDispatch();
  //get paypal addresses
  const storePayPalAddressData = useCallback(
    () => dispatch(Action.storePayPalAddresses(PayPalAddressesDummyData.data)),
    [dispatch],
  );
  //get paypal addresses
  const tempPayPalAddresses = useSelector(state => state.payPalAddresses);

  //update on redux update
  useEffect(() => {
    storePayPalAddressData();
  }, []);

  //change paypal address
  const changePayPalAddress = id => {
    dispatch(Action.changePayPalAddresses(id));
  };

  //add paypal address
  const addPayPalAddress = value => {
    if (value.length > 0) {
      dispatch(Action.addPayPalAddress(value));
    }
    addEmail('');
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      {!isNavigationHidden && <Header
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />}
      {/*------- Header End -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={[globalStyles.horizontalGeneralPadding, isNavigationHidden && {marginBottom: verticalScale(100)}]}>
          {/*---- Page Title and Picture Container Start ------*/}
          <TitlePicture
            imageComponent={
              <PayPalLogo
                width={screenWidth * 0.28}
                height={screenHeight * 0.11}
              />
            }
            title={'Add PayPal Address'}
            description={
              'Add your paypal email address or add new one.\n This need for product delivery.'
            }
            descriptionTopPadding={10}
            titleTopPadding={10}
            componentTopPadding={isNavigationHidden ? 10 : 45}
            componentBottomPadding={40}
          />
          {/*---- Page Title and Picture Container End ------*/}

          {/*----- Paypal options radio button list Start ---*/}
          <View>
            <RadioButton
              onItemSelection={id => changePayPalAddress(id)}
              paddingBottom={19}
              alignmentPaddingSize={10}
              align={'right'}
              optionArr={tempPayPalAddresses}
            />
          </View>
          {/*----- Paypal options radio button list End ---*/}

          {/*----- Add New Paypal Address Start ---*/}
          {isAddEmailVisible && <View style={globalStyles.marginTop20}>
            <GenericInputField
                componentTopPadding={20}
                placeholder={'Add a New PayPal Email Address'}
                type={TEXTFIELD_TYPE.EMAIL}
                value={email}
                onChange={text => addEmail(text)}
            />
          </View>
          }
          {/*----- Add New Paypal Address End ---*/}
          {/*----- Save Paypal Address Start ---*/}
          {!isAddEmailVisible && (
            <View style={globalStyles.marginTop30}>
              <LongButton
                title={'ADD NEW ADDRESS'}
                titleFontColor={allColors.black}
                titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                titleFontSize={18}
                titleFontWeight={'300'}
                type={BUTTON_TYPE.PRIMARYLIGHT}
                hasCircularIcon={true}
                onPress={() =>
                  setIsAddEmailVisible(true)
                }
                circularIconComponent={<PlusIcon />}
              />
            </View>
          )}
          {/*----- Save Paypal Address End ---*/}

          {/*----- Save Paypal Address Start ---*/}
          {isAddEmailVisible && (
            <View style={globalStyles.marginTop10}>
              <LongButton
                title={'SAVE NEW ADDRESS'}
                titleFontColor={allColors.black}
                titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                titleFontSize={18}
                titleFontWeight={'300'}
                type={BUTTON_TYPE.PRIMARYLIGHT}
                hasCircularIcon={true}
                onPress={() => {
                  addPayPalAddress(email);
                  setIsAddEmailVisible(!isAddEmailVisible);
                }}
                circularIconComponent={<CloseIcon />}
              />
            </View>
          )}
          {/*----- Save Paypal Address End ---*/}

          {!isAddEmailVisible && !isNavigationHidden && <View style={globalStyles.marginTop10} >
          <LongButton
              title={'SAVE AS PRIMARY'}
              titleFontColor={allColors.white}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              titleFontSize={18}
              titleFontWeight={'300'}
              type={BUTTON_TYPE.PRIMARY}
              onPress={() => alert('Done')}
          />
        </View>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewPaypal;
