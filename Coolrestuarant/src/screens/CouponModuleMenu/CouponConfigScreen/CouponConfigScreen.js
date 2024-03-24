import React, {useEffect, useState, useCallback} from 'react';
import {View, ScrollView, SafeAreaView, Text, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

//Third Party
import CheckBox from '@react-native-community/checkbox';

//Components
import BackContinueButtons from '../../WizardModule/WizardHomeScreen/BackContinueButtons';
import BorderDivider from '../../../components/BorderDivider/BorderDivider';
import DatePicker from '../../../components/DatePicker/DatePicker';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Header from '../../../components/Header/Header';
import MultiDropdown from '../../../components/MultiDropdown/MultiDropdown';
import SquareGenericInputField from '../../../components/SquareGenericInputField/SquareGenericInputField';
import TitleText from '../../../components/TitleText/TitleText';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {FONT_FAMILY} from '../../../constants/constants';
import {allColors} from '../../../assets/styles/mainColors';
import {convertToInteger, getDateFormat} from '../../../utility/Helper';

const CouponConfigScreen = props => {
  let dispatch = useDispatch();
  //setup the variables needed to add or edit an existing coupon
  const [couponAmount, setCouponAmount] = useState('0');
  const [couponExpirationDate, setCouponExpirationDate] = useState(new Date());
  const [minSpend, setMinSpend] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [maxSpend, setMaxSpend] = useState('');
  const [ref, setRef] = useState(null);
  const [maxUsagePerCoupon, setMaxUsagePerCoupon] = useState('');
  const [maxUsagePerUser, setMaxUsagePerUser] = useState('');
  const [isUsedWithOtherCoupons, setIsUsedWithOtherCoupons] = useState(false);
  const [isUsedWithSaleItems, setIsUsedWithSaleItems] = useState(true);
  const [availableProductArr, setAvailableProductArr] = useState([]);
  const [availableCategoryArr, setAvailableCategoryArr] = useState([]);

  //coupon type select box setup
  const [couponTypeOpen, couponTypeSetOpen] = useState(false);
  const [couponTypeItems, couponTypeSetItems] = useState([
    {
      label: 'Percentage Discount',
      value: 1,
    },
    {
      label: 'Amount Discount',
      value: 2,
    },
  ]);
  const [couponTypeValue, couponTypeSetValue] = useState(
    couponTypeItems.length > 0 && couponTypeItems[0].value,
  );

  //coupons that could work on specific products select box setup, by default all selected
  const [productOpen, productSetOpen] = useState(false);
  const [productValue, productSetValue] = useState([]);
  const [productItems, productSetItems] = useState(['1']);

  //coupons that could work on specific categories select box setup, by default all selected
  const [categoryOpen, categorySetOpen] = useState(false);
  const [categoryItems, categorySetItems] = useState([]);
  const [categoryValue, categorySetValue] = useState([]);

  //get category list and product list to populate the select boxes
  const menuCategoryList = useSelector(state => state.menuCategoryList);
  const menuCategoryProductList = useSelector(
    state => state.menuCategoryProductList,
  );

  //check if an existing coupon setup is needed to edit the coupon information
  let item =
    props.route.params && props.route.params.hasOwnProperty('item')
      ? props.route.params.item
      : null;
  useEffect(() => {
    if (item) {
      setCouponAmount(item.amount.toString());
      setIsActive(item.isActive);
      setCouponExpirationDate(item.expirationDate);
      setMinSpend(item.minSpend.toString());
      setMaxSpend(item.maxSpend.toString());
      setMaxUsagePerCoupon(item.maxUsagePerCoupon.toString());
      setMaxUsagePerUser(item.maxUsagePerUser.toString());
      setIsUsedWithOtherCoupons(item.isUsedWithOtherCoupons);
      setIsUsedWithSaleItems(item.isUsedWithSaleItems);
      setAvailableProductArr(item.availableProductArr);
      setAvailableCategoryArr(item.availableCategoryArr);
      productSetValue(item.availableProductArr);
      categorySetValue(item.availableCategoryArr);
      couponTypeSetValue(item.couponTypeId);
    }
  }, [item]);

  //when category opens, close product dropdown
  const onCategoryOpen = useCallback(() => {
    productSetOpen(false);
  }, []);

  //when product opens, close category dropdown
  const onProductOpen = useCallback(() => {
    categorySetOpen(false);
  }, []);

  useEffect(() => {
    //when category product list is completely fetches, lets set the product dropdown items
    let products = [];
    menuCategoryProductList.map(value => {
      if (value.hasOwnProperty('productList')) {
        value.productList.map((product, index) => {
          products.push({
            label: product.title,
            productId: product.id,
            categoryId: value.categoryId,
            value: index + 1,
            key: index + 1,
          });
        });
      }
    });
    productSetItems(products);
  }, [menuCategoryProductList]);

  useEffect(() => {
    //when category items are set in the store, lets set the category items dropdown
    categorySetItems(
      menuCategoryList.map(value => {
        return {label: value.title, value: value.id};
      }),
    );
  }, [menuCategoryList]);

  //are we editing or creating a new coupon?
  let pageName = item ? 'Edit Coupon - ' + item.allCouponData : 'Add New';

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      {/*------- Header Start -----*/}
      <Header
        title={pageName}
        navigation={props.navigation}
        onLeftIconPress={() => props.navigation.goBack()}
        onRightIconPress={() => props.navigation.toggleDrawer()}
      />
      {/*------- Header End -----*/}

      <ScrollView
        style={globalStyles.flex}
        ref={c => {
          setRef(c);
        }}>
        <View
          style={[
            globalStyles.horizontalGeneralPadding,
            globalStyles.marginTop20,
          ]}>
          {/*------- Title Start -----*/}
          <View>
            <TitleText
              title={'General'}
              titleFontWeight={'300'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
            />
          </View>
          {/*------- Title End -----*/}

          {/*--- Coupon Type MultiDropdownPicker Start ---- */}
          <View style={globalStyles.marginTop20}>
            <Dropdown
              key={'couponType'}
              open={couponTypeOpen}
              value={couponTypeValue}
              items={couponTypeItems}
              setOpen={couponTypeSetOpen}
              setValue={couponTypeSetValue}
              setItems={couponTypeSetItems}
            />
          </View>
          {/*---Coupon Type MultiDropdownPicker End ---- */}

          {/*----------- Coupon Amount Start --------------*/}
          <View style={{zIndex: -1}}>
            <Text style={styles.titleText}>Coupon Amount</Text>
            <SquareGenericInputField
              value={couponAmount}
              keyboardType={'decimal-pad'}
              onChange={text => setCouponAmount(text)}
            />
          </View>
          {/*----------- Coupon Amount End --------------*/}

          {/*----------- Coupon Expiration Date Start --------------*/}
          <View style={styles.textInputView}>
            <Text style={styles.titleText}>Coupon Expiration Date</Text>
            {/*----------- Date Input Start --------------*/}
            <DatePicker
              date={couponExpirationDate}
              onDateChange={date => {
                setCouponExpirationDate(date);
              }}
              scroll={ref}
            />
            {/*----------- Date Input End --------------*/}
          </View>
          {/*----------- Coupon Expiration Date End --------------*/}

          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            activeAreaAlignment={'right'}
            containerBottomMargin={15}
            containerTopMargin={25}
            isActiveOnly={true}
            activeAreaWidth={79}
            activeAreaColor={allColors.yellow}
          />
          {/*------ Border Divider End ------------*/}

          {/*------- Title Start -----*/}
          <View>
            <TitleText
              title={'Usage Restriction'}
              titleFontWeight={'300'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
            />
          </View>
          {/*------- Title End -----*/}

          {/*----------- Min Spend Start --------------*/}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Minimum Spend</Text>
            <SquareGenericInputField
              value={minSpend}
              placeholder={'20.00'}
              keyboardType={'decimal-pad'}
              onChange={text => setMinSpend(convertToInteger(text))}
            />
          </View>
          {/*----------- Min Spend End --------------*/}

          {/*----------- Max Spend Start --------------*/}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Maximum Spend</Text>
            <SquareGenericInputField
              value={maxSpend}
              keyboardType={'decimal-pad'}
              placeholder={'100.00'}
              onChange={text => setMaxSpend(convertToInteger(text))}
            />
          </View>
          {/*----------- Max Spend End --------------*/}

          <View style={[globalStyles.marginTop20]}>
            {/*-- Checkboxes Start --*/}
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxTitle}>
                Check this box if the coupon cannot be used in conjunction with
                other coupons
              </Text>
              <CheckBox
                style={styles.checkbox}
                boxType="square"
                lineWidth={1.25}
                onFillColor={allColors.yellow}
                tintColor={allColors.borderBlack}
                onCheckColor={allColors.white}
                onTintColor={allColors.yellow}
                value={isUsedWithOtherCoupons}
                onValueChange={() =>
                  setIsUsedWithOtherCoupons(!isUsedWithOtherCoupons)
                }
              />
            </View>
            {/*-- Checkboxes End --*/}
            {/*-- Checkboxes Start --*/}
            <View style={[styles.checkboxContainer, globalStyles.marginTop15]}>
              <Text style={styles.checkboxTitle}>
                Check this box if the coupon should not apply to items on sale
              </Text>
              <CheckBox
                style={styles.checkbox}
                boxType="square"
                lineWidth={1.25}
                onFillColor={allColors.yellow}
                tintColor={allColors.borderBlack}
                onCheckColor={allColors.white}
                onTintColor={allColors.yellow}
                value={isUsedWithSaleItems}
                onValueChange={() =>
                  setIsUsedWithSaleItems(!isUsedWithSaleItems)
                }
              />
            </View>
            {/*-- Checkboxes End --*/}
          </View>
          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            containerBottomMargin={5}
            containerTopMargin={25}
            isActiveOnly={true}
            activeAreaWidth={79}
            activeAreaColor={allColors.yellow}
          />
          {/*------ Border Divider End ------------*/}

          {/*----------- Product Start --------------*/}
          <View style={[globalStyles.marginTop20, {zIndex: 2}]}>
            <Text style={styles.titleText}>Product</Text>
            <MultiDropdown
              key={'productSelect'}
              placeholder={'All Products'}
              open={productOpen}
              onOpen={onProductOpen}
              value={productValue}
              items={productItems}
              setOpen={productSetOpen}
              setValue={productSetValue}
              setItems={productSetItems}
            />
          </View>
          {/*----------- Product End --------------*/}

          {/*----------- Category Start --------------*/}
          <View style={{zIndex: 1}}>
            <Text style={styles.titleText}>Category</Text>
            <MultiDropdown
              key={'categorySelect'}
              placeholder={'All Categories'}
              open={categoryOpen}
              onOpen={onCategoryOpen}
              value={categoryValue}
              items={categoryItems}
              setOpen={categorySetOpen}
              setValue={categorySetValue}
              setItems={categorySetItems}
            />
          </View>
          {/*----------- Category End --------------*/}

          {/*------ Border Divider Start ------------*/}
          <BorderDivider
            activeAreaAlignment={'right'}
            containerBottomMargin={0}
            containerTopMargin={10}
            isActiveOnly={true}
            activeAreaWidth={79}
          />
          {/*------ Border Divider End ------------*/}

          {/*------- Title Start -----*/}
          <View style={globalStyles.marginTop20}>
            <TitleText
              title={'Usage Limits'}
              titleFontWeight={'300'}
              description={
                'Lorem ipsum dolor sit amet, consectetur non adipiscing elit. Eitam ac tempor leo.'
              }
            />
          </View>
          {/*------- Title End -----*/}

          {/*----------- Usage Limit Per Coupon Start --------------*/}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Use Limit Per Coupon</Text>
            <SquareGenericInputField
              value={maxUsagePerCoupon}
              placeholder={'Unlimited'}
              keyboardType={'numeric'}
              onChange={text => setMaxUsagePerCoupon(convertToInteger(text))}
            />
          </View>
          {/*----------- Usage Limit Per Coupon End --------------*/}

          {/*----------- Usage Limit Per User Start --------------*/}
          <View style={globalStyles.marginTop20}>
            <Text style={styles.titleText}>Use Limit Per User</Text>
            <SquareGenericInputField
              value={maxUsagePerUser}
              keyboardType={'numeric'}
              placeholder={'Unlimited'}
              onChange={text => setMaxUsagePerUser(convertToInteger(text))}
            />
          </View>
          {/*----------- Usage Limit Per User End --------------*/}

          {/*----------- Active/Inactive Coupon Switch Start -----*/}
          <View
            style={[
              globalStyles.flexDirectionRow,
              globalStyles.justifySpaceBetween,
              globalStyles.alignItemsCenter,
              globalStyles.marginTop20,
            ]}>
            <Text style={{fontFamily: FONT_FAMILY.RobotoRegular}}>ACTIVE</Text>
            <Switch
              thumbColor={allColors.white}
              trackColor={{true: allColors.yellow}}
              onValueChange={() => setIsActive(!isActive)}
              value={isActive}
            />
          </View>
        </View>
        {/*----------- Active/Inactive Coupon Switch End -----*/}
        {/*----------- Save/Cancel Changes Start -----*/}
        <View style={globalStyles.marginTop50}>
          <BackContinueButtons
            nextTitle={'SAVE'}
            backTitle={'CANCEL'}
            next={() => {
              let save = {
                amount: couponAmount,
                isActive: isActive,
                expirationDate: getDateFormat(
                  new Date(couponExpirationDate.toString()),
                ),
                minSpend: minSpend,
                maxSpend: maxSpend,
                maxUsagePerCoupon: maxUsagePerCoupon,
                maxUsagePerUser: maxUsagePerUser,
                isUsedWithOtherCoupons: isUsedWithOtherCoupons,
                isUsedWithSaleItems: isUsedWithSaleItems,
                availableProductArr: productValue,
                availableCategoryArr: categoryValue,
                couponTypeId: couponTypeValue,
              };
              if (item) {
                save.id = item.id;
                dispatch(Action.editCoupon(save));
              } else {
                save.allCouponData = 'FSQ45WHNEW';
                dispatch(Action.addCoupon(save));
              }
              props.navigation.goBack();
            }}
            back={() => props.navigation.goBack()}
          />
        </View>
        {/*----------- Save/Cancel Changes End -----*/}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CouponConfigScreen;
