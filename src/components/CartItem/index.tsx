import React from "react";
import { Text, Tr, Td, Skeleton } from "@chakra-ui/react";

import { useProduct } from "../../hooks";
import { ICartProduct, IProduct } from "../../constants";

type CartItemProps = ICartProduct;

export default function CartItem({ id, quantity }: CartItemProps) {
  const productQuery = useProduct(id);
  const product = productQuery.data?.data as IProduct;

  function getTotalPrice() {
    return product.price * quantity;
  }

  return (
    <>
      {productQuery.isLoading && (
        <Tr spacing="1rem">
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
          <Td>
            <Skeleton height="20px" />
          </Td>
        </Tr>
      )}
      {!productQuery.isLoading && (
        <Tr spacing="1rem">
          <Td>
            <Text>{product.title}</Text>
          </Td>
          <Td isNumeric>
            <Text>{`$ ${product.price}`}</Text>
          </Td>
          <Td isNumeric>
            <Text>{quantity}</Text>
          </Td>
          <Td isNumeric>
            <Text>{`$ ${getTotalPrice()}`}</Text>
          </Td>
          <Td>Action</Td>
        </Tr>
      )}
    </>
  );
}
