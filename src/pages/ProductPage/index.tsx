import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
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
import { AddIcon, StarIcon } from "@chakra-ui/icons";

import { useAppDispatch, useProduct } from "../../hooks";
import { Navbar } from "../../components";
import { addProduct, setQuantity } from "../../slices/CartSlice";

type ProductPageParams = {
  id: string;
};

export default function Product() {
  const [itemQuantity, setItemQuantity] = React.useState(1);

  const { id } = useParams<ProductPageParams>();
  const product = useProduct(Number(id));
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(setQuantity(itemQuantity));
    dispatch(addProduct(Number(id)));
    setItemQuantity(1);
  };

  return (
    <>
      <Box bgColor="gray.50">
        <Navbar />
        <Container maxW="container.xl" minHeight="calc(100vh - 80px)" p="2rem">
          <Text fontSize="4xl" fontWeight="bold">
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
                <Flex alignItems="center">
                  <StarIcon color="yellow.400" mr="0.5rem" />
                  <Text>{`${product.data?.data?.rating?.rate} (${product.data?.data?.rating.count})`}</Text>
                </Flex>
                <Divider my="1rem" />
                <FormControl id="amount" maxWidth={{ sm: "100%", md: "100px" }}>
                  <FormLabel>Quantity</FormLabel>
                  <NumberInput
                    max={20}
                    min={1}
                    step={1}
                    defaultValue={itemQuantity}
                    onChange={(value) => setItemQuantity(Number(value))}
                  >
                    <NumberInputField bg="white" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <Button leftIcon={<AddIcon />} colorScheme="blue" my="1rem" onClick={addToCart}>
                  Add to cart
                </Button>
              </Box>
            </Flex>
          )}
        </Container>
      </Box>
    </>
  );
}
