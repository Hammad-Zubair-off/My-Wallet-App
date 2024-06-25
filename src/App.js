import Header from './components/Header';
import Left from './components/Left';
import Input from './components/Input';
import { useState } from 'react';
import Right from './components/Right';
import './App.css';
import { dataCont } from './components/ContextApi';

function App() {

  const [data, updateData] =useState({
    description:'',
    valueNumber:'0',
    dropValue:"Income",
    });

    const [dataArr,setArr]=useState([]);
    const [income,setIncome]=useState(0);
    const [expense,setExpense]=useState(0);
    const [total,setTotal]=useState(0);


  return (
    <dataCont.Provider value={{data, updateData , dataArr  ,setArr ,income ,setIncome , expense ,setExpense, total , setTotal}}>
      <div className="App">
        <Header />
        <Input />
        <Left /> 
        <Right />

      </div>
    </dataCont.Provider>
  );
}

export default App;
