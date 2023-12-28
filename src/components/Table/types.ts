export type TableProps<T extends string> = {
  headers: {
    textAlign?: string
    key: T
    name: string
  }[]
  contents: Record<T, string | number>[]
}

export type StyledTHeaderProps = {
  textAlign: string
}
