export const fontWeight = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;

export const typography = {
  head1: {
    fontSize: 22,
    lineHeight: 35.2,
    fontWeight: fontWeight.semiBold,
    letterSpacing: 0,
  },

  head2: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: fontWeight.semiBold,
    letterSpacing: -0.4,
  },

  title1: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: fontWeight.bold,
  },

  title2: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeight.semiBold,
  },

  label1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeight.medium,
  },

  body1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: fontWeight.regular,
  },

  body2: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: fontWeight.regular,
  },

  caption1: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: fontWeight.medium,
  },

  caption2: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: fontWeight.regular,
  },
} as const;
