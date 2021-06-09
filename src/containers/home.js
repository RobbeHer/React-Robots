import React, { Component } from 'react';

import Home from '../components/home';
import store from '../store';
import { loadRobots } from '../actions/robots';
import { loadManufacturers } from '../actions/manufacturers';
import { loadCategories } from '../actions/categories';

class HomeContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadRobots());
        store.dispatch(loadManufacturers());
        store.dispatch(loadCategories());
    }

    render() {
        return (
            <Home />
        );
    }
}

export default HomeContainer;