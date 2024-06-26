/* eslint-disable */
import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

//Third party
import {useSelector} from 'react-redux';

//Components
import AccordionItem from '../../../components/AccordionItem/AccordionItem';
import Header from '../../../components/Header/Header';
import TitlePicture from '../../../components/TitlePicture/TitlePicture';

//Icons - @TODO - Placeholders
import FAQIcon from '../../../assets/icons/supportIcons/faq_mainSVG.svg';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import {screenHeight, screenWidth} from '../../../utility/Scale';

const FAQScreen = ({navigation}) => {
  const FAQList = useSelector(state => state.FAQList);

  /*-------------- function to return list of accordions start ---------*/
  const RenderAccordions = () => {
    const items = [];
    for (const item of FAQList) {
      items.push(
        <AccordionItem title={item.title} description={item.description} />,
      );
    }
    return items;
  };
  /*-------------- function to return list of accordions end ---------*/

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*----- Header Start ----- */}
      <Header
        title={'FAQ'}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*----- Header End ----- */}

      <ScrollView
        style={globalStyles.flex}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.commonScrollViewPadding}>
        <View style={globalStyles.horizontalGeneralPadding}>
          {/*----- Title and Picture Start ----- */}
          <View>
            <TitlePicture
              componentTopPadding={15}
              imageComponent={
                <FAQIcon
                  width={screenWidth * 0.3}
                  height={screenHeight * 0.11}
                />
              }
              titleTopPadding={23}
              title={'FAQ'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
              descriptionTopPadding={10}
              componentBottomPadding={17}
            />
          </View>
          {/*----- Title and Picture End ----- */}

          {/*----- Accordion Container Start ----- */}
          <View style={globalStyles.commonBorder}>
            <RenderAccordions />
          </View>
          {/*----- Accordion Container End ----- */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQScreen;
