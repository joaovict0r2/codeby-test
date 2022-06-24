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
  height: 95px;
  object-fit: contain;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.fontColor.light} ;
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
`;

export const Price = styled.p`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fontColor.light};
`;

export const SellingPrice = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.fontColor.main};
`;
