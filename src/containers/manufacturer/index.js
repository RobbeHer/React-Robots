import { connect } from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Index from '../../components/manufacturer/index';
import store from '../../store';
import { loadManufacturers, filterManufacturersUsa, filterManufacturersEu, createManufacturer, editManufacturer, updateManufacturer, deleteManufacturer } from '../../actions/manufacturers';

class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadManufacturers());
    }

    render() {
        return (
            <Index manufacturers={this.props.manufacturers}
                addManufacturer={this.props.addManufacturer}
                filterManufacturersEu={this.props.filterManufacturersEu}
                filterManufacturersUsa={this.props.filterManufacturersUsa}
                deleteManufacturer={this.props.deleteManufacturer}
                editManufacturer={this.props.editManufacturer}
                updateManufacturer={this.props.updateManufacturer}/>
        );
    }
}

const mapStateToProps = (state) => {
    // mapStateToProps: mapping of the props with the state
    return {
        manufacturers: state.manufacturers
    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {
        addManufacturer : (manufacturer) => {
            dispatch(createManufacturer(manufacturer));
        },
        filterManufacturersUsa : (manufacturers) => {
            dispatch(filterManufacturersUsa(manufacturers));
        },
        filterManufacturersEu : (manufacturers) => {
            dispatch(filterManufacturersEu(manufacturers));
        },
        deleteManufacturer : (index) => {
            dispatch(deleteManufacturer(index));
        },
        editManufacturer : (index) => {
            dispatch(editManufacturer(index));
        },
        updateManufacturer : (index, manufacturer) => {
            dispatch(updateManufacturer(index, manufacturer));
        }
    }
};

IndexContainer.propTypes = {
    manufacturers: PropTypes.array.isRequired,
    addManufacturer: PropTypes.func.isRequired,
    deleteManufacturer: PropTypes.func.isRequired,
    editManufacturer: PropTypes.func.isRequired,
    updateManufacturer: PropTypes.func.isRequired
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);