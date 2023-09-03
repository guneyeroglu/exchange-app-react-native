import { Platform, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './CustomDatePicker.style';

export const CustomDatePicker = ({ value = new Date(), onPressToCancel = () => null, onPressToSubmit = () => null, datePickerVisibility = false }) => {
  const [date, setDate] = useState(value);
  const [show, setShow] = useState(datePickerVisibility);

  const onPressToSubmitButton = () => {
    onPressToSubmit(date);
  };

  const handleAndroidChange = (event, _selectedDate) => {
    setShow(false);
    if (event) {
      setDate(new Date(event.nativeEvent.timestamp));
      onPressToSubmit(new Date(event.nativeEvent.timestamp));
    }
  };

  return (
    <>
      {Platform.OS === 'ios' ? (
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <DateTimePicker style={styles.picker} value={date} display={'spinner'} onChange={(e) => setDate(new Date(e.nativeEvent.timestamp))} />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={onPressToCancel}>
                <Text style={styles.text}>İptal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.primary]} onPress={onPressToSubmitButton}>
                <Text style={[styles.text, styles.primaryText]}>Onayla</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        show && <DateTimePicker display='default' value={date} mode='date' onChange={handleAndroidChange} />
      )}
    </>
  );
};
