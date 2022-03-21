import React from "react";
import { Container } from "./styles";

import Modal from "./components/Modal";
import { useRef, useState, useEffect } from "react";
import Item from "./components/Item";
import ItemDetails from "./components/ItemDetails";

export default function List({ users, setUsers, removeUser }) {
  const [dev, setDev] = useState();
  const modalRef = useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };
  const close = () => {
    modalRef.current.close();
  };

  useEffect(() => {
    let x = users;
    if (dev) {
      const findIndex = x.findIndex((a) => a._id === dev._id);

      findIndex !== -1 && x.splice(findIndex, 1);

      setUsers([...x, dev]);
    }
  }, [dev]);
  console.log(users);

  if (users && users.length > 0) {
    return (
      <Container>
        <h2>Lista de desenvolvedores:</h2>
        <div>
          {users.map((user) => (
            <div
              key={user._id + user.name}
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
          <ItemDetails
            user={dev}
            changeDev={setDev}
            removeUser={removeUser}
            close={close}
          />
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
