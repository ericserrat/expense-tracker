import React from 'react';
import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  amount: PropTypes.number,
};

export default ExpenseItem;