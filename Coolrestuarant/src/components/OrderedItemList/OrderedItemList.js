import React from 'react';
import {View, FlatList} from 'react-native';

//Utils
import styles from './style';

//Third Party
import PropTypes from 'prop-types';

//Components
import FoodItem from '../FoodItem/FoodItem';

const OrderedItemList = ({orderedItems, onPress}) => {
  const renderRestaurantRows = ({item, index}) => {
    return (
      <FoodItem
        key={'ordered_item_' + index}
        title={item.title}
        rating={item.rating}
        description={item.description}
        itemPrice={item.itemPrice}
        ratingNum={item.review}
        imageIconPath={item.imageIconPath}
        itemPurchasedCount={item.itemPurchased}
        activateCount={true}
        onItemPress={() => {
          onPress(index);
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        //performance settings
        //initialNumToRender={1} // Reduce initial render amount
        //maxToRenderPerBatch={1} // Reduce number in each render batch
        // windowSize={7} // Reduce the window size
        showsVerticalScrollIndicator={false}
        data={orderedItems}
        renderItem={renderRestaurantRows}
        ItemSeparatorComponent={() => <View style={styles.gapView} />}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

/*---- Default Props Start -------*/
OrderedItemList.defaultProps = {
  orderedItems: [],
  onPress: () => {},
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
OrderedItemList.propTypes = {
  orderedItems: PropTypes.array,
  onPress: PropTypes.func,
};
/*---- Prop Type Expectations End -------*/

export default OrderedItemList;
