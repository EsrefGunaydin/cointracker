import React, { useState, useEffect } from "react";
import axios from "axios";
import GetCoins from "./GetCoins";

const MainTable = () => {
  const [coins, setCoins] = useState([0]);
  const [coinPrice, setCoinPrice] = useState({});

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/coins/")
        .then((res) => setCoins(res.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [coinPrice]);

  const deleteItem = (id) => {
    axios
      .delete("http://localhost:5000/api/coin/" + id)
      .then((res) => {
        setCoins(coins.filter((id) => id !== res.data.data._id));
        console.log(res.data.data._id);
      })
      .catch((err) => console.log(err));
  };

  const tableSum = Object.values(coins).map(
    (coin, index) => (coin.amount + index) * coin.unitPrice
  );

  return (
    <div className="container mt-2">
      <h4 className="mb-3 text-light bg-primary mx-auto p-1">My Favorite Coins Table</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th className="w-50">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Purchased Price</th>
            <th className="col-m-2">Total Value</th>
            <th scope="col">Current Price</th>
            <th scope="col">Current Value</th>
            <th scope="col">Gain/Loss</th>
            <th colSpan="2">Delete/Update</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, key) => {
            return (
              <tr key={key}>
                <th scope="row">{key + 1}</th>
                <td>{coin.title}</td>
                <td>{coin.type}</td>
                <td>{coin.date}</td>
                <td>{coin.amount}</td>
                <td>{Math.round(coin.unitPrice * 100) / 100}</td>
                <td>{Math.round(coin.amount * coin.unitPrice * 100) / 100}</td>
                <td>
                  {Math.round((coinPrice[coin.title] ? coinPrice[coin.title] : 1) * 100) / 100}
                </td>
                <td>{Math.round((coinPrice[coin.title] * coin.amount) / 100) * 100}</td>
                <td
                  className={
                    Math.round(coin.amount * (coinPrice[coin.title] - coin.unitPrice)) <= 0
                      ? "text-danger"
                      : "text-success"
                  }
                >
                  {Math.round(coin.amount * (coinPrice[coin.title] - coin.unitPrice))}
                </td>
                <td>
                  <GetCoins
                    setCoinPrice={setCoinPrice}
                    coinPrice={coinPrice}
                    coinTitle={coin.title}
                  />
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteItem(coin._id)}>
                    X
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <th scope="col"></th>
            <th scope="col">TOTAL</th>
            <th scope="col"></th>
            <th className="w-50"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th className="col-m-2">
              {"$" + Math.round(tableSum.reduce((a, b) => a + b)).toLocaleString("en-US")}
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th colSpan="2"></th>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default MainTable;
