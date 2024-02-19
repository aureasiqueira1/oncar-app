import styled from "styled-components";

export const FotterComponent = styled.header`
  background-color: #1e004e;
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  height: 90px;
  justify-content: center;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const Button = styled.span`
  background-color: #ab1e1e;
  color: white;
  border-radius: 24px;
  padding: 1rem;
  font-size: 1.25rem;
  height: 60px;
  margin-left: 24px;
  margin-right: 24px;
  width: 20rem;
  transition: all 0.2s;

  &:hover {
    background-color: #f02222;
  }
`;
