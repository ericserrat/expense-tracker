import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => setEnteredTitle(event.target.value);
  const amountChangeHandler = event => setEnteredAmount(event.target.value);
  const dateChangeHandler = event => setEnteredDate(event.target.value);

  /*
  // Example with one single state
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const titleChangeHandler = (event) => {
    // WRONG WAY
    setUserInput({
      ...userInput,
      enteredTitle
    });

    // CORRECT WAY - Use previous state
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    })
  };
  */

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2023-12-12' onChange={dateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;