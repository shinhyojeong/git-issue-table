import { Styled } from './styled'
import { TableProps } from './types'

const TEXT_ALIGN_INIT = 'start'

export const Table = <T extends string>({
  headers,
  contents
}: TableProps<T>) => {
  return (
    <Styled.Table>
      <thead>
        <Styled.Headers>
          {headers.map(({ key, name, textAlign }) => (
            <Styled.THeader
              textAlign={textAlign ?? TEXT_ALIGN_INIT}
              key={`th-${key}`}>
              {name}
            </Styled.THeader>
          ))}
        </Styled.Headers>
      </thead>
      <tbody>
        {contents.map((content, idx) => (
          <tr key={`content-${idx}`}>
            {headers.map(({ key, textAlign }) => (
              <Styled.TData
                textAlign={textAlign ?? TEXT_ALIGN_INIT}
                key={`td-${key}`}>
                {content[key] || ''}
              </Styled.TData>
            ))}
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  )
}
