import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(e => e.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.array,
};

export default Expenses;