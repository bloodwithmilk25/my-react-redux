import cells from "../apis/cells";
import { FETCH_CELLS, EDIT_CELL } from "./types";

export const fetchCells = () => async dispatch => {
  const response = await cells.get("/cells/");

  dispatch({ type: FETCH_CELLS, payload: response.data });
};

export const editCell = cell => async dispatch => {
  const response = await cells.patch(`/cells/${cell.id}/`, {
    taken: !cell.taken
  });

  dispatch({ type: EDIT_CELL, payload: response.data });
};
