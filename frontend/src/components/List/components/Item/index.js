import React from "react";
import { User, Title, Avatar } from "./styles";

export default function Item({ user }) {
  return (
    <User>
      <Title>
        <Avatar image={user.name} />
        <h4>{user.name}</h4>
      </Title>
      <p>Idade: {user.idade}</p>
      <p>Hobbie: {user.hobby}</p>
    </User>
  );
}
