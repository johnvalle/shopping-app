import React from "react";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useProductCategories, useProducts } from "../hooks";
import { IProduct, IProductConfig, SortByValue } from "../constants";
import ProductCard from "../components/ProductCard";

export default function Dashboard() {
  const [productConfig, setProductConfig] = React.useState<IProductConfig>({
    sort: "asc",
    limit: 10,
  });

  const products = useProducts({ sort: productConfig.sort, limit: productConfig.limit });
  const categories = useProductCategories();

  return (
    <Box bgColor="blue.50">
      <Container maxW="container.xl" minHeight="100vh" p="2rem">
        <Text fontSize="4xl" fontWeight="bold" pb="1rem">
          Categories
        </Text>
        <Flex flexWrap="wrap">
          {categories.data?.data?.map((category: string[]) => (
            <Box
              py="0.25rem"
              px="1rem"
              bgColor="white"
              rounded="lg"
              borderColor="gray.200"
              borderWidth="1px"
            >
              <Text fontSize="lg">{category}</Text>
            </Box>
          ))}
        </Flex>
        <Text fontSize="4xl" fontWeight="bold" py="2rem">
          Products
        </Text>
        <Box my="1.5rem">
          <Divider />
          <Flex flexWrap="wrap" justifyContent={{ sm: "flex-start", md: "flex-end" }} my="0.5rem">
            <FormControl as="fieldset" maxWidth="300px">
              <FormLabel as="legend">Sort products by</FormLabel>
              <RadioGroup
                defaultValue="asc"
                onChange={(value: SortByValue) => {
                  setProductConfig((prevState) => ({
                    ...prevState,
                    sort: value,
                  }));
                }}
              >
                <HStack spacing="24px">
                  <Radio value="asc">Ascending</Radio>
                  <Radio value="desc">Descending</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl id="amount" maxWidth={{ sm: "100%", md: "100px" }}>
              <FormLabel>Amount</FormLabel>
              <NumberInput
                max={20}
                min={1}
                step={1}
                defaultValue={10}
                onChange={(value: string) => {
                  setProductConfig((prevState) => ({
                    ...prevState,
                    limit: Number(value),
                  }));
                }}
              >
                <NumberInputField bg="white" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Flex>
          <Divider />
        </Box>
        {products.isLoading && <Text>Loading products...</Text>}
        <SimpleGrid minChildWidth="180px" spacing="1.5rem">
          {products.data?.data?.map((product: IProduct) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
