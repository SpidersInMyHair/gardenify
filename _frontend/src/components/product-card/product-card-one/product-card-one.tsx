// product card for general
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'components/image/image';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  BookInfo,
  ProductName,
  AuthorInfo,
} from '../product-card.style';
type ProductCardProps = {
  title: string;
  description: string;
  image: any;
  data: any;
  onClick?: (e: any) => void;
  deviceType?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  onClick,
  data,
  deviceType,
  ...props
}) => {
  return (
    <ProductCardWrapper onClick={onClick} className="product-card">
      <ProductImageWrapper>
        <Image
          url={image !== 'None' && image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
      </ProductImageWrapper>
      <BookInfo>
        <ProductName>{title}</ProductName>
        <AuthorInfo>{data.name}</AuthorInfo>
      </BookInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
