import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  counter: 1
};

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INC": {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case "DEC": {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case "RESET": {
      return {
        ...state,
        counter: 0
      };
    }
    case "INC_CUSTOM": {
      return {
        ...state,
        counter: state.counter + action.payload
      };
    }
    default:
      return state;
  }
};
const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
