import React, { useState } from "react";

import { Container } from "./styles";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Input } from "../Input";
import { Button } from "../Button";

interface IModal {
  setIsOpen: Function;
}

export function Modal({ setIsOpen }: IModal) {
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [cor, setCor] = useState("");
  const [opcionais, setOpcionais] = useState("");
  const [imagem, setImagem] = useState("");

  async function handleCreateCar() {
    const data = {
      modelo: modelo,
      marca: marca,
      cor: cor,
      opcionais: opcionais,
      imagem: imagem,
    };

    try {
      const response = await api.post("/car", data);
      if (response.status === 201 || response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      toast.error("Erro ao criar Carro");
    }
  }

  return (
    <Container>
      <div
        className="darkBG"
        data-testid="dark-bg"
        onClick={() => setIsOpen(false)}
      />
      <div className="centered">
        <div className="modal" data-testid="help-modal">
          <h1 className="title">ADICIONAR CARRO</h1>
          <div className="modalContent">
            <Input
              name="Modelo"
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />

            <Input
              name="Marca"
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />

            <Input
              name="Cor"
              type="text"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
            />

            <Input
              name="Opcionais"
              type="text"
              value={opcionais}
              onChange={(e) => setOpcionais(e.target.value)}
            />

            <Input
              name="Imagem"
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />

            <Button
              name="Adicionar"
              disabled={!modelo || !marca || !cor || !opcionais}
              onClick={() => handleCreateCar()}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
