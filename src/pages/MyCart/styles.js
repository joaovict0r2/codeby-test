import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 10px 0 0 0;
  padding: 0 0 5px 0;
  border-bottom: 1px solid #c2c2c2;

  h3 {
    font-weight: 700;
  }

  button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
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
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #c2c2c2;
    border-bottom: 1px solid #c2c2c2;
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

  div:nth-child(2){
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
`;
