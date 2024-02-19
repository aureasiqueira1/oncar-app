import React from "react";
import { HeaderTop, Label, Logo } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <HeaderTop>
      <Logo>
        <i>Veículos</i>
      </Logo>
      <Label onClick={() => navigate("../")}>Home</Label>
    </HeaderTop>
  );
}
