import { Wrapper, Box, Backdrop } from "./styles";
import { useState, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(({ children }, ref) => {
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });
  const [display, setDisplay] = useState(false);

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };
  if (display) {
    return (
      <Wrapper>
        <Backdrop onClick={close} />
        <Box>{children}</Box>
      </Wrapper>
    );
  }
  return null;
});

export default Modal;
