import React from 'react';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';

//Components
import Header from '../../../components/Header/Header';
import TitleText from '../../../components/TitleText/TitleText';

//Utils
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';

const TermsOfUse = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        navigation={navigation}
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <ScrollView style={globalStyles.flex}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginTop20,
          ]}>
          {/*------- Title Start -----*/}
          <View>
            <TitleText title={'Privacy Policy'} titleFontWeight={'300'} />
          </View>
          {/*------- Title End -----*/}

          <Text style={[styles.descriptionStyle]}>
            Nulla cursus vitae nisi sed venenatis. Fusce purus eros, imperdiet
            at mattis vel, fringilla a odio. Vestibulum luctus in lorem a
            mattis. Sed euismod tincidunt orci, vitae faucibus ligula
            scelerisque nec. Sed a orci quis lorem maximus accumsan lacinia in
            nisi.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Cras blandit consequat sapien ut cursus. Duis in mollis magna. Sed
            sit amet faucibus nulla. Pellentesque non ex velit.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Nam a nisi eu arcu dictum mattis. Aenean varius justo a sollicitudin
            tincidunt. Nullam congue sed dolor ut vehicula. Sed lobortis et nisl
            id auctor. Nulla cursus vitae nisi sed venenatis. Fusce purus eros,
            imperdiet at mattis vel, fringilla a odio. Vestibulum luctus in
            lorem a mattis. Sed euismod tincidunt orci, vitae faucibus ligula
            scelerisque nec. Sed a orci quis lorem maximus accumsan lacinia in
            nisi.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Cras blandit consequat sapien ut cursus. Duis in mollis magna. Sed
            sit amet faucibus nulla. Pellentesque non ex velit.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Nam a nisi eu arcu dictum mattis. Aenean varius justo a sollicitudin
            tincidunt. Nullam congue sed dolor ut vehicula. Sed lobortis et nisl
            id auctor.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Nulla cursus vitae nisi sed venenatis. Fusce purus eros, imperdiet
            at mattis vel, fringilla a odio. Vestibulum luctus in lorem a
            mattis. Sed euismod tincidunt orci, vitae faucibus ligula
            scelerisque nec. Sed a orci quis lorem maximus accumsan lacinia in
            nisi.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Cras blandit consequat sapien ut cursus. Duis in mollis magna. Sed
            sit amet faucibus nulla. Pellentesque non ex velit.
          </Text>
          <Text style={[styles.descriptionStyle, globalStyles.marginTop10]}>
            Nam a nisi eu arcu dictum mattis. Aenean varius justo a sollicitudin
            tincidunt. Nullam congue sed dolor ut vehicula. Sed lobortis et nisl
            id auctor.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsOfUse;
