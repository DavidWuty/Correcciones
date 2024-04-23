import React from 'react'
import { Card, Heading, Text } from '@chakra-ui/react'

function ProductCard({nombre,sabor,cantidadml,alcoholica, onClick}) {
  return (
    <Card bg={'#3FD8CA'} p={3} my={"8px"} onClick={onClick}>
        <Heading>{nombre}</Heading>
        <Text>Sabor: {sabor}</Text>
        <Text>{cantidadml}ml</Text>
        <Text fontWeight={900}>{alcoholica?'Bebida alcoholica' : null}</Text>
    </Card>
  )
}

export default ProductCard