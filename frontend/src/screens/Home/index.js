import { getDevelopers } from "../../services/api";
import React from "react";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";

import { Main, Content, Marker, Image } from "./styles.js";

function Home() {
  const [developers, setDevelopers] = useState();
  const [loading, setLoading] = useState(true);

  const removeUser = (id) => {
    const newList = developers.filter((dev) => id !== dev._id);
    setDevelopers(newList);
  };

  useEffect(() => {
    setLoading(true);
    getDevelopers().then((response) => {
      console.log(response.data);
      setDevelopers(response.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <Main>
          <Form users={developers} setUsers={setDevelopers} />
          <br />
          <List users={developers} removeUser={removeUser} />
        </Main>
      )}
    </>
  );
}

export default Home;
