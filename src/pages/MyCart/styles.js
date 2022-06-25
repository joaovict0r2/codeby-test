import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: ${({ theme }) => theme.colors.background};

  @media (min-width: 520px) {
    height: 800px;
    margin: 50px 0 0 0;
    border-radius: 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 0 0;
  padding: 0 30px 5px 20px;
  border-bottom: 1px solid #c2c2c2;

  h3 {
    font-weight: 700;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ebebeb29;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;

  .total {
    border-top: 1px solid #c2c2c2;
    border-bottom: 1px solid #c2c2c2;
    
    .total-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      padding: 20px;
      font-weight: 700;

      span {
        p:nth-child(1) {
          font-size: 11px;
          font-weight: 500;
          color: ${({ theme }) => theme.colors.fontColor.light};
          text-align: end;
        }
      }
    }
  }

  .finish-button {
    padding: 20px;
    display: flex;
    align-items: center;

    button {
      border: none;
      width: 100%;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.buttonColor};
      color: #fff;
      font-weight: 600;
      font-size: 15px;
      padding: 13.5px;
    }
  }

  .free-shipping {
    padding: 0 28px 20px 28px;

    p {
      padding: 5px;
      text-align: center;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.colors.alertBackground};
      color: ${({ theme }) => theme.colors.alertColor};
      font-weight: 600;
      font-size: 15px;
    }

    @media (min-width: 520px) {
      padding: 0 45px 20px 45px;
    }
  }

  @media (min-width: 520px) {
    border-radius: 15px;
  }
`;
