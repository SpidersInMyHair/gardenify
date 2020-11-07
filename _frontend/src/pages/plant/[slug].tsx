import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SEO } from 'components/seo';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'assets/styles/product-single.style';
import { getPlants, getPlant } from 'utils/api/plant';
import NotFoundPage from 'pages/404';


const PlantDetails = dynamic(() =>
  import('components/product-details/product-details-two/product-details-two')
);

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  data: any;
  [key: string]: any;
};

const ProductPage: NextPage<Props> = ({ data, relatedPlants, deviceType }) => {
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;
  if (!data) return <NotFoundPage />;

  return (
    <>
      <SEO
        title={`${data.general.common_name === 'None' ? data.general.name : data.general.common_name} - Gardenify`}
        description={`${data.general.common_name === 'None' ? data.general.name : data.general.common_name} Details`}
      />

      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <PlantDetails {...data} relatedPlants={relatedPlants} deviceType={deviceType} />;
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getPlant(params.slug);
  const relatedPlants = await getPlants('genus=' + encodeURIComponent(data.general.genus) + "&limit=5")
  return {
    props: {
      data,
      relatedPlants
    },
  };
}

export default ProductPage;
