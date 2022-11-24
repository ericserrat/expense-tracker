import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
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
        {filteredExpenses.map(e => <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/> )}
      </Card>
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.array,
};

export default Expenses;