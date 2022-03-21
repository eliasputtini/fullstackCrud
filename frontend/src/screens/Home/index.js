import { getDevelopers, getLevels } from "../../services/api";
import React from "react";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import LevelList from "../../components/LevelList";

import { Main, ListView } from "./styles.js";

function Home() {
  const [developers, setDevelopers] = useState();
  const [levels, setLevels] = useState();
  const [loading, setLoading] = useState(true);

  const removeUser = (id) => {
    const newList = developers.filter((dev) => id !== dev._id);
    setDevelopers(newList);
  };

  const removeLevel = (id) => {
    const newList = levels.filter((dev) => id !== dev._id);
    setLevels(newList);
  };

  useEffect(() => {
    setLoading(true);
    getDevelopers().then((response) => {
      setDevelopers(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getLevels().then((response) => {
      setLevels(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Main>
          <Form
            users={developers}
            setUsers={setDevelopers}
            levels={levels}
            setLevels={setLevels}
          />
          <br />
          <ListView>
            <List
              users={developers}
              setUsers={setDevelopers}
              removeUser={removeUser}
            />
            <LevelList
              levels={levels}
              setLevels={setLevels}
              removeLevel={removeLevel}
            />
          </ListView>
        </Main>
      )}
    </>
  );
}

export default Home;
