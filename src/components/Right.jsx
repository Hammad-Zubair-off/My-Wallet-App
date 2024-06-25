import React from 'react'
import { useContext ,useEffect } from 'react'
import { dataCont} from './ContextApi'


const Left = () => {

  
  const { dataArr, expense, setExpense } = useContext(dataCont);

  useEffect(() => {

    const totalAmount = dataArr.filter((item) => item.dropValue === "Expense").reduce((total, item) => total + parseInt(item.valueNumber), 0);
  
    setExpense(totalAmount);
    console.log(expense);
    console.log(totalAmount);

  }, [dataArr, expense]);

  
  return (
    <div className='right'>

    <h3 className='expensehead'>Expense</h3>

      {dataArr.map((data)=> {
        return data.dropValue === 'Expense' ? <div className='IncomeHistory'>

        <span>{data.description}</span>  <span> +  ₹ {data.valueNumber}</span>

      </div> : '';
      })}
    </div>
  )
}

export default Left