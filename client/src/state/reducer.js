import CONSTANTS from "./constants";

export default (state, action) => {
  switch (action.type) {
    case CONSTANTS.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    case CONSTANTS.LOGOUT_USER:
      return {
        ...state,
        user: { name: "" }
      };
  }
};
