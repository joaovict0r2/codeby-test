// import { useContext } from 'react';

import Product from '../../components/Product';
// import { AppContext } from '../../contexts/AppContext';
import { productArr } from '../../services/ProductsService';

import {
  Header, Line, ProductContainer, Footer, 
} from './styles';

function MyCart() {
  // const { theme, handleToggleTheme } = useContext(AppContext);
  const { items } = productArr;

  return (
    <>
      <Header>
        <h2>Meu carrinho</h2>
        {/* <button
          type="button"
          onClick={handleToggleTheme}
          >
            {theme === 'dark' ? '🌞' : '🌚'}
          </button> */}
      </Header>

      <Line />

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

      </Footer>
    </>
  );
}

export default MyCart;
