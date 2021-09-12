import React from "react";

import { Box, Flex, Image, StatLabel, Stat, StatNumber, StatHelpText } from "@chakra-ui/react";
import { IProduct } from "../../constants";

type ProductCardProps = {
  product: IProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
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
        <Image src={product.image} width="50%" height="auto" _groupHover={{ width: "52%" }} />
      </Flex>
      <Stat px="1rem" pt="0.5rem">
        <StatNumber>{`$ ${product.price}`}</StatNumber>
        <StatLabel noOfLines={2}>{product.title}</StatLabel>
        <StatHelpText>
          {product.rating.rate} ({product.rating.count})
        </StatHelpText>
      </Stat>
    </Box>
  );
}
