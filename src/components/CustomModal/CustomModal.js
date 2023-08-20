import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { CloseCircleIcon } from '../../global/constants/icons';

import styles from './CustomModal.style';

export const CustomModal = ({ open, title, subtitle, onCancelButton, onConfirmButton, onClose, showCloseIcon = false }) => {
  return (
    <>
      {open && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.hiddenClose} onPress={onClose ?? onCancelButton.onPress} />
          <View style={styles.containerContent}>
            {showCloseIcon && (
              <TouchableOpacity style={styles.closeIcon} onPress={onClose ?? onCancelButton.onPress}>
                <CloseCircleIcon size={24} />
              </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            {(onCancelButton || onConfirmButton) && (
              <View style={styles.buttons}>
                {onCancelButton && (
                  <TouchableOpacity style={[styles.cancel, onCancelButton.buttonStyles ?? {}]} onPress={onCancelButton.onPress}>
                    <Text style={[styles.cancelTxt, onCancelButton.textStyles ?? {}]}>{onCancelButton.text}</Text>
                  </TouchableOpacity>
                )}
                {onConfirmButton && (
                  <TouchableOpacity style={[styles.confirm, onConfirmButton.buttonStyles ?? {}]} onPress={onConfirmButton.onPress}>
                    <Text style={[styles.confirmTxt, onConfirmButton.textStyles ?? {}]}>{onConfirmButton.text}</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};
