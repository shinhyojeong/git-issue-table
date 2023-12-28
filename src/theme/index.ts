import { colors } from './colors'
import { opacity } from './opacity'
import { zIndex } from './zIndex'
import { fonts } from './fonts'

export const theme = { colors, opacity, zIndex, fonts } as const

export type Theme = typeof theme
