import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
`;

export const CardInfos = styled.div`
  padding: 20px;
`;

export const Modelo = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 7px;

  text-align: center;
`;

export const Infos = styled.p`
  font-size: 1.25rem;
  margin-bottom: 7px;
  text-align: center;
`;
