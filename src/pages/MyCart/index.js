// import { useContext } from 'react';

import Product from '../../components/Product';
// import { AppContext } from '../../contexts/AppContext';
import { productData } from '../../services/ProductsService';

import formatCurrency from '../../utils/formatCurrecy';

import {
  Header, ProductContainer, Footer, Container, 
} from './styles';

function MyCart() {
  // const { theme, handleToggleTheme } = useContext(AppContext);
  const { totalizers, items } = productData;
  console.log(productData);

  return (
    <Container>
      <Header>
        <h3>Meu carrinho</h3>
        {/* <button
          type="button"
          onClick={handleToggleTheme}
          >
            {theme === 'dark' ? '🌞' : '🌚'}
          </button> */}
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
        <div>
          <p>Total</p>
          <span>
            <p>{formatCurrency(totalizers[0].value)}</p>
            <p>{formatCurrency(productData.value)}</p>
          </span>
        </div>

        <div>
          <button>Finalizar compra</button>
        </div>    
      </Footer>
    </Container>
  );
}

export default MyCart;
