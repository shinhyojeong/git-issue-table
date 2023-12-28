export const colors = {
  white: '#fff'
} as const

export type Colors = typeof colors
export type ColorKeys = keyof Colors
