import React, { useState } from "react";

import { Container, ScoreBox } from "./styles";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Input } from "../Input";
import { Button } from "../Button";
import random from "random";

interface IModal {
  setIsOpen: Function;
}

export function ModalSimulation({ setIsOpen }: IModal) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [score, setScore] = useState("");

  async function handleSimulate() {
    const data = {
      nome: nome,
      email: email,
      cpf: cpf,
      score: random.int(1, 999),
    };

    try {
      const response = await api.post("/user", data);
      if (response.status === 201 || response.status === 200) {
        setScore(response.data.score);
      }
    } catch (error) {
      toast.error("Erro ao criar Simulação");
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
          <h1 className="title">SIMULAÇÃO</h1>
          <div className="modalContent">
            <Input
              name="Nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <Input
              name="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              name="Cpf"
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <Button
              name="Simular"
              disabled={!nome || !email || !cpf}
              onClick={() => handleSimulate()}
            />

            {score && (
              <ScoreBox>
                <span>{score}</span>
              </ScoreBox>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
