import React from "react";
import {
  Box,
  Container,
  Text,
  Image,
  SimpleGrid,
  Flex,
  StatLabel,
  Stat,
  StatNumber,
  StatHelpText,
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
              <Box
                bgColor="blue.100"
                height="300px"
                borderRadius="1rem"
                role="group"
                _hover={{ shadow: "lg" }}
              >
                <Flex
                  bgColor="white"
                  height="60%"
                  justifyContent="center"
                  alignItems="center"
                  borderTopRadius="1rem"
                >
                  <Image
                    src={product.image}
                    alt={product.description}
                    width="50%"
                    height="auto"
                    _groupHover={{ width: "52%" }}
                  />
                </Flex>
                <Stat px="1rem" pt="0.5rem">
                  <StatNumber>${product.price}</StatNumber>
                  <StatLabel noOfLines={2}>{product.title}</StatLabel>
                  <StatHelpText>
                    {product.rating.rate} ({product.rating.count})
                  </StatHelpText>
                </Stat>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
