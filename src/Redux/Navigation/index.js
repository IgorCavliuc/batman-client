import { getReducerType } from "../../utils";

const initialState = {
  items: [],
};

const car = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_NAVIGATION": {
      return {
        ...state,
        items: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default car;
