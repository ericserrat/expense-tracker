import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const buttonClickHandler = () => {
    setTitle('Testing');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={buttonClickHandler}>Change title</button>
      </div>
    </Card>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  amount: PropTypes.number,
};

export default ExpenseItem;