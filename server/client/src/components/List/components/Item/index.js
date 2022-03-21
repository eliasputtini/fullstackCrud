import React, { useState, useEffect } from "react";
import { User, Title, Avatar } from "./styles";

import { getLevel } from "../../../../services/api";

export default function Item({ user }) {
  const [level, setLevel] = useState([]);

  useEffect(() => {
    getLevel(user.nivel).then((response) => {
      setLevel(response.data);
    });
  }, []);
  return (
    <User>
      <Title>
        <Title>
          <Avatar image={user.name} />
          <h4>{user.name}</h4>
        </Title>
      </Title>
      <p>Idade: {user.idade}</p>
      <p>Hobbie: {user.hobby}</p>
      <p>Nivel: {level.level}</p>
    </User>
  );
}
