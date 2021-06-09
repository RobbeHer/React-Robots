import { connect } from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Index from '../../components/category/index';
import store from '../../store';
import { loadCategories, createCategory, editCategory, updateCategory, deleteCategory } from '../../actions/categories';

class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadCategories());
    }

    render() {
        return (
            <Index categories={this.props.categories}
                addCategory={this.props.addCategory}
                deleteCategory={this.props.deleteCategory}
                editCategory={this.props.editCategory}
                updateCategory={this.props.updateCategory}/>
        );
    }
}

const mapStateToProps = (state) => {
    // mapStateToProps: mapping of the props with the state
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {
        addCategory : (category) => {
            dispatch(createCategory(category));
        },
        deleteCategory : (index) => {
            dispatch(deleteCategory(index));
        },
        editCategory : (index) => {
            dispatch(editCategory(index));
        },
        updateCategory : (index, category) => {
            dispatch(updateCategory(index, category));
        }
    }
};

IndexContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    addCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);