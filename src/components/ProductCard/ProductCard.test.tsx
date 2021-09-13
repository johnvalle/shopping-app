import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import ProductCard from "./index";

afterEach(cleanup);

describe("componentProductCard", () => {
  const sampleProduct = {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  };

  it("renders product name", () => {
    render(<ProductCard product={sampleProduct} />);
    const productName = screen.getByText(sampleProduct.title);
    expect(productName).toBeInTheDocument();
  });

  it("renders product price", () => {
    render(<ProductCard product={sampleProduct} />);
    const productPrice = screen.getByText(`$ ${sampleProduct.price}`);
    expect(productPrice).toBeInTheDocument();
  });

  it("renders product rating and count", () => {
    render(<ProductCard product={sampleProduct} />);
    const productRating = screen.getByTestId("productCard-1");
    expect(productRating).toHaveTextContent(
      `${sampleProduct.rating.rate} (${sampleProduct.rating.count})`
    );
  });
});
