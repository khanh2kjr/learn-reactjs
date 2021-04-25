import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.color || 'red'};
`

export default function HomePage() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Title color="green">Home page</Title>
    </div>
  )
}
