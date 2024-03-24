/* eslint-disable */
import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

//Third Party
import {useDispatch} from 'react-redux';

//Components
import AddCardDetails from '../../PaymentMethodModule/AddCardDetails/AddCardDetails';
import AddNewPaypal from '../../PaymentMethodModule/AddNewPaypal/AddNewPaypal';
import AddPayoutMethods from '../../PaymentMethodModule/AddPayoutMethods/AddPayoutMethods';
import BackContinueButtons from './BackContinueButtons';
import CompanyInformation from '../../ProfileModule/CompanyInformation/CompanyInformation';
import Header from '../../../components/Header/Header';
import HeaderFlagIcon from '../../../components/icons/HeaderFlagIcon/HeaderFlagIcon';
import PersonalInformation from '../../ProfileModule/PersonalInformation/PersonalInformation';
import QuickRegistrationStepsPopUp from '../../../components/popups/QuickRegistrationStepsPopUp/QuickRegistrationStepsPopUp';
import Steps from './Steps';
import TitleWithUnderline from '../../../components/TitleWithUnderline/TitleWithUnderline';
import WireTransfer from '../../PaymentMethodModule/WireTransfer/WireTransfer';
import WizardSuccessPopUp from '../../../components/popups/WizardSuccessPopUp/WizardSuccessPopUp';

//Utils
import Routes from '../../../navigation/Routes';
import action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import {PAYMENT_METHODS} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {scaleFontSize} from '../../../utility/Scale';

const WizardHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //set step
  const [step, setStep] = useState(1);
  //is the tip visible
  const [isFirstTipVisible, setIsFirstTipVisible] = useState(0);
  //max steps
  const [maxStep, setMaxStep] = useState([1, 2, 3]);
  //button title
  const [buttonTitle, setButtonTitle] = useState('CONTINUE');
  //what payment methods were selected
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(0);
  const ref = useRef();

  if (isFirstTipVisible === 0) {
    setTimeout(() => setIsFirstTipVisible(true), 500);
  }

  //update  the view according to the steps shown
  useEffect(() => {
    if (step === 3) {
      if (selectedPaymentMethod > 0) {
        setButtonTitle('SAVE');
      } else {
        setButtonTitle('CONTINUE');
      }
    }
  }, [step, selectedPaymentMethod]);

  // just run the effect on pathname and/or search change
  useEffect(() => {
    ref.current?.scrollTo({
      top: 0,
      left: 0,
      animated: true,
      duration: 500,
    });
  }, [step, selectedPaymentMethod]);

  const goBackChangeStep = () => {
    if (step >= 3 && selectedPaymentMethod > 0) {
      setSelectedPaymentMethod(0);
    }
  };

  const continueChangeStep = () => {
    setStep(step < maxStep.length + 1 ? step + 1 : step);
  };

  console.log(isFirstTipVisible);

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Step ' + step}
        navigation={navigation}
        leftIcon={<HeaderFlagIcon />}
        rightIcon={
          <TitleWithUnderline
            borderBottomColor={allColors.black}
            titleFontSize={scaleFontSize(12)}
            titleFontWeight={'300'}
            title={'Logout'}
          />
        }
        onLeftIconPress={() => navigation.goBack()}
        onRightIconPress={() => dispatch(action.isLoggedIn(false))}
      />
      {/*------- Header End -----*/}
      <Steps
        maxStep={maxStep}
        step={step}
        onStepPress={(value) => {
          setStep(value);
        }}
      />

      <ScrollView style={[globalStyles.marginTop20]} ref={ref}>
        {/* ---------- STEP 1 Personal Information START ---------- */}
        {step === 1 && <PersonalInformation isNavigationHidden={true} />}
        {/* ---------- STEP 1 Personal Information End ---------- */}

        {/* ---------- STEP 2 Company Information START ---------- */}
        {step === 2 && <CompanyInformation isNavigationHidden={true} />}
        {/* ---------- STEP 2 Company Information END ---------- */}

        {/* ---------- STEP 3 Payout Method START ---------- */}
        {step >= 3 && selectedPaymentMethod === 0 && (
          <AddPayoutMethods
            isNavigationHidden={true}
            setSelectedPaymentMethod={(method) => {
              setSelectedPaymentMethod(method);
            }}
          />
        )}
        {/* ---------- STEP 3 Payout Method End ---------- */}

        {/* ---------- STEP 3 Card Details START ---------- */}
        {step >= 3 && selectedPaymentMethod === PAYMENT_METHODS.CREDIT_CARD && (
          <AddCardDetails isNavigationHidden={true} />
        )}
        {/* ---------- STEP 3 Card Details End ---------- */}

        {/* ---------- STEP 3 PayPal START ---------- */}
        {step >= 3 && selectedPaymentMethod === PAYMENT_METHODS.PAY_PAL && (
          <AddNewPaypal isNavigationHidden={true} />
        )}
        {/* ---------- STEP 3 PayPal End ---------- */}

        {/* ---------- STEP 3 PayPal START ---------- */}
        {step >= 3 &&
          selectedPaymentMethod === PAYMENT_METHODS.WIRE_TRANSFER && (
            <WireTransfer isNavigationHidden={true} />
          )}
        {/* ---------- STEP 3 PayPa; End ---------- */}

        {/*------------ Buttons Start BACK and CONFIRM START--------*/}
        <BackContinueButtons
          back={() => {
            if (!(step === 3 && selectedPaymentMethod > 0)) {
              setStep(step > 1 ? step - 1 : 1);
            }
            goBackChangeStep();
          }}
          next={() => continueChangeStep()}
          nextTitle={buttonTitle}
        />
        {/*------------ Buttons Start BACK and CONFIRM END--------*/}

        {/*------------ Quick Registration Tip Popup START--------*/}
        <QuickRegistrationStepsPopUp
          showPopUp={isFirstTipVisible}
          closePopUp={() => setIsFirstTipVisible(false)}
          getStarted={() => setIsFirstTipVisible(false)}
        />
        {/*------------ Quick Registration Tip Popup End--------*/}

        {/*------------ Quick Registration Tip Popup START--------*/}
        <WizardSuccessPopUp
          showPopUp={step > 3}
          closePopUp={() => {
            setStep(-1);
            navigation.replace(Routes.ProductsTabMenu);
          }}
        />
        {/*------------ Quick Registration Tip Popup End--------*/}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WizardHomeScreen;
