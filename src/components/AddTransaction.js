import React from 'react';
import {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  return (
    <>
        <p className = "block">
            <b>Add Transaction</b>
        </p>
        <form onSubmit={onSubmit} className="block">
            <div className="form-control">
                <label htmlFor="text">Expense</label>
                <input  type="text" value={text} 
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter Transection Name" />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount </label>
                <input  type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter Amount"/>
            </div><br/>
            <button className="btn">
                Add Transaction
            </button>
        </form>
    </>
  )
}