import React from "react";
import { Box, Container, Table, Text, Th, Tr, Thead, Tbody } from "@chakra-ui/react";

import { CartItem, Navbar } from "../../components";
import { useAppSelector } from "../../hooks";

export default function CartPage() {
  const cart = useAppSelector((state) => state.cart.products);

  return (
    <Box bgColor="gray.50">
      <Navbar />
      <Container maxW="container.xl" minHeight="calc(100vh - 80px)" p="2rem">
        <Text fontSize="4xl" fontWeight="bold">
          Cart
        </Text>
        {cart.length ? (
          <Table bgColor="white" rounded="md">
            <Thead>
              <Tr>
                <Th>Product name</Th>
                <Th isNumeric>Unit Price</Th>
                <Th isNumeric>Quantity</Th>
                <Th isNumeric>Total Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cart.map((product) => (
                <CartItem key={product.id} id={product.id} quantity={product.quantity} />
              ))}
            </Tbody>
          </Table>
        ) : (
          <Text>Cart is empty. :(</Text>
        )}
      </Container>
    </Box>
  );
}
