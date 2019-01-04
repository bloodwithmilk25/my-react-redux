import _ from "lodash";

import { FETCH_CELLS, EDIT_CELL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CELLS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case EDIT_CELL:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
