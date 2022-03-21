import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FormStyle = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: transparent;
  color: "grey";
  border: 2px solid "black";
  overflow: hidden;
  box-shadow: none;
`;

export { Container, FormStyle, Button };
