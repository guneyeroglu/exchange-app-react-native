import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './Modal.style';

export const Modal = ({ open, title, subtitle, onCancelButton, onConfirmButton }) => {
  return (
    <>
      {open && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.hiddenClose} onPress={onCancelButton.onPress} />
          <View style={styles.containerContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.cancel, onCancelButton.buttonStyles ?? {}]} onPress={onCancelButton.onPress}>
                <Text style={[styles.cancelTxt, onCancelButton.textStyles ?? {}]}>{onCancelButton.text}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.confirm, onConfirmButton.buttonStyles ?? {}]} onPress={onConfirmButton.onPress}>
                <Text style={[styles.confirmTxt, onConfirmButton.textStyles ?? {}]}>{onConfirmButton.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
