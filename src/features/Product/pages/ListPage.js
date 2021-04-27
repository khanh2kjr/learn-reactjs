import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import productApi from 'api/productApi'
import ProductSkeletonList from 'features/Product/components/ProductSkeletonList'
import React, { useEffect, useState } from 'react'
import ProductFilter from '../components/ProductFilter'
import ProductList from '../components/ProductList'
import ProductPagination from '../components/ProductPagination'
import ProductSort from '../components/ProductSort'

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px'
  },
  right: {
    flex: '1 1 0'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  pb20: {
    paddingBottom: '20px'
  }
}))

export default function ListPage(props) {
  const classes = useStyles()

  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 8,
    _sort: 'salePrice:ASC'
  })
  const [pagination, setPagination] = useState({
    limit: 8,
    total: 10,
    page: 1
  })

  useEffect(() => {
    try {
      const fetchProductList = async () => {
        const response = await productApi.getAll(filters)
        const { data, pagination } = response

        setProductList(data)
        setPagination(pagination)
        setLoading(false)
      }

      fetchProductList()
    } catch (error) {
      console.log('Failed to fetch product list: ', error)
    }
  }, [filters])

  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page
    }))
  }

  const handleSortChange = (newSort) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSort
    }))
  }

  const handleFilterChange = () => {
    
  }

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <Paper elevation={0}>
              <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={0} className={classes.pb20}>
              <Box>
                <ProductSort onSortChange={handleSortChange} currentSort={filters._sort} />
              </Box>
              {loading ? (
                <ProductSkeletonList length={8} />
              ) : (
                <ProductList productList={productList} />
              )}
              <Box className={classes.pagination}>
                <ProductPagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onPageChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
