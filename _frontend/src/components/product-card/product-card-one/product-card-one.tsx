// product card for general
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'components/image/image';
import { Button } from 'components/button/button';
import {
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
  DiscountPercent,
  ButtonText,
  BookInfo,
  ProductName,
  AuthorInfo,
} from '../product-card.style';
const QuickViewMobile = dynamic(() =>
  import('features/quick-view/quick-view-mobile')
);
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
          url={image}
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
