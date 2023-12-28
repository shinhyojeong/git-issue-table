export const colors = {
  // grayScale
  white: '#fff',
  grayScale10: '#F5F8FA',
  grayScale20: '#DFE5EB',
  grayScale30: '#BCC4CC',
  grayScale70: '#5A6066',
  grayScale80: '#363B40',
  grayScale90: '#14171A',

  // blue
  blue40: '#1A8CFF'
} as const

export type Colors = typeof colors
export type ColorKeys = keyof Colors
