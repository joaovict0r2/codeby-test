import formatCurrency from '../../utils/formatCurrecy';

import {
  Image, ProductContent, Title, Price, SellingPrice, Container, 
} from './styles';

function Product({ productInfo }) {
  return (
    <Container>
      <Image src={productInfo.image} alt="product-image" />

      <ProductContent>
        <Title>{productInfo.name}</Title>
        <Price>{formatCurrency(productInfo.price)}</Price>
        <SellingPrice>{formatCurrency(productInfo.sellingPrice)}</SellingPrice>
      </ProductContent>
    </Container>
  );
}

export default Product;
