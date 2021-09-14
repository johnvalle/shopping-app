import React from "react";
import { BiCart } from "react-icons/bi";
import { Flex, Container, Text, Button, Icon } from "@chakra-ui/react";

import { RootState } from "../../stores";
import { useAppSelector } from "../../hooks";

export default function Navbar() {
  const quantity = useAppSelector((state: RootState) => state.cart.quantity);

  return (
    <Flex
      top="0"
      width="100%"
      height="80px"
      bgColor="white"
      borderBottomWidth="1px"
      borderColor="gray.200"
      alignItems="center"
    >
      <Container maxW="container.xl" paddingX="2rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="md">
            FakeStore
          </Text>
          <Button size="sm" leftIcon={<Icon as={BiCart} />} colorScheme="blue">
            Cart: {quantity}
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
}
