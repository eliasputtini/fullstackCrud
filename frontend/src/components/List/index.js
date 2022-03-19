import React from "react";
import { Container } from "./styles";

import Modal from "./components/Modal";
import { useRef, useState } from "react";
import Item from "./components/Item";
import ItemDetails from "./components/ItemDetails";

export default function List({ users, removeUser }) {
  const [dev, setDev] = useState();
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };
  const close = () => {
    modalRef.current.close();
  };
  if (users.length) {
    return (
      <Container>
        <h2>Lista de desenvolvedores:</h2>
        <div>
          {users.map((user) => (
            <div
              key={user.name + user.hobby}
              onClick={() => {
                setDev(user);
                openModal();
              }}
            >
              <Item user={user} />
            </div>
          ))}
        </div>
        <Modal ref={modalRef}>
          <ItemDetails user={dev} removeUser={removeUser} close={close} />
        </Modal>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Nenhum dev encontrado...</h2>
      <h3>Tente adicionar algum usando o formulário acima ☝ !!</h3>
    </Container>
  );
}
