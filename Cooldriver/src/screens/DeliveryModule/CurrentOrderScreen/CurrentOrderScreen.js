/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';

//Components
import AddressInformationFields from '../../../components/AddressInformationFields/AddressInformationFields';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import CheckboxSubmitGoBackPopUp from '../../../components/popups/CheckboxSubmitGoBackPopUp/CheckboxSubmitGoBackPopUp';
import Contact from '../../../components/Contact/Contact';
import Header from '../../../components/Header/Header';
import LongButton from '../../../components/LongButton/LongButton';
import OrderedItemList from '../../../components/OrderedItemList/OrderedItemList';
import PickupConfirmationPopUp from '../../../components/popups/PickupConfirmationPopUp/PickupConfirmationPopUp';
import ProfileWithBorder from '../../../components/ProfileWithBorder/ProfileWithBorder';

//Utils
import Action from '../../../redux/action';
import Routes from '../../../navigation/Routes';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {BUTTON_TYPE, FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {screenWidth} from '../../../utility/Scale';
import {callNumber} from "../../../utility/Helper";

const TaxView = ({totalPrice, taxPrice}) => {
  return (
    <View>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
        ]}>
        <Text
          style={[
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize16,
          ]}>
          Transportation
        </Text>
        <Text
          style={[
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize16,
          ]}>
          {'$ ' + taxPrice.toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
          globalStyles.marginTop5,
        ]}>
        <Text
          style={[
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize16,
          ]}>
          Tax
        </Text>
        <Text
          style={[
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize16,
          ]}>
          {'$ ' + taxPrice.toFixed(2)}
        </Text>
      </View>
      <View
        style={[
          globalStyles.flexDirectionRow,
          globalStyles.justifySpaceBetween,
          globalStyles.marginTop5,
        ]}>
        <Text
          style={[
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize16,
          ]}>
          {'Merchant Fee '}
        </Text>
        <Text
          style={[
            globalStyles.RobotoCondensedFont300,
            globalStyles.fontSize16,
          ]}>
          {'$ ' + (0.7 * taxPrice).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const CurrentOrderScreen = props => {
  const dispatch = useDispatch();
  const [orderedItems, setOrderedItems] = useState(
    props.route.params.orderDetails.orderedItems,
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [taxPrice, setTaxPrice] = useState(0);
  const [totalPriceWithTax, setTotalPriceWithTax] = useState(0);
  const [
    isPickupConfirmationVisible,
    setIsPickupConfirmationVisible,
  ] = useState(false);
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const hasPickedUpFood = useSelector(state => state.hasPickedUpFood);
  const isGoingToCustomer = useSelector(state => state.isGoingToCustomer);

  useEffect(() => {
    updateItemList();
  }, [orderedItems]);

  useEffect(() => {
    setTaxPrice(totalPrice * 0.12);
  }, [totalPrice]);

  useEffect(() => {
    setTotalPriceWithTax(totalPrice + taxPrice);
  }, [taxPrice, totalPrice]);

  const storeHasPickedUpFood = data =>
    dispatch(Action.storeHasPickedUpFood(data));

  const storeDeliveryConfirmation = () =>
    dispatch(Action.storeDeliveryConfirmation());

  const updateItemList = () => {
    if (Object.keys(orderedItems).length > 0) {
      if (orderedItems.length > 0) {
        let total = 0;
        for (let i = 0; i < orderedItems.length; i++) {
          total += orderedItems[i].deliveryFee;
        }
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
    }
  };

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={'Current Order'}
        rightIcon={
          <View style={styles.helpButtonContainer}>
            <View style={styles.helpButton}>
              <Text style={styles.helpButtonTitle}>HELP</Text>
            </View>
          </View>
        }
        onLeftIconPress={() => props.navigation.goBack()}
        onRightIconPress={() => {
          setIsHelpVisible(true);
        }}
      />
      {/*------- Header End -----*/}

      <ScrollView
        style={[globalStyles.horizontalGeneralPadding, globalStyles.flex]}>
        {/*-------------Profile Picture Start-----------*/}
        <View style={styles.titleView}>
          <ProfileWithBorder
            imagePath={
              'https://images.unsplash.com/photo-1601999109332-542b18dbec57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            }
            imageHeight={screenWidth * 0.14}
            imageWidth={screenWidth * 0.14}
            borderColor={allColors.borderBlack}
          />
        </View>
        {/*-------------Profile Picture End-----------*/}

        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.alignCenter,
            globalStyles.justifyCenter,
          ]}>
          <Text style={styles.ratedText}>Your Customer</Text>
        </View>

        {/*-------------Profile Information Start-------*/}
        <View style={styles.shipperView}>
          <Text style={styles.deliveryManName}>{'Sabrina Lorenstein'}</Text>
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.alignItemsCenter,
            ]}>
            <Text style={[styles.surrenderText]}>
              <Text style={styles.pickupByText}>Pickup By</Text> 3:22 PM
            </Text>
          </View>
        </View>
        {/*-------------Profile Information End-------*/}

        {/*--- Delivery Confirmation Button After Picking Up the Food Start ----*/}
        {hasPickedUpFood && (
          <View style={[globalStyles.marginTop15]}>
            {/*----- Contact Buttons Start -----*/}
            <Contact onMessagePress={() => props.navigation.navigate(Routes.ChatScreen)} onCallPress={() => callNumber('+ 1 774 987 1234')}/>
            {/*----- Contact Buttons End -----*/}

            <View
              style={[globalStyles.marginTop10, globalStyles.marginBottom5]}>
              <LongButton
                title={'DELIVERY CONFIRMATION'}
                titleFontSize={18}
                titleFontColor={allColors.white}
                titleFontWeight={'400'}
                titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                type={
                  isGoingToCustomer
                    ? BUTTON_TYPE.SECONDARY
                    : BUTTON_TYPE.DISABLED
                }
                onPress={() => {
                  //navigation to new surrender act
                  props.navigation.navigate(Routes.SurrenderActScreen, {
                    totalPrice: totalPriceWithTax,
                    onPressConfirm: () => {
                      storeDeliveryConfirmation();
                      dispatch(Action.storeRequestedPreview({}));
                      dispatch(Action.storeCurrentOrder({}));
                      props.navigation.navigate(Routes.DeliveryHomeScreen);
                    },
                  });
                }}
              />

              {/*------ Button  is disabled until the  driver starts going to a customer explanation text Start------*/}
              {!isGoingToCustomer && (
                <Text style={styles.confirmationText}>
                  To confirm delivery first start heading to delivery address
                </Text>
              )}
              {/*------ Button  is disabled until the  driver starts going to a customer explanation text End------*/}
            </View>
          </View>
        )}
        {/*--- Delivery Confirmation Button After Picking Up the Food End ----*/}

        {/*-------------Route Information Start-------*/}
        <Text
          style={[
            globalStyles.RobotoCondensedFont400,
            globalStyles.marginTop15,
          ]}>
          DELIVERY INFORMATION
        </Text>
        {/*-------------Route Information End-------*/}

        {/*-------------Address Information Start-------*/}
        <View style={styles.addressInformationContainer}>
          <AddressInformationFields
            toAddress={'81 Charter Street'}
            fromAddress={'120 Washington Ave.'}
          />
        </View>
        {/*-------------Address Information End-------*/}

        {/*------ Border Divider Start ------------*/}
        <BorderDivider
          containerBottomMargin={20}
          containerTopMargin={10}
          activeAreaWidth={30}
        />
        {/*------ Border Divider End ------------*/}

        {/*-------------Delivery Instruction Start-------*/}
        <View>
          <Text
            style={[
              globalStyles.RobotoCondensedFont400,
              globalStyles.fontSize14,
            ]}>
            DELIVERY NOTE:
          </Text>
          <View style={styles.deliveryInstruction}>
            <Text
              style={[
                globalStyles.RobotoCondensedFont300,
                globalStyles.horizontalPadding20,
              ]}>
              Nulla eu orci rutrum, finibus lectus at, dapibus purus. Ut
              accumsan, massa nec pellentesque fringilla, justo enim feugiat
              odio, ut convallis augue. Ante vel nulla. Quisque ut diam
              sollicitudin, consectetur nisl ut, lacinia libero.
            </Text>
          </View>
        </View>
        {/*-------------Delivery Instruction End-------*/}

        {/*------ Border Divider Start ------------*/}
        <BorderDivider
          containerBottomMargin={20}
          containerTopMargin={10}
          activeAreaWidth={30}
        />
        {/*------ Border Divider End ------------*/}

        {/*------ Ordered Items Information Header Start ------------*/}
        <View
          style={[
            globalStyles.marginTop5,
            globalStyles.marginBottom15,
            globalStyles.flexDirectionRow,
            globalStyles.justifySpaceBetween,
          ]}>
          <Text
            style={[
              globalStyles.RobotoCondensedFont400,
              globalStyles.fontSize14,
            ]}>
            ITEM DETAILS:
          </Text>
          <View style={[globalStyles.flexDirectionRow]}>
            <Text
              style={[
                globalStyles.RobotoCondensedFont300,
                globalStyles.fontSize14,
              ]}>
              Total{' '}
            </Text>
            <Text
              style={[
                globalStyles.RobotoCondensedFont400,
                globalStyles.fontSize14,
              ]}>
              {orderedItems.length + ' '}
            </Text>
            <Text
              style={[
                globalStyles.RobotoCondensedFont300,
                globalStyles.fontSize14,
              ]}>
              item{orderedItems.length > 1 && 's'}
            </Text>
          </View>
        </View>
        {/*------ Ordered Items Information Header End ----------*/}

        {/*------ Ordered Items Information Start ------------*/}
        <View>
          <OrderedItemList
            onPress={index => {
              if (!hasPickedUpFood) {
                orderedItems[index].isActive = !orderedItems[index].isActive;
                setOrderedItems([...orderedItems]);
              }
            }}
            orderedItems={orderedItems}
          />
        </View>
        {/*------ Ordered Items Information Header End ------------*/}

        <Text
          style={[
            globalStyles.RobotoCondensedFont400,
            globalStyles.fontSize15,
            globalStyles.marginTop20,
          ]}>
          TRANSPORTATION FARE
        </Text>

        {/*------ Divider Start -----------*/}
        <BorderDivider
          containerTopMargin={10}
          containerBottomMargin={15}
          activeAreaAlignment={'left'}
          activeAreaWidth={32}
          isActiveOnly={false}
          activeAreaHeight={1}
          activeAreaColor={allColors.yellow}
        />
        {/*------ Divider End -----------*/}

        <TaxView totalPrice={totalPriceWithTax} taxPrice={taxPrice} />

        {/*------ Divider Start -----------*/}
        <BorderDivider
          containerTopMargin={15}
          containerBottomMargin={10}
          activeAreaAlignment={'right'}
          activeAreaWidth={32}
          isActiveOnly={false}
          activeAreaHeight={1}
          activeAreaColor={allColors.yellow}
        />
        {/*------ Divider End -----------*/}

        {/*------Total Price Container Start ------------*/}
        <View
          style={[
            globalStyles.flexDirectionRow,
            globalStyles.justifySpaceBetween,
            globalStyles.marginBottom20,
          ]}>
          <Text
            style={[
              globalStyles.RobotoCondensedFont400,
              globalStyles.fontSize16,
            ]}>
            Total
          </Text>
          <Text
            style={[
              globalStyles.RobotoCondensedFont400,
              globalStyles.fontSize16,
            ]}>
            $ {totalPriceWithTax.toFixed(2)}
          </Text>
        </View>
        {/*------Total Price Container End ------------*/}

        {/*------Picked Up Food From Restaurant Confirmation Start ------------*/}
        {!hasPickedUpFood && (
          <View>
            <Contact onMessagePress={() => props.navigation.navigate(Routes.ChatScreen)} onCallPress={() => callNumber('+ 1 774 987 1234')} />
            <View
              style={[globalStyles.marginTop10, globalStyles.marginBottom20]}>
              <LongButton
                title={'PICK UP CONFIRMATION'}
                titleFontSize={18}
                titleFontColor={allColors.white}
                titleFontWeight={'400'}
                titleFontFamily={FONT_FAMILY.RobotoCondensedRegular}
                type={
                  orderedItems.filter(val => val.isActive).length ===
                  orderedItems.length
                    ? BUTTON_TYPE.SECONDARY
                    : BUTTON_TYPE.DISABLED
                }
                onPress={() => {
                  setIsPickupConfirmationVisible(true);
                }}
              />
              <Text style={styles.confirmationText}>
                To activate the confirmation button, please confirm that you
                have picked up each item by clicking on each one of them
              </Text>
            </View>
          </View>
        )}
        {/*------Picked Up Food From Restaurant Confirmation End ------------*/}

        {/*------Picked Up Confirmation Popup Start ------------*/}
        <PickupConfirmationPopUp
          showPopUp={isPickupConfirmationVisible}
          closePopUp={() => setIsPickupConfirmationVisible(false)}
          getStarted={() => {
            setIsPickupConfirmationVisible(false);
            props.navigation.navigate(Routes.SurrenderActScreen, {
              totalPrice: totalPriceWithTax,
              onPressConfirm: () => {
                storeHasPickedUpFood(true);
              },
            });
          }}
        />
        {/*------Picked Up Confirmation Popup End ------------*/}

        {/*------------ Help Popup START--------*/}
        {isHelpVisible && (
          <CheckboxSubmitGoBackPopUp
            showPopUp={isHelpVisible}
            closePopUp={() => {
              setIsHelpVisible(false);
            }}
            title={'Help'}
            checkboxLabelArr={[
              'I have an emergency',
              'Cannot reach the customer',
              'Health Problems',
              'Other',
            ]}
            getStarted={() => {
              setIsHelpVisible(false);
              dispatch(Action.storeRequestedPreview({}));
              dispatch(Action.storeDeliveryConfirmation());
              props.navigation.setParams({totalPrice: null});
              props.navigation.navigate(Routes.DeliveryHomeScreen);
            }}
          />
        )}
        {/*------------ Help Popup End--------*/}
      </ScrollView>
    </SafeAreaView>
  );
};
/*---- Prop Type Expectations End -------*/
export default CurrentOrderScreen;
