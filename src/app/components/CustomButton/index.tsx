import React from 'react';
import {
  Pressable,
  Image,
  Text,
  ViewStyle,
  ImageStyle,
  PressableStateCallbackType,
} from 'react-native';
import {primary, primaryHighLight} from '@constants/colors';

import styles from './styles';

interface Props {
  style?: ViewStyle;
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  icon?: number;
  iconStyle?: ImageStyle;
}

function CustomButton({
  title,
  icon,
  iconStyle,
  onPress,
  disabled,
  style,
}: Props) {
  const getStyle = ({pressed}: PressableStateCallbackType): ViewStyle[] => [
    styles.button,
    style ? style : {},
    {
      backgroundColor: pressed ? primaryHighLight : primary,
    },
  ];
  return (
    <Pressable onPress={onPress} style={getStyle} disabled={disabled}>
      {icon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={[styles.icon, iconStyle]}
        />
      )}
      {title && <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
}

export default CustomButton;
