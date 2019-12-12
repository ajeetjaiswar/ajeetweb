import { combineReducers } from 'redux';
import { authentication } from "./Authreducer";
import articleReducer from "../reducers/ArticleReducer";
import companyReducer from "../reducers/CompanyReducer";
import searchReducer from "../reducers/SearchReducer";

const rootReducer = combineReducers({
    authentication,
    articleReducer,
    companyReducer,
    searchReducer
});
export default rootReducer;
