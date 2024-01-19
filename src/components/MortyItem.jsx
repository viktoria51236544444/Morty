import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../helpers/const";

const MortyItem = () => {
  const { id } = useParams();
  const [state, setState] = useState("");
  const stateFunc = async () => {
    const { data } = await axios(`${API}/${id}`);
    setState(data);
  };
  useEffect(() => {
    stateFunc();
  }, [id]);
  return (
    <div className="container">
      <h1>{state.name}</h1>
      <h2>{state.gender}</h2>
      <h3>{state.species}</h3>
      <img src={state.image} alt="" />
    </div>
  );
};

export default MortyItem;
