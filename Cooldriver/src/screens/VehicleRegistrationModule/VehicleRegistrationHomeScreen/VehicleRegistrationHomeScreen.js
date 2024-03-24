import React from 'react';
import {View} from 'react-native';

//Third Party
import {SafeAreaView} from 'react-native-safe-area-context';

//Components
import ArrowRightLongIcon from '../../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';
import Header from '../../../components/Header/Header';
import SquareListIcon from '../../../components/SquareListIcon/SquareListIcon';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

import VehicleRegistrationIcon from '../../../assets/images/placeholders/300x201.svg';

//Utils
import Routes from '../../../navigation/Routes.js';
import globalStyles from '../../../assets/styles/globalStyles';
import {FONT_FAMILY} from '../../../constants/constants';

const VehicleRegistrationHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        navigation={navigation}
        title={'Vehicle Registration'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}
      <View style={globalStyles.flex}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*-----Page Title Start----*/}
          <View>
            <TitlePicture
              componentTopPadding={44}
              imageComponent={<VehicleRegistrationIcon />}
              titleTopPadding={20}
              title={'Vehicle Registration'}
              titleFontSize={20}
              titleFontFamily={FONT_FAMILY.RobotoCondensedLight}
              description={
                'Write some description here about uploading your vehicle image.'
              }
              descriptionTopPadding={8}
              touchAllowed={true}
              componentBottomPadding={22}
            />
          </View>
          {/*-----Page Title End----*/}
          <View>
            {/*---- Bike Registration Button Start ---- */}
            <SquareListIcon
              showBorder={true}
              onPress={() => navigation.navigate(Routes.BikeRegistrationScreen)}
              title={'Bike'}
              leftIconRightPadding={0}
              leftIconLeftPadding={26}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*---- Bike Registration Button End ---- */}

            {/*---- Car Registration Button Start ---- */}
            <SquareListIcon
              containerTopPadding={10}
              showBorder={true}
              onPress={() => navigation.navigate(Routes.CarRegistrationScreen)}
              title={'Car'}
              leftIconRightPadding={0}
              leftIconLeftPadding={26}
              rightIconComponent={<ArrowRightLongIcon />}
            />
            {/*---- Car Registration Button End ---- */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VehicleRegistrationHomeScreen;
