import { combineReducers } from 'redux';

import robots from './robots_reducer';
import manufacturers from './manufacturers_reducer';
import categories from './categories_reducer';

const reducers = combineReducers({
    robots,
    manufacturers,
    categories
});

export default reducers;


