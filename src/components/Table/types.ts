export type TableProps<T extends string> = {
  headers: {
    textAlign?: string
    key: T
    name: string
  }[]
  contents: Record<T, string>[]
}

export type StyledTHeaderProps = {
  textAlign: string
}
