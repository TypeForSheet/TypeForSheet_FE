import { primitiveTokens } from './primitive';

export const colors = {
  brand: {
    primary: primitiveTokens.color.brand.black,
  },

  gray: {
    900: primitiveTokens.color.neutral[900],
    700: primitiveTokens.color.neutral[700],
    500: primitiveTokens.color.neutral[500],
    300: primitiveTokens.color.neutral[300],
    200: primitiveTokens.color.neutral[200],
    100: primitiveTokens.color.neutral[100],
    50: primitiveTokens.color.neutral[50],
    white: primitiveTokens.color.brand.white,
  },

  green: {
    700: primitiveTokens.color.success[700],
    600: primitiveTokens.color.success[600],
    500: primitiveTokens.color.success[500],
    400: primitiveTokens.color.success[400],
    300: primitiveTokens.color.success[300],
    200: primitiveTokens.color.success[200],
    100: primitiveTokens.color.success[100],
    50: primitiveTokens.color.success[50],
  },

  red: {
    700: primitiveTokens.color.error[700],
    600: primitiveTokens.color.error[600],
    500: primitiveTokens.color.error[500],
    400: primitiveTokens.color.error[400],
    300: primitiveTokens.color.error[300],
    200: primitiveTokens.color.error[200],
    100: primitiveTokens.color.error[100],
    50: primitiveTokens.color.error[50],
  },

  orange: {
    700: primitiveTokens.color.warning[700],
    600: primitiveTokens.color.warning[600],
    500: primitiveTokens.color.warning[500],
    400: primitiveTokens.color.warning[400],
    300: primitiveTokens.color.warning[300],
    200: primitiveTokens.color.warning[200],
    100: primitiveTokens.color.warning[100],
    50: primitiveTokens.color.warning[50],
  },
} as const;
