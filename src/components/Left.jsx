import React from 'react'
import { useContext ,useEffect} from 'react'
import { dataCont} from './ContextApi'


const Left = () => {

  const { dataArr, income, setIncome } = useContext(dataCont);

  useEffect(() => {

    const totalAmount = dataArr.filter((item) => item.dropValue === "Income").reduce((total, item) => total + Number(item.valueNumber), 0);
  
    setIncome(totalAmount);
  }, [dataArr, income]);
  

  return (

    
    <div className='left'>

      <h3 className='incomehead'>Income</h3>
      {dataArr.map((data)=> {
        return data.dropValue === 'Income' ? <div className='IncomeHistory'>

          <span>{data.description}</span>  <span> +  ₹ {data.valueNumber}</span>

        </div> : '';
      })}
    </div>
  )
}

export default Left