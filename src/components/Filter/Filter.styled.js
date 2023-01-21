import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 220px;
  border-radius: 4px;
  cursor: pointer;
  height: 20px;
  margin: 0 auto;
  cursor: pointer;
  :hover,
  :focus {
    outline: 1px solid #73372a;
  }
`;
