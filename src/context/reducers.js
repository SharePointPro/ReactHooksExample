import { RECEIVE_ITEMS, FETCHING_ITEMS } from "./action-types";

export const starwarsItemsReducer = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    case FETCHING_ITEMS:
      return {
        isFetching: true
      };
    default:
      return state;
  }
};
