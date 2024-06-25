import React, { useState } from 'react'
import { useContext } from 'react';
import { dataCont } from './ContextApi';

const Input = () => {

    const {data, updateData , dataArr ,setArr}= useContext(dataCont);
    // const [isVisible,setVisible]=useState(false);

    const handleSubmit= (event) =>{
        event.preventDefault();
        // dataArr.push(data);

        setArr((prev)=>{
            return[...prev,data];
        })
        console.log(dataArr);
    }
    
    function handleInput(event)
    {
        const { name, value }=event.target;


        updateData((prev)=>{
            return{
                ...prev,
                [name]: value,
            }
        }

    )
    }

  return (
    <div className='input-bg'>
    <form onSubmit={handleSubmit} className='inputform'>
        <select name='dropValue' onChange={handleInput}>
            <option value="Income" >Income</option>
            <option value="Expense"  >Expense</option>
        </select>

        <input type="text" placeholder='Add Description Here' name='description' onChange={handleInput}></input>
        <input type="Number" placeholder='Amount' name='valueNumber' onChange={handleInput}  required></input>

        <button type='submit'>
            Submit
        </button>
    </form>
    <br />
    <br />

    
    <br /><br />

    </div>
  )
}

export default Input