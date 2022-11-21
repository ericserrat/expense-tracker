import PropTypes from "prop-types";
import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

export default Card;