import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import { useRouteMatch } from 'react-router'
import AddToCartForm from '../components/AddToCartForm'
import ProductInfo from '../components/ProductInfo'
import ProductThumbnail from '../components/ProductThumbnail'
import useProductDetail from './../hooks/useProductDetail'

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5)
  }
}))

export default function DetailPage() {
  const classes = useStyles()

  const math = useRouteMatch()
  const { params } = math
  const { productId } = params

  const { product, loading } = useProductDetail(productId)

  if (loading) {
    return 'Loading'
  }

  const handleAddToCart = (values) => {
    console.log(values)
  }
  
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onAddToCart={handleAddToCart} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}
