import React, { useEffect } from "react";
import styled from "styled-components";
import { useToast } from "../../context/ToasterProvider";
import { animated } from "react-spring";

const Wrapper = styled(animated.div)`
  color: white;
  background: #445159;
  opacity: 0.9;
  padding: 12px 22px;
  font-size: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  overflow: hidden;
  height: auto;
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 0;
`;

const Toast = ({ children, id, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, removeToast]);

  return <Wrapper style={style}>{children}</Wrapper>;
};

export default Toast;
