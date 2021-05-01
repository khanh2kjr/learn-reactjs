import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import InputField from 'components/form-controls/InputField'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
export default function AddToCartForm({ onAddToCart }) {
  const schema = yup.object().shape({
     quantity: yup.number().min(1, 'Please enter at least 1').required('Please enter quantity')
  })

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema)
  })

  const handleAddToCart = (values) => {}

  return (
    <form onSubmit={form.handleSubmit(handleAddToCart)}>
      <InputField form={form} name="quantity" label="quantity" />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >Thêm</Button>
    </form>
  )
}
