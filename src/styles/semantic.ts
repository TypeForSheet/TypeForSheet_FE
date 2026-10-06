import { primitiveTokens } from './primitive';

export const semanticTokens = {
  color: {
    text: {
      primary: primitiveTokens.color.neutral[900],
      secondary: primitiveTokens.color.neutral[700],
      tertiary: primitiveTokens.color.neutral[500],
      disabled: primitiveTokens.color.neutral[300],
      inverse: primitiveTokens.color.brand.white,
    },

    icon: {
      primary: primitiveTokens.color.brand.black,
      secondary: primitiveTokens.color.neutral[700],
      tertiary: primitiveTokens.color.neutral[500],
      disabled: primitiveTokens.color.neutral[300],
      destructive: primitiveTokens.color.error[500],
      inverse: primitiveTokens.color.brand.white,
    },

    background: {
      primary: primitiveTokens.color.neutral[50],
      secondary: primitiveTokens.color.brand.white,
      tertiary: primitiveTokens.color.neutral[100],
      destructive: primitiveTokens.color.error[50],
      inverse: primitiveTokens.color.neutral[700],
    },

    border: {
      strong: primitiveTokens.color.brand.black,
      default: primitiveTokens.color.neutral[100],
      subtle: primitiveTokens.color.neutral[200],
      destructive: primitiveTokens.color.error[500],
      inverse: primitiveTokens.color.brand.white,
    },

    action: {
      primary: primitiveTokens.color.brand.black,
      pressed: primitiveTokens.color.neutral[700],
      onPrimary: primitiveTokens.color.brand.white,
      disabled: primitiveTokens.color.neutral[100],
    },

    status: {
      success: primitiveTokens.color.success[500],
      error: primitiveTokens.color.error[500],
      warning: primitiveTokens.color.warning[500],
    },
  },

  radius: {
    button: primitiveTokens.unit[32],
    thumbnail: primitiveTokens.unit[20],
    card: primitiveTokens.unit[16],
  },
} as const;
