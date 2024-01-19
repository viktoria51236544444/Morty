import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

const RickList = () => {
  const [rick, setRick] = useState([]);
  const rickFunc = async () => {
    const { data } = await axios(API);
    setRick(data.results);
  };
  useEffect(() => {
    rickFunc();
  }, []);
  return (
    <div>
      <h1 className="h1">Rick and Morty</h1>
      {rick.map((elem) => (
        <Link to={`/item/${elem.id}`} key={elem.id}>
          <li className="li">{elem.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default RickList;
