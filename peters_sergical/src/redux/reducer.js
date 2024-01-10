import { GETCHARTDATA } from "./actionType";

const intialVal = {
  dataValue: [],
};
 const reducer = (state = intialVal, { type, payload }) => {
  switch (type) {
    case GETCHARTDATA:
      return { ...state, dataValue: payload };
    default:
      return state;
  }
};
export default reducer;