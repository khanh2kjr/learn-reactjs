import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.color || 'red'};
`

export default function HomePage() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Product />
    </div>
  )
}
