import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SEO } from 'components/seo';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'assets/styles/product-single.style';
import { getAllPlants, getPlantBySlug } from 'utils/api/plant';

const ProductDetails = dynamic(() =>
  import('components/product-details/product-details-one/product-details-one')
);
const ProductDetailsBook = dynamic(() =>
  import('components/product-details/product-details-two/product-details-two')
);
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  data: any;
  [key: string]: any;
};

const ProductPage: NextPage<Props> = ({ data, deviceType }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <>
      <SEO
        title={`${data.common_name} - Gardenify`}
        description={`${data.common_name} Details`}
      />

      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <ProductDetailsBook product={data} deviceType={deviceType} />;
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export async function getStaticProps({ params }) {
  const data = await getPlantBySlug(params.slug);
  return {
    props: {
      data,
    },
  };
}
export async function getStaticPaths() {
  const products = await getAllPlants();
  return {
    paths: products.slice(0, 10).map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
export default ProductPage;