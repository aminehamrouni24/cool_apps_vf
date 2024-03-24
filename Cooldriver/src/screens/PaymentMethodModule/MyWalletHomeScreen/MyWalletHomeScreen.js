import React from 'react';
import {SafeAreaView, View} from 'react-native';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import Header from '../../../components/Header/Header';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import CompanyInformationIcon from '../../../assets/images/placeholders/21x19.svg';
import MyWalletIcon from '../../../assets/images/placeholders/22x14.svg';
import PersonalInformationIcon from '../../../assets/images/profile/personalInformationSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import Routes from '../../../navigation/Routes';
import {FONT_FAMILY} from '../../../constants/constants';

const MyWalletHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        navigation={navigation}
        title={'My Wallet'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <View style={globalStyles.flex}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*-----Page Title Start----*/}
          <View>
            <TitlePicture
              imageComponent={<MyWalletIcon />}
              titleTopPadding={12}
              title={'My Wallet'}
              titleFontSize={20}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
              descriptionTopPadding={12}
              componentBottomPadding={22}
              componentTopPadding={56}
            />
          </View>
          {/*-----Page Title End----*/}
          <View>
            {/*-----Withdraw History Button Start----*/}
            <SquareListIcon
              showBorder={true}
              onPress={() => navigation.navigate(Routes.WithdrawHistoryScreen)}
              leftIconComponent={<PersonalInformationIcon />}
              title={'Withdraw History'}
              leftIconRightPadding={19}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*-----Withdraw History Button End----*/}

            {/*-----Add Payout Methods Button Start----*/}
            <SquareListIcon
              containerTopPadding={10}
              showBorder={true}
              onPress={() => navigation.navigate(Routes.AddPayoutMethods)}
              leftIconComponent={<CompanyInformationIcon />}
              title={'Add Payout Methods'}
              leftIconRightPadding={19}
              leftIconLeftPadding={21}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*-----Add Payout Methods Button End----*/}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyWalletHomeScreen;
