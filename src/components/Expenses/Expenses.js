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

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(e =>
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date}/>
    );
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {expensesContent}
      </Card>
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.array,
};

export default Expenses;