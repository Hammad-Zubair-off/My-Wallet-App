import React, { useContext } from 'react'
import { dataCont } from './ContextApi';



const Header = () => {

    let {total,income,expense}=useContext(dataCont);
    total=income-expense;

    
  return (
    <div className='head-bg'>
        <h1>My Wallet Balance </h1>
        <h2> ₹ {total}</h2>
        <div className='moneymanagement'>

          <p className='incomemoney'><span>Income</span>  <span> +  ₹ {income} </span></p>
          <p className='expensemoney'><span>Expense </span> <span>-  ₹ {expense} </span></p>

        </div>
    </div>
  )
}

export default Header