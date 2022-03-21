import React from "react";
import styled from "styled-components";
import { useTransition } from "react-spring";

import Toast from "../../../Toast";

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
`;

const ToastContainer = ({ toasts }) => {
  const transitions = useTransition(toasts, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Wrapper>
      {transitions(({ key, props }, item) => (
        <Toast key={key} id={item.id} style={props}>
          {item.content}
        </Toast>
      ))}
    </Wrapper>
  );
};

export default ToastContainer;
