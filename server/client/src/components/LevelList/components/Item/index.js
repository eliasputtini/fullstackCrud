import React from "react";
import { User, Title, Avatar } from "./styles";

export default function Item({ nivel }) {
  return (
    <User>
      <Title>
        <Title>
          {/* <Avatar image={user.name} /> */}
          <h4>{nivel.level}</h4>
        </Title>
      </Title>
    </User>
  );
}
