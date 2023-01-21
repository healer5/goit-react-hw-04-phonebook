import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 15px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(107, 46, 6, 0.5);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  background-color: #a78b80;
  :hover {
    background-color: #73372a;
    transform: scale(1.05);
  }
  }
`;

export const InputForm = styled.input`
  //   width: 100%;
  border-radius: 4px;
  cursor: pointer;
  height: 20px;
  margin: 0 auto;
  cursor: pointer;
  margin: 15px;

  :hover,
  :focus {
    outline: 1px solid #73372a;
  }
`;
