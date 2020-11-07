import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Button } from 'components/button/button';
import Image from 'components/image/image';
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
  Table,
  RelatedItems,
} from './product-details-two.style';
import { LongArrowLeft } from 'assets/icons/LongArrowLeft';
import Products from 'components/product-grid/product-list/product-list';
import { FormattedMessage } from 'react-intl';

type ProductDetailsProps = {
  general: any;
  scientific: any;
  items: Array<String>;
  relatedPlants: any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  general,
  items,
  scientific,
  relatedPlants,
  deviceType
}) => {

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
          <Image
            url={general.img_url !== 'None' && general.img_url}
            alt={general.common_name === 'None' ? general.name : general.common_name}
            className="product-image"
            style={{ maxHeight: "500px" }}
          />
        </ProductPreview>

        <ProductInfo> 
          { general.common_name === 'None' ? 
          <BookTitle>{general.name}</BookTitle> :
          <>
            <BookTitle>{general.common_name}</BookTitle>
            <AuthorName>
              {general.name}
            </AuthorName>
          </>
          }
          <BookDescriptionWrapper>
            <BookDescription>
              {general.description && <> {general.description} <br />
              (source: Wikipedia)
              <a
                href={scientific.wiki}
                target="_blank"
                style={{ color: '#009e7f', fontWeight: 'bold' }}
              >
                Read More
              </a>
              </>}
            </BookDescription>
            <AuthorName>Scientific Information</AuthorName>
            <Table>
              <thead>
                <tr>
                  <th colSpan={2}>pH</th>
                  <th colSpan={2}>Temperature (°C)</th>
                  <th colSpan={2}>Precipitation (mm)</th>
                  <th rowSpan={2}>Light (/10)</th>
                  <th colSpan={3}>Soil (/10)</th>
                </tr>
                <tr>
                  <th>Low</th><th>High</th>
                  <th>Low</th><th>High</th>
                  <th>Low</th><th>High</th>
                  <th>Salinity</th><th>Texture</th><th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{scientific.ph_low}</td>
                  <td>{scientific.ph_high}</td>
                  <td>{scientific.temperature_low}</td>
                  <td>{scientific.temperature_high}</td>
                  <td>{scientific.temperature_low}</td>
                  <td>{scientific.temperature_high}</td>
                  <td>{scientific.light}</td>
                  <td>{scientific.soil_salinity}</td>
                  <td>{scientific.soil_texture}</td>
                  <td>{scientific.soil_humidity}</td>
                </tr>
              </tbody>
            </Table>
            <br />
            <AuthorName>Recommended Items</AuthorName>
            <BookMetaTable>
              {items && items.map((item, i) => {
                return (
                  <BookMetaTableRow key={i}>
                    <BookMetaItem><i>{item}</i></BookMetaItem>
                  </BookMetaTableRow>
                );
              })}
            </BookMetaTable>
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

      {/* <DetailsWrapper ref={scrollRef}>
        <DetailsTitle>
          About The Plant
        </DetailsTitle>
      </DetailsWrapper> */}

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
