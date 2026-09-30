import { ReactNode } from 'react';
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type InputFieldStatus = 'default' | 'error' | 'success';

export type InputFieldVisualState = 'default' | 'focus' | 'fill' | 'error' | 'success' | 'disabled';

export type InputFieldProps = TextInputProps & {
  status?: InputFieldStatus;
  disabled?: boolean;

  renderRightIcon?: (color?: string) => ReactNode;
  onPressRightIcon?: () => void;
  rightIconAccessibilityLabel?: string;

  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
};
