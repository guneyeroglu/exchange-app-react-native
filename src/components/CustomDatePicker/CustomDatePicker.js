import { Platform, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { colors } from '../../global/constants/variables/colors';

import styles from './CustomDatePicker.style';

export const CustomDatePicker = ({ value = new Date(), onPressToCancel = () => null, onPressToSubmit = () => null, datePickerVisibility }) => {
  const [date, setDate] = useState(value);

  const onPressToSubmitButton = () => {
    onPressToSubmit(date);
  };

  const CustomDateTimePickerAndroid = () => {
    DateTimePickerAndroid.open({
      value: date,
      locale: 'tr',
      positiveButton: { label: 'Onayla', textColor: colors.black },
      negativeButton: { label: 'İptal', textColor: colors.black },
      onChange: (event, selectedDate) => {
        setDate(selectedDate);

        if (event.type === 'neutralButtonPressed' || event.type === 'set') {
          onPressToSubmitButton();
          onPressToCancel();
        } else {
          onPressToCancel();
        }
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        {Platform.OS === 'ios' && (
          <DateTimePicker style={styles.picker} value={date} display={'spinner'} onChange={(e) => setDate(new Date(e.nativeEvent.timestamp))} />
        )}
        {datePickerVisibility &&
          Platform.OS === 'android' &&
          DateTimePickerAndroid.open({
            value: date,
            locale: 'tr',
            positiveButton: { label: 'Onayla', textColor: colors.black },
            negativeButton: { label: 'İptal', textColor: colors.black },
            onChange: (event, selectedDate) => {
              setDate(selectedDate);

              if (event.type === 'neutralButtonPressed' || event.type === 'set') {
                onPressToSubmitButton();
                onPressToCancel();
              } else {
                onPressToCancel();
              }
            },
          })}
        {Platform.OS === 'ios' && (
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={onPressToCancel}>
              <Text style={styles.text}>İptal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.primary]} onPress={onPressToSubmitButton}>
              <Text style={[styles.text, styles.primaryText]}>Onayla</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
