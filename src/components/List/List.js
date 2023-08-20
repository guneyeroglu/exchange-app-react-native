import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { RightArrowIcon } from '../../global/constants/icons/RightArrowIcon';

import styles from './List.style';

export const List = ({ title, contents }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {contents.map((content) => (
        <TouchableOpacity key={content.text} onPress={content.onPress} style={styles.contentButton}>
          <Text style={styles.contentText}>{content.text}</Text>
          <RightArrowIcon size={24} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
