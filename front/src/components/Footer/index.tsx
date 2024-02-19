import React, { useState } from "react";
import { FotterComponent, Button } from "./styles";
import { Modal } from "../Modal";
import { ModalSimulation } from "../ModalSimulation";

export function Footer() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalSimulation, setIsOpenModalSimulation] = useState(false);

  return (
    <FotterComponent>
      <Button onClick={() => setIsOpenModal(true)}>ADICIONAR CARRO</Button>
      <Button onClick={() => setIsOpenModalSimulation(true)}>SIMULAÇÃO</Button>

      {isOpenModal && <Modal setIsOpen={setIsOpenModal} />}
      {isOpenModalSimulation && (
        <ModalSimulation setIsOpen={setIsOpenModalSimulation} />
      )}
    </FotterComponent>
  );
}
