import React from "react";
import { User, Title, Avatar } from "./styles";
import { delDevelopers } from "../../../../services/api";

import { BiTrash } from "react-icons/bi";
import { Card } from "./card";

export default function ItemDetails({ user, removeUser, close }) {
  const handleDelete = (id) => {
    delDevelopers(id);
    removeUser(id);
    close();
  };

  return (
    <User>
      <Title>
        <Title>
          <Avatar image={user.name} />
          <h4>{user.name}</h4>
        </Title>
        <BiTrash
          color={"#e63946"}
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => handleDelete(user._id)}
        />
      </Title>
      <p>Idade: {user.idade}</p>
      <p>Hobbie: {user.hobby}</p>
    </User>
  );
}
