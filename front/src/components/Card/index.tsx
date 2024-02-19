import React from "react";
import { Container, CardImage, CardInfos, Modelo, Infos } from "./styles";

interface ICard {
  data: IData;
}

interface IData {
  id: string;
  modelo: string;
  marca: string;
  cor: string;
  opcionais: string;
  imagem: string;
}

export function Card({ data }: ICard) {
  return (
    <Container>
      <CardInfos>
        <Modelo>{data.modelo}</Modelo>
        <CardImage src={data.imagem} alt={data.modelo} />

        <Infos>
          <b>Marca:</b> {data.marca}
        </Infos>
        <Infos>
          {" "}
          <b>Cor:</b> {data.cor}
        </Infos>
      </CardInfos>
    </Container>
  );
}
