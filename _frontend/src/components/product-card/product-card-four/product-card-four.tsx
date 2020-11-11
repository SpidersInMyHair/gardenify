// product card for food
import React from 'react';
import Image from 'components/image/image';
import {
  FoodCardWrapper,
  FoodImageWrapper,
  ProductInfo,
  Category,
  DiscountPercent,
} from '../product-card.style';

type CardProps = {
  name: string;
  image: any;
  restaurantType: string;
  delivery?: string;
  isFree?: boolean;
  duration?: string;
  discountInPercent?: number;
  data: any;
  onClick?: (e: any) => void;
};

const ProductCard: React.FC<CardProps> = ({
  name,
  image,
  restaurantType,
  delivery,
  isFree,
  duration,
  discountInPercent,
  data,
  onClick,
  ...props
}) => {
  return (
    <FoodCardWrapper onClick={onClick} className='food-card'>
      <FoodImageWrapper>
        <Image
          url={image}
          className='product-image'
          style={{ position: 'relative' }}
          alt={name}
        />
        {discountInPercent && (
          <DiscountPercent>{discountInPercent}%</DiscountPercent>
        )}
      </FoodImageWrapper>
      <ProductInfo
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <h3 className='product-title'>{name}</h3>
        <Category style={{ marginBottom: 20, display: 'inline-block' }}>
          {restaurantType}
        </Category>
      </ProductInfo>
    </FoodCardWrapper>
  );
};

export default ProductCard;
