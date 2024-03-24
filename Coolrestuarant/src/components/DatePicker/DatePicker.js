import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//Third Party
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';

//Components
import SquareGenericInputField from '../SquareGenericInputField/SquareGenericInputField';

import CalendarSVG2 from '../../assets/icons/generalIcons/dateIcons/calendarSVG2.svg';

//Utils
import globalStyles from '../../assets/styles/globalStyles';
import styles from './style';
import {horizontalScale} from '../../utility/Scale';
import {getDateFormat} from '../../utility/Helper';

const DatePicker = ({style, ...props}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [ref, setRef] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  useEffect(() => {
    if (props.date.length > 0) {
      setDate(new Date(props.date));
    }
  }, [props.date]);

  return (
    <View>
      {props.title.length > 0 && (
        <TouchableOpacity
          onPress={event => {
            setShow(true);
          }}>
          <Text style={[styles.text]}>{props.title}</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        ref={c => {
          setRef(c);
        }}>
        <SquareGenericInputField
          leftIconComponent={<CalendarSVG2 />}
          value={date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          isDisabled={isDisabled}
          onChange={text => {
            setDate(
              date.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
            );
          }}
          leftIconPaddingLeft={horizontalScale(13)}
          leftIconPaddingRight={horizontalScale(-3)}
          onTouchStart={event => {
            if (!show) {
              setShow(true);
              setIsDisabled(true);
              props.scroll.scrollTo({
                x: 0,
                y: event.nativeEvent.pageY + 270,
                animated: true,
                duration: 500,
              });
            }
          }}
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
      {show && (
        <TouchableOpacity
          style={[
            globalStyles.flex,
            globalStyles.flexDirectionRow,
            globalStyles.justifyFlexEnd,
            globalStyles.marginTop10,
          ]}
          onPress={event => {
            setShow(false);
            setIsDisabled(false);
            if (show) {
              props.scroll.scrollTo({
                x: 0,
                y: event.nativeEvent.pageY,
                animated: true,
                duration: 500,
              });
            }
            props.onDateChange(getDateFormat(date));
          }}>
          <Text style={[globalStyles.colorStrongBlue]}>Done</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
/*---- Default Props Start -------*/
DatePicker.defaultProps = {
  date: '',
  onDateChange: () => {},
  scroll: null,
  title: '',
};
/*---- Default Props End -------*/

/*---- Prop Type Expectations Start -------*/
DatePicker.propTypes = {
  date: PropTypes.string,
  onDateChange: PropTypes.func,
  scroll: PropTypes.object,
  title: PropTypes.string,
};
/*---- Prop Type Expectations End -------*/
export default DatePicker;
