import { Styled } from './styled'
import { TableProps } from './types'

export const Table = <T extends string>({
  headers,
  contents
}: TableProps<T>) => {
  return (
    <Styled.Table>
      <thead>
        <Styled.Headers>
          {headers.map(({ key, name, textAlign }) => (
            <Styled.THeader textAlign={textAlign} key={`th-${key}`}>
              {name}
            </Styled.THeader>
          ))}
        </Styled.Headers>
      </thead>
      <tbody>
        {contents.map((content, idx) => (
          <tr key={`content-${idx}`}>
            {headers.map(({ key, textAlign }) => (
              <Styled.TData textAlign={textAlign} key={`td-${key}`}>
                {content[key] || ''}
              </Styled.TData>
            ))}
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  )
}
