import styled from '@emotion/styled'
import { Button, Icon, Pagination, Table } from '~/components'

const mock = [
  {
    textAlign: 'start',
    key: 'number',
    name: '번호'
  },
  {
    textAlign: 'start',
    key: 'title',
    name: '제목'
  },
  {
    textAlign: 'center',
    key: 'writer',
    name: '작성자'
  },
  {
    textAlign: 'center',
    key: 'createAt',
    name: '작성일'
  },
  {
    textAlign: 'center',
    key: 'lastDate',
    name: '수정일'
  },
  {
    textAlign: 'center',
    key: 'commentCount',
    name: '코멘트 수'
  }
]
const mocks = Array.from({ length: 10 }, (_, idx) => ({
  number: `${idx}`,
  title: `제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 ${idx}`,
  writer: '작성자ㅏㅏㅏㅏㅏㅏㅏ',
  createAt: '2023-12-25',
  lastDate: '2023.10.23',
  commentCount: `${idx}`
}))

export const Home = () => {
  return (
    <Page>
      <Divider />
      <Title>이슈정리</Title>
      <ButtonsContainer>
        <Button shape="outline" radius={32}>
          이슈 상태 <Icon type="keyboard_arrow_down" />
        </Button>
        <Button radius={32}>
          작성일 순 <Icon type="keyboard_arrow_down" />
        </Button>
      </ButtonsContainer>
      <TableWrapper>
        <Table headers={mock} contents={mocks} />
      </TableWrapper>
      <PaginationWrapper>
        <Pagination totalCount={100} />
      </PaginationWrapper>
    </Page>
  )
}

const Page = styled.div`
  max-width: 1040px;
  margin: 72px auto;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayScale20};
  margin-bottom: 32px;
`

const Title = styled.p`
  margin-bottom: 32px;

  ${({ theme }) => theme.fonts.title6B}
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TableWrapper = styled.div`
  margin: 24px 0 24px;
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`
