import React, { useState, useEffect } from "react";
import { User, Front, Back, Title, Avatar, Form } from "./styles";
import {
  delDevelopers,
  patchDevelopers,
  getLevels,
  getLevel,
} from "../../../../services/api";

import { BiTrash, BiCheck } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";

import { useToast } from "../../../../context/ToasterProvider";
import { useSpring } from "react-spring";

export default function ItemDetails({ user, changeDev, removeUser, close }) {
  const [level, setLevel] = useState([]);
  useEffect(() => {
    getLevel(user.nivel).then((response) => {
      setLevel(response.data);
    });
    getLevels().then((response) => {
      setLevels(response.data);
    });
  }, []);
  const initialValues = {
    _id: user._id,
    name: user.name,
    idade: user.idade,
    hobby: user.hobby,
    nivel: user.nivel == null ? "" : level.level,
  };
  const [flipped, set] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [levels, setLevels] = useState([]);

  const { addToast } = useToast();

  const { transform, opacity } = useSpring({
    opacity: flipped ? 0 : 1,
    transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleEdit = (e) => {
    try {
      patchDevelopers(
        user._id,
        values.name,
        values.idade,
        values.hobby,
        values.nivel
      );
      addToast("Dev editado com sucesso!");
    } catch (e) {
      addToast("Erro !");
    }
    const newUser = { ...values };
    changeDev(newUser);
  };

  const handleDelete = (id) => {
    try {
      addToast("Dev excluído com sucesso!");
      delDevelopers(id);
    } catch (e) {
      addToast("Erro !");
    }
    removeUser(id);
    close();
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
    <>
      <Front style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <User>
          <Title>
            <Title>
              <Avatar image={user.name} />
              <h4>{user.name}</h4>
            </Title>
          </Title>
          <Form onSubmit={handleEdit}>
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
            <select name="nivel" onChange={handleChange} value={values.nivel}>
              <option value="">Selecione um nível</option>
              {renderOptions()}
            </select>
          </Form>
          <Title>
            <BiCheck
              color={"#e63946"}
              size={40}
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleEdit();
                set((state) => !state);
              }}
            />
          </Title>
        </User>
      </Front>
      <Back
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
          display: opacity.interpolate((o) => (o == 0 ? "none" : "initial")),
        }}
      >
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
          <Title>
            <BiTrash
              color={"#e63946"}
              size={40}
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(user._id)}
            />
            <FiEdit3
              color={"#e63946"}
              size={40}
              style={{ cursor: "pointer" }}
              onClick={() => set((state) => !state)}
            />
          </Title>
        </User>
      </Back>
    </>
  );
}
