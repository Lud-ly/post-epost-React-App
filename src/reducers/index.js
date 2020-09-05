import { combineReducers } from 'redux';
import ReducerPosts from "./reducer-posts"
import ReducerActivePost from "./reducer-active-post"
import {reducer as ReducerForm} from "redux-form"

const rootReducer = combineReducers({
 posts : ReducerPosts,
activePost : ReducerActivePost,
form : ReducerForm

});

export default rootReducer;
