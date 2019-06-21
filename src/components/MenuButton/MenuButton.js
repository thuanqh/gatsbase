import React from "react";
import styled from "styled-components";

const Wrapper = styled.div({
  position: "absolute",
  zIndex: 3,
  right: "35px",
  top: "35px",
  cursor: "pointer"
});

const ButtonLine = styled.div({
  width: "28px",
  height: "3px",
  margin: "0 0 5px 0",
  background: "#fff"
});

const MenuButton = () => (
  <Wrapper>
    <ButtonLine />
    <ButtonLine />
    <ButtonLine />
  </Wrapper>
);

export default MenuButton;
