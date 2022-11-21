import './ExpenseItem.css';
import PropTypes from 'prop-types';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.date,
  amount: PropTypes.float,
};

export default ExpenseItem;