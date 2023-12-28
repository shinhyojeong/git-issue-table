export const zIndex = {
  modal: 100
} as const

export type ZIndex = typeof zIndex
export type ZIndexKeys = keyof ZIndex
