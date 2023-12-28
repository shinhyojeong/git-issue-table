import { colors } from './colors'
import { opacity } from './opacity'
import { zIndex } from './zIndex'

export const theme = { colors, opacity, zIndex } as const

export type Theme = typeof theme
