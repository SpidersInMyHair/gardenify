import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'components/button/button';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  BookTitle,
  BackButton,
  AuthorName,
  BookDescriptionWrapper,
  BookDescription,
  BookMetaTable,
  BookMetaTableRow,
  BookMetaItem,
  ProductMeta,
  ButtonText,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  DetailsWrapper,
  DetailsTitle,
  Description,
  Avatar,
  SocialNetworks,
  SocialIcon,
  RelatedItems,
} from './product-details-two.style';
import { LongArrowLeft } from 'assets/icons/LongArrowLeft';
import { CURRENCY } from 'utils/constant';
import Products from 'components/product-grid/product-list/product-list';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/counter/counter';

type ProductDetailsProps = {
  product: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const { addItem, removeItem, getItem, isInCart } = useCart();
  const data = product;

  const scrollRef = useRef(null);

  const scrollToDiv = (e) => {
    e.preventDefault();
    window.scrollTo({
      top:
        scrollRef.current.getBoundingClientRect().top + window.pageYOffset - 65,
      behavior: 'smooth',
    });
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  return (
    <>
      <ProductDetailsWrapper className="product-card">
        <ProductPreview>
          <BackButton>
            <Button
              type="button"
              size="small"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #f1f1f1',
                color: '#77798c',
              }}
              onClick={Router.back}
            >
              <LongArrowLeft style={{ marginRight: 5 }} />
              <FormattedMessage id="backBtn" defaultMessage="Back" />
            </Button>
          </BackButton>

          <img
            src={product.img_url}
            alt={product.common_name}
            className="product-image"
            style={{ maxHeight:  "500px"}}
          />
        </ProductPreview>

        <ProductInfo>
          <BookTitle>{product.common_name}</BookTitle>
          <AuthorName>
            {product.name}
          </AuthorName>
          <BookDescriptionWrapper>
            <BookDescription>
              {product.genus.substring(0, 600)}
              <a
                href="#"
                onClick={scrollToDiv}
                style={{ color: '#009e7f', fontWeight: 'bold' }}
              >
                Read More
              </a>
            </BookDescription>
          </BookDescriptionWrapper>

          <ProductMeta>
            <MetaSingle>
              <Link href={`/?family=${product.family}`} >
                <a>
                  <MetaItem>Family: {product.family}</MetaItem>
                </a>
              </Link>
              <Link href={`/?genus=${product.genus}`} >
                <a>
                  <MetaItem>Genus: {product.genus}</MetaItem>
                </a>
              </Link>
            </MetaSingle>
          </ProductMeta>
        </ProductInfo>
      </ProductDetailsWrapper>

      <DetailsWrapper ref={scrollRef}>
        <DetailsTitle>
          <FormattedMessage
            id="bookSectionTitle"
            defaultMessage="About The Book"
          />
        </DetailsTitle>
        {/* <Description>{product.description}</Description> */}
      </DetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id="intlRelatedItems"
            defaultMessage="Related Items"
          />
        </h2>
        <Products
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
