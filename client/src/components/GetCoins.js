import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCoins = (props) => {
  const { setCoinPrice, coinTitle, coinPrice } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/coinprice/")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [coinPrice]);

  const findCoin = async (coinName) => {
    try {
      await data.find((item) => {
        if (item.currency === coinName) {
          setCoinPrice({ ...coinPrice, [coinName]: item.price });
        }
        return false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="btn btn-outline-primary" onClick={() => findCoin(coinTitle)}>
        Update
      </button>
    </>
  );
};

export default GetCoins;
