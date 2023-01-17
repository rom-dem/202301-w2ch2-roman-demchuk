const strictEquals = (value1, value2) => {
  const equalCheck = Object.is(value1, value2);
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return false;
  }
  if (Object.is(value1, 0) && Object.is(value2, -0)) {
    return true;
  } else if (Object.is(value1, -0) && Object.is(value2, 0)) {
    return true;
  } else {
    return equalCheck;
  }
};

export default strictEquals;
