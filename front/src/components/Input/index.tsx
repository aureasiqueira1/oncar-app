import React from "react";

import { Container } from "./styles";

interface IInput {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, ...rest }: IInput) {
  const dataTestId = `input-${name}`;

  return (
    <Container>
      <span>{name}:</span>

      <input required {...rest} data-testid={dataTestId} />
    </Container>
  );
}
