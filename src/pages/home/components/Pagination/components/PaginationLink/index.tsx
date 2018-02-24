import * as React from 'react'
import { classNames } from '../../../../../../common/utils'

export interface Props {
  active?: boolean
  pageNumber: number
}

export default function PaginationLink({ pageNumber, active = false }: Props) {
  const containerClassName = classNames('page-item', { active })

  return (
    <li className={containerClassName}>
      <a className="page-link" href="">
        {pageNumber}
      </a>
    </li>
  )
}
