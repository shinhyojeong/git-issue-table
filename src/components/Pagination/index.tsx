import { useState } from 'react'
import { Icon } from '../Icon'
import { Styled } from './styled'
import { PaginationProps } from './types'

export const Pagination = ({
  totalCount,
  perPage = 10,
  rangeCount = 5
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const maxPage =
    Math.floor(totalCount / perPage) + (totalCount % perPage ? 1 : 0)
  const pageCount = maxPage > rangeCount ? rangeCount : maxPage
  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === maxPage - 1
  const isNextRange = currentPage >= rangeCount
  const nextRangeGap = currentPage - rangeCount + 1
  const pages = Array.from(
    { length: pageCount },
    (_, index) => index + (isNextRange ? nextRangeGap : 0)
  )

  const handleMovePage = (direction: 'prev' | 'next') => {
    let nextPage = currentPage
    const goPrevPage = direction === 'prev' && currentPage > 0
    const goNextPage = direction === 'next' && currentPage < maxPage - 1

    if (goPrevPage) {
      nextPage = currentPage - 1
    }

    if (goNextPage) {
      nextPage = currentPage + 1
    }

    setCurrentPage(nextPage)
  }

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Styled.Container>
      <Styled.IconButtonWrapper
        disabled={isFirstPage}
        onClick={() => handleMovePage('prev')}>
        <Icon type="keyboard_arrow_left" size={24} color="grayScale30" />
      </Styled.IconButtonWrapper>
      {pages.map(page => (
        <Styled.NumberButtonWrapper
          key={page}
          onClick={() => handleChangePage(page)}
          isSelected={page === currentPage}>
          {page + 1}
        </Styled.NumberButtonWrapper>
      ))}
      <Styled.IconButtonWrapper
        disabled={isLastPage}
        onClick={() => handleMovePage('next')}>
        <Icon type="keyboard_arrow_right" size={24} color="grayScale30" />
      </Styled.IconButtonWrapper>
    </Styled.Container>
  )
}
