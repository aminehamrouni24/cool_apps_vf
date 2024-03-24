import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

//Third Party
import {useDispatch} from 'react-redux';

///Utils
import globalStyles from '../../assets/styles/globalStyles';
import {
  ENGLISH_LANGUAGE,
  GEORGIAN_LANGUAGE,
  RUSSIAN_LANGUAGE,
  TURKISH_LANGUAGE,
} from '../../constants/constants';
import Routes from '../../navigation/Routes';
import Action from '../../redux/action';

//Publicly Available Icons that Can be Used for Commercial Purposes
import Flags from '../../components/icons/FlagIcons/FlagIcons';
import ArrowRightLongIcon from '../../components/icons/ArrowRightLongIcon/ArrowRightLongIcon';

const ChooseLanguage = ({navigation}) => {
  // Dispatch Constant for Redux Dispatch Action
  const dispatch = useDispatch();

  // list of available languages
  const languagesArray = [
    {
      title: 'English',
      language: ENGLISH_LANGUAGE,
    },
    {
      title: 'Georgian',
      language: GEORGIAN_LANGUAGE,
    },
    {
      title: 'Russian',
      language: RUSSIAN_LANGUAGE,
    },
    {
      title: 'Turkish',
      language: TURKISH_LANGUAGE,
    },
  ];

  //  Store Language in redux
  const handleChoosingLanguage = value => {
    dispatch(Action.storeSelectedLanguage(value));
    navigation.navigate(Routes.CreateAccountSlideshow);
  };

  return (
    <ScrollView
      style={[
        globalStyles.bgWhite,
        globalStyles.flex,
        globalStyles.height100,
        globalStyles.horizontalGeneralPadding,
      ]}>
      {languagesArray.map((value, index) => {
        return (
          <TouchableOpacity
            key={'choice_of_language_' + index}
            onPress={() => {
              handleChoosingLanguage(value.language);
            }}>
            {/*----- Single Language Option Item Start ------*/}
            <View
              style={[
                globalStyles.flexDirectionRow,
                globalStyles.justifySpaceBetween,
                globalStyles.alignItemsCenter,
                globalStyles.marginTop15,
                globalStyles.paddingBottom15,
                {
                  borderBottomColor: '#00000010',
                  borderBottomWidth: 1,
                },
              ]}>
              <View
                style={[
                  globalStyles.flexDirectionRow,
                  globalStyles.alignItemsCenter,
                ]}>
                <Flags chosenLanguage={value.language} />
                <Text
                  style={[
                    globalStyles.marginLeft30,
                    globalStyles.RobotoCondensedFont300,
                  ]}>
                  {value.title}
                </Text>
              </View>
              <ArrowRightLongIcon />
            </View>
            {/*----- Single Language Option Item End ------*/}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ChooseLanguage;
