import { Box, Typography, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'

export default function FilterByPrice({ onPriceChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0
  })

  const handleValueChange = (e) => {
    const value = e.target.value
    const key = e.target.name

    const newValues = {
      ...values,
      [key]: value
    }

    setValues(newValues)
  }

  const handlePriceChange = () => {
    onPriceChange?.(values)
  }

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>
      <Box>
        <TextField
          label="Min"
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleValueChange}
        />
        <TextField
          label="Max"
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleValueChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handlePriceChange}>
        Áp dụng
      </Button>
    </Box>
  )
}
