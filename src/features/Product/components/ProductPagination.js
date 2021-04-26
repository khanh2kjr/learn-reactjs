import { Pagination } from '@material-ui/lab'
import React from 'react'

export default function ProductPagination(props) {
  const { count, page, onPageChange } = props

  const handlePageChange = (e, page) => {
    onPageChange?.(e, page)
  }

  return (
    <Pagination color="primary" count={count} page={page} onChange={handlePageChange} />
  )
}
