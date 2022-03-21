import React, { useState } from "react";

import { Container, FormStyle, Button } from "./styles";

import { postDevelopers, postLevel } from "../../services/api";
import { useToast } from "../../context/ToasterProvider";

export default function Form({ users, setUsers, levels, setLevels }) {
  const initialValues = {
    id: "",
    name: "",
    idade: "",
    hobby: "",
    nivel: "",
  };
  const { addToast } = useToast();
  const [values, setValues] = useState(initialValues);
  const [levelValues, setLevelValues] = useState({ id: "", level: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleChangeLevel = (e) => {
    const { name, value } = e.target;
    setLevelValues({ ...levelValues, [name]: value });
  };

  const handleSubmitLevel = (e) => {
    try {
      postLevel(levelValues.level);
      addToast("Nível cadastrado com sucesso!");
    } catch (e) {
      addToast("Erro !");
    }
    e.preventDefault();
    const newLevel = { ...levelValues };
    setLevels([...levels, newLevel]);
    setLevelValues({ level: "" });
  };

  const handleSubmit = (e) => {
    try {
      postDevelopers(values.name, values.idade, values.hobby, values.nivel);
      addToast("Dev cadastrado com sucesso!");
    } catch (e) {
      addToast("Erro !");
    }
    e.preventDefault();
    const newUser = { ...values };
    setUsers([...users, newUser]);
    setValues(initialValues);
  };

  const renderOptions = () => {
    return (
      levels &&
      levels.length > 0 &&
      levels.map((user, index) => {
        return <option key={user._id}>{user.level}</option>;
      })
    );
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit}>
        <h2>Adicionar desenvolvedor</h2>
        <label>Nome: </label>
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
        <label>Nivel: </label>
        <select name="nivel" onChange={handleChange} value={values.nivel}>
          <option value="">Selecione um nível</option>
          {renderOptions()}
        </select>
        <Button type="submit">Enviar</Button>
      </FormStyle>

      <FormStyle onSubmit={handleSubmitLevel}>
        <h2>Adicionar Nível</h2>
        <label>Nível: </label>
        <input
          required
          type="text"
          name="level"
          value={levelValues.level}
          onChange={handleChangeLevel}
        />

        <Button type="submit">Enviar</Button>
      </FormStyle>
    </Container>
  );
}
