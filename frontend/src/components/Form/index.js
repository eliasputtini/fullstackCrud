import React, { useState } from "react";

import { Container } from "./styles";

import { postDevelopers } from "../../services/api";

export default function Form({ users, setUsers }) {
  const initialValues = {
    id: "",
    name: "",
    idade: "",
    hobby: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    postDevelopers(values.name, values.idade, values.hobby);
    e.preventDefault();
    const newUser = { ...values };

    setUsers([...users, newUser]);
    setValues(initialValues);
  };

  return (
    <Container>
      <h2>Add new user</h2>
      <form onSubmit={handleSubmit}>
        <label>Full name: </label>
        <input
          required
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <label>Idade: </label>
        <input
          required
          type="number"
          name="idade"
          value={values.idade}
          onChange={handleChange}
        />

        <label>Hobby: </label>
        <input
          required
          type="text"
          name="hobby"
          value={values.hobby}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </Container>
  );
}
