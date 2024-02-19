import styled from "styled-components";

export const Container = styled.div`
  color: #000;
  width: 32rem;
  display: grid;
  grid-template-columns: 110px 1fr;
  text-align: left;
  align-items: center;

  & input {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 16px;
    outline: none;
    color: black;
    font-size: 1.25rem;
    background-color: #2f2a44;
    color: #fff;
  }

  & span {
    font-size: 1.25rem;
    color: #fff;
  }
`;
