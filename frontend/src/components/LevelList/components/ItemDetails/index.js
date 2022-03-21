import React, { useState } from "react";
import { User, Front, Back, Title, Avatar, Form } from "./styles";
import { delLevels, patchLevels } from "../../../../services/api";

import { BiTrash, BiCheck } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";

import { useToast } from "../../../../context/ToasterProvider";
import { useSpring } from "react-spring";

export default function ItemDetails({
  level,
  changeLevel,
  removeLevel,
  close,
}) {
  const initialValues = {
    _id: level._id,
    level: level.level,
  };
  const [flipped, set] = useState(false);
  const [values, setValues] = useState(initialValues);
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
      patchLevels(level._id, values.level);
      addToast("level editado com sucesso!");
    } catch (e) {
      addToast("Erro !");
    }
    const newUser = { ...values };
    changeLevel(newUser);
  };

  const handleDelete = async (id) => {
    let error = await delLevels(id);
    console.log(error);
    if (error != "Request failed with status code 501") {
      addToast("level excluído com sucesso!");
      removeLevel(id);
    } else {
      addToast("Erro, nivel sendo utilizado !");
    }

    close();
  };

  return (
    <>
      <Front style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <User>
          <Title>
            <Title>
              {/* <Avatar image={level.name} /> */}
              <h4>{level.name}</h4>
            </Title>
          </Title>
          <Form onSubmit={handleEdit}>
            <label>Nivel: </label>
            <input
              required
              type="text"
              name="level"
              value={values.level}
              onChange={handleChange}
            />
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
              {/* <Avatar image={level.name} /> */}
              <h4>{level.level}</h4>
            </Title>
          </Title>
          <Title>
            <BiTrash
              color={"#e63946"}
              size={40}
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(level._id)}
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
