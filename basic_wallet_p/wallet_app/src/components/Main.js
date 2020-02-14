import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function Main() {
  const [state, setState] = useState({
    id: "",
    balance: 0
  });

  useEffect(() => {
    getChain();
    getId();
    // getLast();
  }, []);

  function getChain() {
    Axios.get("http://0.0.0.0:5000/chain")
      .then(response => {
        console.log("Chain:", response);
        const chain = response.data.chain;
        var balance = 0;
        chain.forEach(block => {
          block.transactions.forEach(trans => {
            const id = trans.recipient;
            trans.recipient === id ? (balance += 1) : (balance = balance);
          });
          setState({ balance: balance });
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  function getId() {
    Axios.get(
      "/Users/cameronalvarado/Documents/CS/Blockchain/client_mining_p/my_id.txt"
    ).then(response => {
      console.log("Id:", response);
    });
  }

  function getLast() {
    Axios.get("http://0.0.0.0:5000/last_block")
      .then(response => {
        console.log("Last:", response);
        const transactions = response.data.last_block.transactions;
        const id = transactions[0].recipient;

        // var balance = 0;
        // transactions.forEach(trans => {
        //   trans.recipient === id ? (balance += 1) : (balance = balance);
        // });
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
      <p>{state.balance}</p>

      <h2>Transactions</h2>
    </div>
  );
}

export default Main;
