import { typography } from '@/styles';

import { InputFieldVisualState } from './InputField.types';

type InputFieldStateColors = {
  background?: string;
  border?: string;
  text?: string;
  icon?: string;
};

export const inputFieldTokens = {
  size: {
    height: 48,
    icon: 24,
  },

  spacing: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 4,
  },

  border: {
    width: 1,
    radius: 8,
  },

  typography: typography.body1,

  figmaColorTokens: {
    default: {
      background: 'color/bg/primary',
      border: 'color/border/tertiary',
      text: 'color/text/tertiary',
      icon: 'color/icon/tertiary',
    },

    focus: {
      background: 'color/bg/primary',
      border: 'color/border/info',
      text: 'color/text/tertiary',
      icon: 'color/icon/tertiary',
    },

    fill: {
      background: 'color/bg/primary',
      border: 'color/border/tertiary',
      text: 'color/text/primary',
      icon: 'color/icon/tertiary',
    },

    error: {
      background: 'color/bg/primary',
      border: 'color/border/error',
      text: 'color/text/primary',
      icon: 'color/icon/tertiary',
    },

    success: {
      background: 'color/bg/primary',
      border: 'color/border/success',
      text: 'color/text/primary',
      icon: 'color/icon/tertiary',
    },

    disabled: {
      background: 'color/bg/disable',
      border: 'color/border/disable',
      text: 'color/text/disable',
      icon: 'color/icon/disable',
    },
  },

  colors: {
    default: {
      background: undefined,
      border: undefined,
      text: undefined,
      icon: undefined,
    },

    focus: {
      background: undefined,
      border: undefined,
      text: undefined,
      icon: undefined,
    },

    fill: {
      background: undefined,
      border: undefined,
      text: undefined,
      icon: undefined,
    },

    error: {
      background: undefined,
      border: undefined,
      text: undefined,
      icon: undefined,
    },

    success: {
      background: undefined,
      border: undefined,
      text: undefined,
      icon: undefined,
    },

    disabled: {
      background: undefined,
      border: undefined,
      text: undefined,
      icon: undefined,
    },
  } satisfies Record<InputFieldVisualState, InputFieldStateColors>,
} as const;
