import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { useProduct } from "../../hooks";

type ProductPageParams = {
  id: string;
};

export default function Product() {
  const { id } = useParams<ProductPageParams>();
  const product = useProduct(Number(id));

  return (
    <Box bgColor="blue.50">
      <Container maxW="container.xl" minHeight="100vh" p="2rem">
        <Text fontSize="4xl" fontWeight="bold" pt="2rem">
          Products
        </Text>

        {product.isLoading && <Text>Loading...</Text>}

        {!product.isLoading && (
          <Breadcrumb spacing="8px" separator=">">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href={`/products/${product.data?.data?.category}`}>
                {product.data?.data?.category}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={`/products/${product.data?.data?.id}`}>
                {product.data?.data?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        )}

        {!product.isLoading && (
          <Flex bgColor="white" my="2rem" p="1.5rem">
            <Flex width="50%" height="400px" justifyContent="center">
              <Image
                width="300px"
                height="auto"
                objectFit="contain"
                src={product.data?.data?.image}
              />
            </Flex>
            <Box width="50%">
              <Text fontSize="xl" fontWeight="bold">
                {product.data?.data?.title}
              </Text>
              <Text>{`Category: ${product.data?.data?.category}`}</Text>
              <Text>{product.data?.data?.description}</Text>
              <Text>{`${product.data?.data?.rating?.rate} (${product.data?.data?.rating.count})`}</Text>
              <FormControl id="amount" maxWidth={{ sm: "100%", md: "100px" }}>
                <FormLabel>Quantity</FormLabel>
                <NumberInput max={20} min={1} step={1} defaultValue={1}>
                  <NumberInputField bg="white" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button colorScheme="blue">Add to cart</Button>
            </Box>
          </Flex>
        )}
      </Container>
    </Box>
  );
}
