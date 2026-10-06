import { primitiveTokens } from './primitive';

export const layout = {
  grid: {
    columns: 5,
    margin: primitiveTokens.unit[20],
    gutter: primitiveTokens.unit[12],
  },

  screenPaddingHorizontal: primitiveTokens.unit[20],
} as const;
