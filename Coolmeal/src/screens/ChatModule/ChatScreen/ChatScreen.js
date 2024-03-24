import React, {useState, useCallback, useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  FlatList,
  Keyboard,
} from 'react-native';

//Third Party
import {useDispatch, useSelector} from 'react-redux';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

//Components
import Header from '../../../components/Header/Header';
import WriteMessageTextInput from '../../../components/WriteMessageTextInput/WriteMessageTextInput';
import MessageItem from '../../../components/MessageItem/MessageItem';

//Utils
import Action from '../../../redux/action';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './style';
import {verticalScale} from '../../../utility/Scale';

//Dummy Data
import DummyChat from '../../../DummyData/ChatDummyData.json';

const ChatScreen = ({navigation}) => {
  const dispatch = useDispatch();

  //get data from messageHistory set in redux store
  const tempMessages = useSelector(state => state.messageHistory);

  const [headerTitle, setHeaderTitle] = useState('Chat Online');
  const [currentMessageValue, setCurrentMessage] = useState('');
  const [messagesArray, setMessagesArray] = useState([]);

  const [keyboardFlag, setKeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
    };
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustResize();
    }
    return () => {
      if (Platform.OS === 'android') {
        AndroidKeyboardAdjust.setAdjustPan();
      }
    };
  }, []);

  //dispatch action to use dummy chat data to be stores in the history
  //it runs after the update of the screen
  useEffect(() => {
    dispatch(Action.storeUserMessages(DummyChat));
    //how to clean up after this effect?
    return () => dispatch(Action.storeUserMessages([]));
  }, [dispatch]);

  //set message array to an updated one
  useEffect(() => {
    setMessagesArray(tempMessages.messages);
  }, [tempMessages]);

  //used to render messages
  const renderMessages = useCallback(({item, index}) =>
    renderMessageItem({item, index}),
  );

  //used to render a single message item
  const renderMessageItem = ({item}) => {
    const isCurrentUser = item.username === 'sabrina';
    return (
      <MessageItem
        key={'message_item_' + item.id}
        currentUser={isCurrentUser}
        messageInformation={item}
      />
    );
  };

  /*
   * Function that is used to send the message
   * by adding it to redux array of user history messages
   * */
  function handleSend() {
    if (currentMessageValue.trim().length > 0) {
      const msgObj = {
        username: 'sabrina',
        dateSent: new Date().getTime(),
        text: currentMessageValue,
        profilePicturePath:
          'https://images.unsplash.com/photo-1601999109332-542b18dbec57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      };
      //store the new message
      dispatch(Action.pushNewMessage(msgObj));
      //set the value of current message back to empty
      setCurrentMessage('');
    }
  }

  //function to set the keyboard flag
  function onKeyboardDidHide() {
    setKeyboard(false);
  }

  //function to set the keyboard flag
  function onKeyboardDidShow() {
    setKeyboard(true);
  }

  return (
    <SafeAreaView style={[globalStyles.bgWhite, globalStyles.flex]}>
      <KeyboardAvoidingView
        style={[globalStyles.bgWhite, globalStyles.flex]}
        behavior={'padding'}
        keyboardVerticalOffset={
          Platform.OS === 'android' ? (keyboardFlag ? 0 : verticalScale(25)) : 0
        }>
        {/*------- Header Start -----*/}
        <Header
          title={headerTitle}
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() => navigation.toggleDrawer()}
        />
        {/*------- Header End -----*/}

        {/*------ Render Message List Start -----------*/}
        <View style={globalStyles.flex}>
          <FlatList
            inverted
            //performance settings
            //initialNumToRender={1} // Reduce initial render amount
            //maxToRenderPerBatch={1} // Reduce number in each render batch
            // windowSize={7} // Reduce the window size
            data={messagesArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMessages}
            extraData={messagesArray}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        {/*------ Render Message List End -----------*/}

        {/*------ Write Message Input Container Start -----------*/}
        <WriteMessageTextInput
          message={currentMessageValue}
          onChangeMessage={text => setCurrentMessage(text)}
          onSendMessage={() => handleSend()}
          selectedDocument={documents =>
            console.log('You selected following documents', documents)
          }
          selectedImage={images =>
            console.log('You selected following images', images)
          }
        />
        {/*------ Write Message Input Container End -----------*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
