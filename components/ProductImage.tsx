"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  product: Product;
  fill?: boolean;
};
const ProductImage = ({ product, fill }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
          alt={product.title}
          fill
        />
      ) : (
        <Image
          src={product.image}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoadingComplete={() => setLoading(false)}
          alt={product.title}
        />
      )}
    </>
  );
};

export default ProductImage;
