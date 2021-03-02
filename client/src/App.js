import './App.css';
import MainTable from './components/MainTable';
import MainForm from './components/MainForm';
import axios from 'axios';
import { useState} from 'react';

function App() {

  const [ coin, setCoin ] = useState({
      title: "",
      type: "",
      date: "",
      amount:"",
      unitPrice:"",
  })

  const submitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/coin/', coin)
          .then(res => console.log(res))
          .catch(err => console.log(err))
  }

  const changeHandler = e => {

      setCoin({
          ...coin, 
          [e.target.name ] : e.target.value
      })
  }

  const {title, type, date, amount, unitPrice } = coin;

  return (
    <div className="App">
        <MainTable />
        <MainForm 
          title={title}
          type={type}
          date={date}
          amount={amount}
          unitPrice ={unitPrice}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
    </div>
  );
}

export default App;
