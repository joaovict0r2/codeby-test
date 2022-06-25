import { useSearchParams } from 'react-router-dom';

import Product from '../../components/Product';
import DarkModeToggle from '../../components/DarkModeToggle';

import productData from '../../services/ProductsService';
import formatCurrency from '../../utils/formatCurrecy';

import {
  Header, ProductContainer, Footer, Container,
} from './styles';

function MyCart() {
  const [searchParams] = useSearchParams();
  const dataType = searchParams.get('d');
  
  const { totalizers, items, value } = productData[dataType] || productData.below10;

  return (
    <Container>
      <Header>
        <h3>Meu carrinho</h3>
        <DarkModeToggle />
      </Header>

      <ProductContainer>
        {items.map((product) => (
          <Product
            productInfo={{
              name: product.name,
              image: product.imageUrl,
              price: product.price,
              sellingPrice: product.sellingPrice,
            }}
          />
        ))}
      </ProductContainer>
      
      <Footer>
        <div className="total">
          <div className="total-price">
            <p>Total</p>
            <span>
              <p>{formatCurrency(totalizers[0].value)}</p>
              <p>{formatCurrency(value)}</p>
            </span>
          </div>

          {dataType === 'above10' && (
            <div className="free-shipping">
              <p>Parabéns, sua compra tem frete grátis !</p>
            </div>
          )}
        </div>

        <div className="finish-button">
          <button>Finalizar compra</button>
        </div>    
      </Footer>
    </Container>
  );
}

export default MyCart;
