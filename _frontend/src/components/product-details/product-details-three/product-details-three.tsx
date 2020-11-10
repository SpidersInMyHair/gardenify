import React from 'react';
import { Link, Element } from 'react-scroll';
import { Button } from 'components/button/button';
import {
  ProductDetailsWrapper,
  ProductPreview,
  RestaurantMeta,
  RestaurantNameAddress,
  RestaurantName,
  RestaurantAddress,
  CategoriesWrapper,
  CategoriesInner,
  MainContent,
  MenuContainer,
  ItemCategoryWrapper,
  ItemCategoryName,
  ItemWrapper,
  ItemNameDetails,
  ItemName,
  ItemDetails,
  ItemNamePricing,
  HelpText,
  ItemPrice,
} from './product-details-three.style';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage } from 'react-intl';
import Sticky from 'react-stickynode';
import { groupBy } from 'utils/groupBy';
import { useCart } from 'contexts/cart/use-cart';
import { PlusOutline } from 'assets/icons/PlusOutline';

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
  const { addItem, clearCart, toggleRestaurant, isInCart } = useCart();
  const handleAddClick = (values) => {
    addItem(values);
  };
  const checkoutStatus = React.useRef(null);
  const data = product;

  React.useEffect(() => {
    clearCart();
    return () => {
      if (checkoutStatus.current === null) {
        clearCart();
      }
    };
  }, []);
  const productGroups = groupBy(data?.products, 'type');

  const headerOffset = deviceType.mobile || deviceType.tablet ? -137 : -177;

  return (
    <>
      <ProductDetailsWrapper>
        <ProductPreview>
          <img src={data.previewUrl} alt={data.name} />
        </ProductPreview>
        <div id="cart-sticky">
          <RestaurantMeta id="restaurantMeta">
            <RestaurantNameAddress>
              <RestaurantName>{data.name}</RestaurantName>
              <RestaurantAddress>{data.address}</RestaurantAddress>
            </RestaurantNameAddress>
          </RestaurantMeta>

          <Sticky
            top={deviceType.mobile || deviceType.tablet ? 68 : 78}
            innerZ={999}
          >
            <CategoriesWrapper>
              <CategoriesInner>
                {Object.keys(productGroups).map((item, index) => (
                  <Link
                    activeClass="active"
                    className="category"
                    to={Object.keys(productGroups)[index]}
                    offset={headerOffset}
                    spy={true}
                    smooth={true}
                    duration={500}
                    key={index}
                  >
                    {item}
                  </Link>
                ))}
              </CategoriesInner>
            </CategoriesWrapper>
          </Sticky>
        </div>

        <MainContent>
          <MenuContainer>
            {Object.values(productGroups).map((items: any, idx: number) => (
              <Element name={Object.keys(productGroups)[idx]} key={idx}>
                <ItemCategoryWrapper id={Object.keys(productGroups)[idx]}>
                  <ItemCategoryName>
                    {Object.keys(productGroups)[idx]}
                  </ItemCategoryName>
                </ItemCategoryWrapper>

                {items.map((item) => (
                  <ItemWrapper key={item.id}>
                    <ItemNameDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemDetails>{item.description}</ItemDetails>
                    </ItemNameDetails>

                    <Button
                      variant="select"
                      type="button"
                      className={isInCart(item.id) ? 'selected' : ''}
                      onClick={() => handleAddClick(item)}
                    >
                      <PlusOutline width="14px" height="14px" />
                    </Button>
                  </ItemWrapper>
                ))}
              </Element>
            ))}
          </MenuContainer>
        </MainContent>
      </ProductDetailsWrapper>
    </>
  );
};

export default ProductDetails;
