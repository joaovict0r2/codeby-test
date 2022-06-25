import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin: 15px 0 0 0;
  }

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 95px;
  height: auto;
  object-fit: contain;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.fontColor.light};

  @media (min-width: 520px) {
    width: 120px;
    height: 120px;
  }
`;

export const ProductContent = styled.div`
  margin: 0 0 0 10px;
`;

export const Title = styled.p`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.fontColor.main};
  margin-bottom: 10px;
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }
  
  @media (min-width: 520px) {
    font-size: 15px;
  }
`;

export const Price = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fontColor.light};

  @media (min-width: 520px) {
    font-size: 13px;
  }
`;

export const SellingPrice = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fontColor.main};

  @media (min-width: 520px) {
    font-size: 15px;
  }
`;
