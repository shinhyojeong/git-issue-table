export type TextAlignType = 'center' | 'start' | 'end'

export type TableProps<T extends string> = {
  headers: {
    textAlign: TextAlignType
    key: T
    name: string
  }[]
  contents: Record<T, string>[]
}

export type StyledTHeaderProps = {
  textAlign: TextAlignType
}
