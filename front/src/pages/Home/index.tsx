import React, { useState, useEffect, ChangeEvent } from "react";

import { api } from "../../services/api";
import {
  CarsSection,
  Container,
  InputLabel,
  SearchCar,
  Button,
} from "./styles";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { ModalSimulation } from "../../components/ModalSimulation";
import { Modal } from "../../components/Modal";

interface ICarros {
  id: string;
  modelo: string;
  marca: string;
  cor: string;
  opcionais: string;
  imagem: string;
}

export function Home() {
  const navigate = useNavigate();
  const [carros, setCarros] = useState<ICarros[]>([]);
  const [search, setSearch] = useState("");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalSimulation, setIsOpenModalSimulation] = useState(false);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredCars =
    search !== ""
      ? carros.filter(
          (carro) =>
            carro?.modelo
              ?.toLocaleLowerCase()
              ?.includes(search.toLocaleLowerCase()) ||
            carro?.marca
              ?.toLocaleLowerCase()
              ?.includes(search.toLocaleLowerCase()) ||
            carro?.cor
              ?.toLocaleLowerCase()
              ?.includes(search.toLocaleLowerCase())
        )
      : carros;

  async function getCarros() {
    const response = await api.get("/car");

    setCarros(response.data);
  }

  useEffect(() => {
    getCarros();
  }, []);

  return (
    <Container>
      <Header />

      <SearchCar>
        <InputLabel
          type="text"
          placeholder="Pesquisar..."
          onChange={handleSearch}
        />
        <Button onClick={() => setIsOpenModal(true)}>ADICIONAR CARRO</Button>
        <Button onClick={() => setIsOpenModalSimulation(true)}>
          SIMULAÇÃO
        </Button>

        {isOpenModal && <Modal setIsOpen={setIsOpenModal} />}
        {isOpenModalSimulation && (
          <ModalSimulation setIsOpen={setIsOpenModalSimulation} />
        )}
      </SearchCar>

      <CarsSection>
        {filteredCars.map((carro) => (
          <div onClick={() => navigate(`/car/${carro.id}`)}>
            <Card data={carro} />
          </div>
        ))}
      </CarsSection>
    </Container>
  );
}
