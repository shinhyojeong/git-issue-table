import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import {
  Button,
  Icon,
  Pagination,
  Table,
  IssueModal,
  SortModal
} from '~/components'
import { IssueType } from '~/components/IssueModal/types'
import { SortType } from '~/components/SortModal/types'
import { useModal } from '~/hooks'
import { getIssues } from '~/apis'

const issueTableHeaders = [
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
    key: 'userId',
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
    key: 'comments',
    name: '코멘트 수'
  }
]

type FilterOption = {
  state: IssueType
  sort: SortType
}

type Issue = {
  number: number
  userId: string
  title: string
  createdAt: string
  updatedAt: string
  comments: number
}

export const Home = () => {
  const filterStateModal = useModal()
  const filterSortModal = useModal()
  const [page, setPage] = useState(1)
  const [issues, setIssues] = useState<Issue[]>([])
  const [filterOption, setFilterOption] = useState<FilterOption>({
    state: 'open',
    sort: 'created'
  })

  const handleApplyFilter = async (
    type: 'state' | 'sort',
    value: IssueType | SortType
  ) => {
    const newFilterOption = {
      ...filterOption,
      [type]: value
    }
    setFilterOption(newFilterOption)
    fetchIssues(newFilterOption)

    filterStateModal.close()
    filterSortModal.close()
  }

  const fetchIssues = async (newFilterOption: FilterOption) => {
    try {
      const res = await getIssues({
        ...newFilterOption,
        per_page: 10,
        page
      })

      const newIssues = res.map(
        ({ number, user, title, created_at, updated_at, comments }) => ({
          number,
          userId: user.login,
          title,
          createdAt: created_at,
          updatedAt: updated_at,
          comments
        })
      )

      setIssues(newIssues)
    } catch (e) {
      console.error('이슈를 가져오는데 실패했습니다.')
    }
  }

  useEffect(() => {
    fetchIssues(filterOption)
  }, [])

  const handleChangePage = (page: number) => {
    setPage(page)
  }

  return (
    <>
      <Page>
        <Divider />
        <Title>이슈정리</Title>
        <ButtonsContainer>
          <Button shape="outline" radius={32} onClick={filterStateModal.open}>
            이슈 상태 <Icon type="keyboard_arrow_down" />
          </Button>
          <Button radius={32} onClick={filterSortModal.open}>
            작성일 순 <Icon type="keyboard_arrow_down" />
          </Button>
        </ButtonsContainer>
        <TableWrapper>
          <Table headers={issueTableHeaders} contents={issues} />
        </TableWrapper>
        <PaginationWrapper>
          <Pagination totalCount={100} onChangePage={handleChangePage} />
        </PaginationWrapper>
      </Page>
      <IssueModal
        currentIssue={filterOption.state}
        isOpen={filterStateModal.isOpen}
        onClickApply={issue => handleApplyFilter('state', issue)}
      />
      <SortModal
        isOpen={filterSortModal.isOpen}
        currentSort={filterOption.sort}
        onChangeSort={sort => handleApplyFilter('sort', sort)}
      />
    </>
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
