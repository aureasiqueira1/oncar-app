import styled from "styled-components";

interface IButtonStyled {
  active: Boolean;
}

export const ButtonStyled = styled.button<IButtonStyled>`
  background-color: #ab1e1e;
  color: white;
  border-radius: 24px;
  padding: 1rem;
  font-size: 1.25rem;
  height: 60px;
  margin-top: 24px;

  transition: all 0.2s;

  &:hover {
    background-color: #f02222;
  }
`;

export const ButtonDisabled = styled.button`
  color: white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.2em;
  height: 50px;
  background-color: rgb(92, 92, 92);
  cursor: not-allowed;
  margin-top: 24px;
`;
