import App from "./../App";
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import movieReducer from "./movieReducer";

export default movieReducer;
