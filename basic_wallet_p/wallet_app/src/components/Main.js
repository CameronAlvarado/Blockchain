import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Main() {
  const [state, setState] = useState({
    id: ""
  });

  useEffect(() => {
    getChain();
    getLast();
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
      });
  }

  function getLast() {
    Axios.get("http://0.0.0.0:5000/last_block")
      .then(response => {
        // handle success
        console.log(response);
        const last_block = response.data.last_block.transactions[0];
        const id = last_block.recipient;
        setState({ id: id });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
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
