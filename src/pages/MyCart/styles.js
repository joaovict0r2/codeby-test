import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  margin: 12px 0 10px 0;

  button {
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

export const Line = styled.hr``;

export const ProductContainer = styled.div`
  padding: 20px;
`;

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  height: 50px;
  background-color: red;
`;
