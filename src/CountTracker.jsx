import propTypes from "prop-types";
import "../components/CountTracker.css";

const PRESET_TEXT = "Count: ";
const INCREMENT = 1;

function CountTracker({ count, setCount }) {
  return (
    <div>
      <h2 className="count-label">{PRESET_TEXT + count.toString()}</h2>
      <button onClick={() => setCount(count + INCREMENT)} className="count-btn">
        Click
      </button>
    </div>
  );
}

CountTracker.propTypes = {
  count: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
};

export default CountTracker;
