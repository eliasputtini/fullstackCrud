import styled from "styled-components";
import { a } from "react-spring";

const Main = styled.div`
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 50px;
`;

const Marker = styled.span`
  color: black;
  position: absolute;
  top: 0px;
  left: 50px;
  font-family: monospace;
`;

const Image = styled(a.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

export { Main, Content, Marker, Image };
