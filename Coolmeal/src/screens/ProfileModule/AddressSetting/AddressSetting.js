/* eslint-disable */
import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, View, ScrollView, Image} from 'react-native';

//Components
import GenericInputField from '../../../components/GenericInputField/GenericInputField';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import RadioButton from '../../../components/RadioButton/RadioButton';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';


//Publicly Available Icons that Can be Used for Commercial Purposes
import AddNewIcon from '../../../assets/images/addNewSVG.svg';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {allColors} from '../../../assets/styles/mainColors';
import {
  BUTTON_TYPE,
  FONT_FAMILY,
  TEXTFIELD_TYPE,
} from '../../../constants/constants';
import {horizontalScale, verticalScale} from '../../../utility/Scale';
import {navigate} from '../../../utility/NavigationService';


//Dummy Data
import AddressSettingDummyData from '../../../DummyData/AddressSettingDummyData.json';


const AddressSetting = ({navigation}) => {
  const dispatch = useDispatch();
  //store addresses in the redux
  const storeUserAddressData = useCallback(
    () => dispatch(Action.storeUserAddress(AddressSettingDummyData.data)),
    [dispatch],
  );
  const tempPayPalAddresses = useSelector(state => state.userAddressList, []);
  const [isAddAddressVisible, setAddAddress] = useState(false);
  const [address, setAddress] = useState('');

  //update screen after store update
  useEffect(() => {
    storeUserAddressData();
  }, []);

  //change primary user address
  const changeUserAddress = id => {
    dispatch(Action.changeUserAddress(id));
  };

  //add user address
  function addUserAddress(value) {
    dispatch(Action.addUserAddress(value));
  }

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
          <View style={globalStyles.horizontalGeneralPadding}>
            {/*---- Page Title and Picture Container Start ------*/}
            <View>
              <TitlePicture
                componentTopPadding={40}
                imageComponent={
                  <Image
                    source={require('../../../assets/placeholders/104x101.png')}
                    style={{
                      width: verticalScale(104),
                      height: horizontalScale(101),
                      borderRadius: 3,
                    }}
                  />
                }
                titleTopPadding={17}
                title={'Add Address'}
                description={
                  'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
                }
                descriptionTopPadding={10}
                componentBottomPadding={37}
              />
            </View>
            {/*---- Page Title and Picture Container End ------*/}

            {/*---- User Address Radio Button List Start ------*/}
            <View>
              <RadioButton
                onItemSelection={id => changeUserAddress(id)}
                paddingBottom={20}
                optionArr={tempPayPalAddresses}
                align={'left'}
              />
            </View>
            {/*---- User Address Radio Button List End ------*/}

            {/*---- Add User Address Input Start ------*/}
            {isAddAddressVisible && (
              <View style={[globalStyles.marginTop25]}>
                <GenericInputField
                  imageLeftPadding={20}
                  imageRightPadding={12}
                  placeholder={'New Address'}
                  type={TEXTFIELD_TYPE.NORMAL}
                  value={address}
                  onChange={text => setAddress(text)}
                />
              </View>
            )}
            {/*---- Add User Address Input End ------*/}

            {/*---- Add User Address Button Start ------*/}
            {!isAddAddressVisible && (
              <View style={{marginTop: verticalScale(31)}}>
                <LongButton
                  title={'ADD NEW ADDRESS'}
                  titleFontColor={allColors.black}
                  titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                  titleFontSize={16}
                  type={BUTTON_TYPE.PRIMARY}
                  titleFontWeight={'400'}
                  hasCircularIcon={true}
                  onPress={() => setAddAddress(!isAddAddressVisible)}
                  circularIconComponent={<AddNewIcon />}
                />
              </View>
            )}
            {/*---- Add User Address Button Start ------*/}

            {/*---- Save User Address As Primary Button Start ------*/}
            {!isAddAddressVisible && (
              <View style={globalStyles.marginTop10}>
                <LongButton
                  title={'SAVE AS PRIMARY'}
                  titleFontColor={allColors.white}
                  titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                  titleFontSize={16}
                  titleFontWeight={'400'}
                  type={BUTTON_TYPE.SECONDARY}
                  onPress={() => navigate(Routes.ProfileHomeScreen)}
                  buttonShadow={true}
                />
              </View>
            )}
            {/*---- Save User Address As Primary Button End ------*/}

            {/*---- Add User Address Button Start ------*/}
            {isAddAddressVisible && (
              <View style={globalStyles.marginTop10}>
                <LongButton
                  title={'SAVE ADDRESS'}
                  titleFontColor={allColors.white}
                  titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
                  titleFontSize={16}
                  titleFontWeight={'400'}
                  type={
                    address.length > 0
                      ? BUTTON_TYPE.SECONDARY
                      : BUTTON_TYPE.DISABLED
                  }
                  onPress={() => {
                    setAddAddress(!isAddAddressVisible);
                    addUserAddress(address);
                    setAddress('');
                  }}
                  buttonShadow={true}
                />
              </View>
            )}
            {/*---- Add User Address Button End ------*/}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressSetting;
