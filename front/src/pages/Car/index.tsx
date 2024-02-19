import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import {
  CardImage,
  CardInfos,
  Container,
  Infos,
  InfosColumns,
  Modelo,
} from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

interface ICarro {
  id: string;
  modelo: string;
  marca: string;
  cor: string;
  opcionais: string;
  imagem: string;
}

export function Car() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carro, setCarro] = useState<ICarro>();

  async function getCarro() {
    try {
      const response = await api.get(`/car/${id}`);

      if (response.status === 200 || response.status === 201) {
        setCarro(response.data);
      }
    } catch (error) {
      toast.error("Erro ao abrir Carro!");
    }
  }

  async function handleDeleteCarro() {
    try {
      const response = await api.delete(`/car/${id}`);
      if (response.status === 200) {
        navigate("../");
      }
    } catch (error) {
      toast.error("Erro ao excluir Carro");
    }
  }

  useEffect(() => {
    getCarro();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <InfosColumns>
          <CardImage src={carro?.imagem} alt={carro?.modelo} />
          <CardInfos>
            <Modelo>{carro?.modelo}</Modelo>
            <Infos>Marca: {carro?.marca}</Infos>
            <Infos>Cor: {carro?.cor}</Infos>
            <Infos>Cor: {carro?.opcionais}</Infos>
            <Button onClick={() => handleDeleteCarro()} name="DELETAR" />
          </CardInfos>
          <Button onClick={() => navigate("../")} name="VOLTAR" />
        </InfosColumns>
      </Container>
      <Footer />
    </>
  );
}
