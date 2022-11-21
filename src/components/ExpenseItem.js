import PropTypes from 'prop-types';
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  amount: PropTypes.number,
};

export default ExpenseItem;