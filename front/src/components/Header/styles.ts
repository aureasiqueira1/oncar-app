import styled from "styled-components";

export const HeaderTop = styled.header`
  background-color: #1e004e;
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  height: 70px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-right: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 2rem;
  font-weight: 700;
`;
