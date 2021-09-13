import React from "react";
import { BiCart } from "react-icons/bi";
import { Flex, Container, Text, Button, Icon } from "@chakra-ui/react";

export default function Navbar() {
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
            Cart
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
}
