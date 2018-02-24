import * as React from 'react'
import { range } from '../../../../common/utils/lodash'
import PaginationLink from './components/PaginationLink'

export interface Props {
  activePage: number
  totalPages: number
}

export default function Pagination({ activePage, totalPages }: Props) {
  const navLinks = range(1, totalPages).map(pageNumber => {
    const isActivePage = pageNumber === activePage

    return (
      <PaginationLink
        key={pageNumber}
        active={isActivePage}
        pageNumber={pageNumber}
      />
    )
  })

  return (
    <nav>
      <ul className="pagination">{navLinks}</ul>
    </nav>
  )
}
