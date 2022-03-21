import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const FormStyle = styled.form`
  margin: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export { Container, FormStyle };
