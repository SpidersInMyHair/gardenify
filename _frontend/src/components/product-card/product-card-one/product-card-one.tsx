// product card for general
import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';
import { cartAnimation } from 'utils/cart-animation';
import { FormattedMessage } from 'react-intl';
import { CartIcon } from 'assets/icons/CartIcon';
import { useModal } from 'contexts/modal/use-modal';
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
