import React, { useEffect, useRef, useState } from 'react';
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
import Products from 'components/product-grid/product-list/product-list';
import { FormattedMessage } from 'react-intl';
import { getPlantItems } from 'utils/api/plant';

type ProductDetailsProps = {
  general: any;
  scientific: any;
  relatedPlants: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  general,
  scientific,
  relatedPlants,
  deviceType
}) => {
  const [items, useItems] = useState([]);
  getPlantItems(general.name).then((res) => useItems(res)); //TODO: FIX


  const scrollRef = useRef(null);

  const scrollToDiv = (e) => {
    e.preventDefault();
    window.scrollTo({
      top:
        scrollRef.current.getBoundingClientRect().top + window.pageYOffset - 65,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items])

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
            src={general.img_url}
            alt={general.common_name}
            className="product-image"
            style={{ maxHeight: "500px" }}
          />
        </ProductPreview>

        <ProductInfo>
          <BookTitle>{general.common_name}</BookTitle>
          <AuthorName>
            {general.name}
          </AuthorName>
          <BookDescriptionWrapper>
            <BookDescription>
              {general.description && general.description}
              <br />
              (source: Wikipedia)
              <a
                href={scientific.wiki}
                target="_blank"
                style={{ color: '#009e7f', fontWeight: 'bold' }}
              >
                Read More
              </a>
              <br />
              <AuthorName>Recommended Items</AuthorName>
              <BookMetaTable>
                {items && items.map((item) => {
                  return (
                    <BookMetaTableRow>
                      <BookMetaItem><i>{item.item_name}</i></BookMetaItem>
                    </BookMetaTableRow>
                  );
                })}
              </BookMetaTable>
            </BookDescription>
            {/* {scientific.ph_low &&
            <div>
              <h4>pH</h4>
              {scientific.ph_low}
              <div className="d-inline-block">
                <span>Low</span>
                <span></span>
                <span>High</span>
              </div>
              {scientific.ph_high}
            </div>
            } */}
          </BookDescriptionWrapper>

          <ProductMeta>
            <MetaSingle>
              <Link href={`/?family=${general.family}`} >
                <a>
                  <MetaItem>Family: {general.family}</MetaItem>
                </a>
              </Link>
              <Link href={`/?genus=${general.genus}`} >
                <a>
                  <MetaItem>Genus: {general.genus}</MetaItem>
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
      </DetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id="intlRelatedItems"
            defaultMessage="Related Items"
          />
        </h2>
        <Products
          data={relatedPlants}
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
