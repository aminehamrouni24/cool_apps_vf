/* eslint-disable */
import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

//Third Party
import {useDispatch} from 'react-redux';

//Components
import AddCardDetails from "../../PaymentMethodModule/AddCardDetails/AddCardDetails";
import AddNewPaypal from "../../PaymentMethodModule/AddNewPaypal/AddNewPaypal";
import AddPayoutMethods from "../../PaymentMethodModule/AddPayoutMethods/AddPayoutMethods";
import BackContinueButtons from './BackContinueButtons';
import BikeRegistrationScreen from '../../VehicleRegistrationModule/BikeRegistrationScreen/BikeRegistrationScreen';
import CarRegistrationScreen from '../../VehicleRegistrationModule/CarRegistrationScreen/CarRegistrationScreen';

import CompanyInformation from '../../ProfileModule/CompanyInformation/CompanyInformation';
import DriversLicense from '../../ProfileModule/DriversLicense/DriversLicense';
import PersonalInformation from '../../ProfileModule/PersonalInformation/PersonalInformation';

//components
import Header from '../../../components/Header/Header';
import HeaderFlagIcon from '../../../components/icons/HeaderFlagIcon/HeaderFlagIcon';
import ChooseVehicleType from './ChooseVehicleType';
import QuickRegistrationStepsPopUp from '../../../components/popups/QuickRegistrationStepsPopUp/QuickRegistrationStepsPopUp';
import RegistrationInformation from './RegistrationInformation';
import Steps from './Steps';
import TitleWithUnderline from '../../../components/TitleWithUnderline/TitleWithUnderline';
import WireTransfer from "../../PaymentMethodModule/WireTransfer/WireTransfer";
import WizardSuccessPopUp from "../../../components/popups/WizardSuccessPopUp/WizardSuccessPopUp";

//Utils
import Routes from "../../../navigation/Routes";
import action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import {PAYMENT_METHODS} from "../../../constants/constants";
import {allColors} from '../../../assets/styles/mainColors';
import {scaleFontSize, verticalScale} from '../../../utility/Scale';

const WizardHomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //set step
  const [step, setStep] = useState(1);
  //is the tip visible
  const [isFirstTipVisible, setIsFirstTipVisible] = useState(true);
  //are save buttons visible
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);
  //max steps
  const [maxStep, setMaxStep] = useState([1, 2, 3, 4, 5]);
  //is a company or an individual
  const [isCompany, setIsCompany] = useState(false);
  //what type of account ?
  const [isAccountTypeChosen, setIsAccountTypeChosen] = useState(false);
  //is vehicle type chosen?
  const [isVehicleTypeChosen, setIsVehicleTypeChosen] = useState(false);
  //is vehicle type bike?
  const [isVehicleTypeBike, setIsVehicleTypeBike] = useState(false);
  //button title
  const [buttonTitle, setButtonTitle] = useState('CONTINUE');
  //what payment methods were selected
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(0)
  const scroll = React.createRef();
  const [ref, setRef] = useState(null);

  //update  the view according to the steps shown
  useEffect(() => {
    if (step === 1) {
      if (!isAccountTypeChosen) {
        setAreButtonsVisible(false);
      } else {
        setAreButtonsVisible(true);
      }
      setIsCompany(false);
      setIsVehicleTypeChosen(false);
    } else if (step === 2) {
      setAreButtonsVisible(true);
      setIsCompany(true);
      setIsVehicleTypeChosen(false);
    } else if (step === 3) {
      if (isVehicleTypeChosen) {
        setAreButtonsVisible(true);
      } else {
        setAreButtonsVisible(false);
      }
      setIsCompany(false);
    } else if (step === 4) {
      setAreButtonsVisible(true);
      setIsCompany(false);
      setIsVehicleTypeChosen(false);
    }
    else if(step ===5) {
      if(selectedPaymentMethod > 0){
        setButtonTitle('SAVE');
      }
      else{
        setButtonTitle('CONTINUE')
      }
    }
  }, [step, isAccountTypeChosen,selectedPaymentMethod]);

  // just run the effect on pathname and/or search change
  useEffect(() => {
    if(scroll != null && scroll.current !== null) {
      scroll.current.scrollTo({
        top: 0,
        left: 0,
        animated: true,
        duration: 500,
      });
    }
  }, [step]);

  const goBackChangeStep = () => {
    if (step === 1 && isAccountTypeChosen) {
      setIsAccountTypeChosen(false);
    } else if (step === 2) {
      setIsAccountTypeChosen(false);
    } else if (step === 3) {
      if (isVehicleTypeChosen) {
        setIsVehicleTypeChosen(false);
        setAreButtonsVisible(false)
      }
    }
    else if(step>=5 && selectedPaymentMethod > 0){
        setSelectedPaymentMethod(0);
    }
  };

  const continueChangeStep = () => {
    setStep(step < maxStep.length + 1 ? step + 1 : step);
  };



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
        onStepPress={value => {
          if (value === 1) {
            setIsAccountTypeChosen(false);
          }
          setStep(value);
        }}
      />

      <ScrollView style={[globalStyles.marginTop20]} ref={c => setRef(c)}>

        {/* ---------- STEP 1 Personal Information START ---------- */}
        {isAccountTypeChosen && step === 1 && !isCompany && (
          <PersonalInformation isNavigationHidden={true} />
        )}
        {/* ---------- STEP 1 Personal Information End ---------- */}

        {/* ---------- STEP 1 Registration Information START ---------- */}
        {step === 1 && !isAccountTypeChosen && (
          <RegistrationInformation
            onCompanyInformationPress={() => {
              setStep(step + 1);
              setIsAccountTypeChosen(true);
            }}
            onPersonalInformationPress={() => {
              setIsAccountTypeChosen(true);
            }}
          />
        )}
        {/* ---------- STEP 1 Registration Information END ---------- */}

        {/* ---------- STEP 2 Company Information START ---------- */}
        {isCompany && step === 2 && (
          <CompanyInformation isNavigationHidden={true} />
        )}
        {/* ---------- STEP 2 Company Information END ---------- */}

        {/* ---------- STEP 3 Choose vehicle Type START ---------- */}
        {step === 3 && !isVehicleTypeChosen && (
          <ChooseVehicleType
            onBikePress={() => {
              setIsVehicleTypeChosen(true);
              setAreButtonsVisible(true);
              setIsVehicleTypeBike(true);
            }}
            onCarPress={() => {
              setIsVehicleTypeChosen(true);
                setAreButtonsVisible(true);
              setIsVehicleTypeBike(false);
            }}
          />
        )}
        {/* ---------- STEP 3 Choose vehicle Type END ---------- */}

        {/* ---------- STEP 3 Bike START ---------- */}
        {step === 3 && isVehicleTypeChosen && isVehicleTypeBike && (
          <View
            style={{
              marginTop: verticalScale(-50),
              marginBottom: verticalScale(20),
            }}>
            <BikeRegistrationScreen isNavigationHidden={true} />
          </View>
        )}
        {/* ---------- STEP 3 Bike End ---------- */}

        {/* ---------- STEP 3 Car START ---------- */}
        {step === 3 && isVehicleTypeChosen && !isVehicleTypeBike && (
          <View
            style={{
              marginTop: verticalScale(-50),
              marginBottom: verticalScale(20),
            }}>
            <CarRegistrationScreen isNavigationHidden={true} />
          </View>
        )}
        {/* ---------- STEP 3 Car End ---------- */}

        {/* ---------- STEP 4 Driver's License START ---------- */}
        {step === 4 && <DriversLicense isNavigationHidden={true} />}
        {/* ---------- STEP 4 Driver's License End ---------- */}

        {/* ---------- STEP 5 Payout Method START ---------- */}
        {step >= 5 && selectedPaymentMethod === 0 && <AddPayoutMethods isNavigationHidden={true} setSelectedPaymentMethod={(method) => {
          setSelectedPaymentMethod(method)
        }}/>}
        {/* ---------- STEP 5 Payout Method End ---------- */}

        {/* ---------- STEP 5 Card Details START ---------- */}
        {step >= 5 && selectedPaymentMethod === PAYMENT_METHODS.CREDIT_CARD && <AddCardDetails isNavigationHidden={true} />}
        {/* ---------- STEP 5 Card Details End ---------- */}

        {/* ---------- STEP 5 PayPal START ---------- */}
        {step >= 5 && selectedPaymentMethod === PAYMENT_METHODS.PAY_PAL && <AddNewPaypal isNavigationHidden={true} />}
        {/* ---------- STEP 5 PayPa; End ---------- */}

        {/* ---------- STEP 5 PayPal START ---------- */}
        {step >= 5 && selectedPaymentMethod === PAYMENT_METHODS.WIRE_TRANSFER && <WireTransfer isNavigationHidden={true} />}
        {/* ---------- STEP 5 PayPa; End ---------- */}

        {/*------------ Buttons Start BACK and CONFIRM START--------*/}
        {areButtonsVisible && (
          <BackContinueButtons
            back={() => {
              if (!(step === 3 && isVehicleTypeChosen) && !(step===5 && selectedPaymentMethod > 0)) {
                setStep(step > 1 ? step - 1 : 1);
              }
              goBackChangeStep();
            }}
            next={() => continueChangeStep()}
            title={buttonTitle}
          />
        )}
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
            showPopUp={step > 5}
            closePopUp={()=>{
              setStep(-1);
              navigation.replace(Routes.DeliveryTabMenu)
            }}
        />
        {/*------------ Quick Registration Tip Popup End--------*/}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WizardHomeScreen;
