import React from "react";
import { Container } from "./styles";

import Modal from "./components/Modal";
import { useRef, useState, useEffect } from "react";
import Item from "./components/Item";
import ItemDetails from "./components/ItemDetails";

export default function LevelList({ levels, setLevels, removeLevel }) {
  const [level, setLevel] = useState();
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };
  const close = () => {
    modalRef.current.close();
  };

  useEffect(() => {
    let x = levels;
    if (level) {
      const findIndex = x.findIndex((a) => a._id === level._id);

      findIndex !== -1 && x.splice(findIndex, 1);

      setLevels([...x, level]);
    }
  }, [level]);

  if (levels) {
    return (
      <Container>
        <h2>Lista de níveis:</h2>
        <div>
          {levels.map((nivel) => (
            <div
              key={nivel._id + nivel.level}
              onClick={() => {
                setLevel(nivel);
                openModal();
              }}
            >
              <Item nivel={nivel} />
            </div>
          ))}
        </div>
        <Modal ref={modalRef}>
          <ItemDetails
            level={level}
            changeLevel={setLevel}
            removeLevel={removeLevel}
            close={close}
          />
        </Modal>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Nenhum level encontrado...</h2>
      <h3>Tente adicionar algum usando o formulário acima ☝ !!</h3>
    </Container>
  );
}
