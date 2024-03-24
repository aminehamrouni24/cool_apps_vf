/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import Header from '../../../components/Header/Header';
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import LongButton from '../../../components/LongButton/LongButton';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Publicly Available Icons that Can be Used for Commercial Purposes
import CloseIcon from '../../../assets/icons/generalIcons/closeRedSVG.svg';
import PayPalLogo from '../../../assets/images/paypal_logoSVG.svg';
import PlusIcon from '../../../assets/icons/supportIcons/plusSVG.svg';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import RadioButton from '../../../components/RadioButton/RadioButton';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {screenHeight, screenWidth} from '../../../utility/Scale';


//Dummy Data
import PayPalAddressesDummyData from '../../../DummyData/PaypalAddressDummyData.json';

const AddNewPaypal = ({navigation}) => {
  const [email, addEmail] = useState('');
  const [isAddEmailVisible, setIsAddEmailVisible] = useState(false);

  const dispatch = useDispatch();
  //get paypal addresses
  const storePayPalAddressData = useCallback(
    () => dispatch(Action.storePayPalAddresses(PayPalAddressesDummyData.data)),
    [dispatch],
  );
  const tempPayPalAddresses = useSelector(state => state.payPalAddresses, []);

  //update on redux update
  useEffect(() => {
    storePayPalAddressData();
  }, []);

  //change paypal address
  const changePayPalAddress = id => {
    dispatch(Action.changePayPalAddresses(id));
  };

  const addPayPalAddress = value => {
    if (value.length > 0) {
      dispatch(Action.addPayPalAddress(value));
    }
    addEmail('');
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Add New PayPal'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <ScrollView
        style={[globalStyles.flex]}
        contentContainerStyle={globalStyles.commonScrollViewPadding}
        showsVerticalScrollIndicator={false}>
        <View style={[globalStyles.horizontalGeneralPadding]}>
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
            componentTopPadding={45}
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
                type={BUTTON_TYPE.PRIMARY}
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
                type={BUTTON_TYPE.PRIMARY}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewPaypal;
