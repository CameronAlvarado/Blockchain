import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Main() {
  const [state, setState] = useState({
    id: ""
  });

  useEffect(() => {
    getChain();
  }, []);

  function getChain() {
    Axios.get("http://0.0.0.0:5000/chain")
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
    // setState({ id: client });
  }

  return (
    <div className="Main">
      <h2>Id</h2>
      <p>{state.id}</p>

      <h2>Balance</h2>

      <h2>Transactions</h2>
    </div>
  );
}

export default Main;
