import propTypes from "prop-types";
import { useRef } from "react";

const checkForConditions = (reference, comparisons, values) => {
  for (let i = 0; i < comparisons.length; i++) {
    if (reference == comparisons[i]) {
      return values[i];
    }
  }

  return null;
};

function ConditionLabel({ reference, comparisons, values }) {
  const lastResult = useRef(null);
  const result = checkForConditions(reference, comparisons, values);

  if (result !== null) {
    lastResult.current = result;
  }

  return (
    lastResult.current && (
      <h2 className="condition-label">{lastResult.current}</h2>
    )
  );
}

ConditionLabel.defaultProps = {
  comparisons: [],
  values: [],
};

ConditionLabel.propTypes = {
  reference: propTypes.any.isRequired,
  comparisons: propTypes.array.isRequired,
  values: propTypes.array.isRequired,
};

export default ConditionLabel;
