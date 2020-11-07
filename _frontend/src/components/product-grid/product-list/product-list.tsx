import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './product-list.style';
import Placeholder from 'components/placeholder/placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/no-result/no-result';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';
const Card = dynamic(
  import('components/product-card/product-card-one/product-card-one')
);

type ProductsProps = {
  data: any;
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fetchLimit?: number;
  loadMore?: boolean;
};
export const Products: React.FC<ProductsProps> = ({
  data,
  deviceType,
  loadMore = true,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  if (!data) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder uniqueKey="1" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="2" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="3" />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  if (data.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = async () => {
    setLoading(true);
    // await fetchMore(Number(data.length), fetchLimit);
    setLoading(false);
  };
  return (
    <>
      <ProductsRow>
        {data.map((item: any, index: number) => (
          <ProductsCol
            key={index}
            style={{ paddingLeft: 0, paddingRight: 1 }}
          >
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                <Card
                  title={item.common_name === 'None' ? item.name : item.common_name}
                  description={item.description}
                  image={item.img_url}
                  data={item}
                  deviceType={deviceType}
                  onClick={() => {
                    router.push('/plant/[slug]', `/plant/${item.slug}`);
                  }}
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data?.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            loading={loading}
            variant="secondary"
            style={{
              fontSize: 14,
            }}
            border="1px solid #f1f1f1"
          >
            <FormattedMessage id="loadMoreButton" defaultMessage="Load More" />
          </Button>
        </ButtonWrapper>
      )}
    </>
  );
};
export default Products;
