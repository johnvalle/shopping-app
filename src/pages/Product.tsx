import React from "react";
import { useParams } from "react-router-dom";

type ProductPageParams = {
  id: string;
};

export default function Product() {
  const { id } = useParams<ProductPageParams>();

  React.useEffect(() => {
    console.log(id);
  }, [id]);

  return <div>Product</div>;
}
