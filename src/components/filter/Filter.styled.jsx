import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  margin-bottom: 15px;
`;

export const FilterName = styled.label`
  display: flex;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const FilterInput = styled.input`
  margin-bottom: 15px;
  :focus {
    outline: none;
    border-radius: 3px;
    border: 4px solid #6495ed;
  }
`;
