import { connect } from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Index from '../../components/robot/index';
import store from '../../store';
import { loadRobots, createRobot, editRobot, updateRobot, deleteRobot } from '../../actions/robots';

class IndexContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadRobots());
    }

    render() {
        return (
            <Index robots={this.props.robots}
                addRobot={this.props.addRobot}
                deleteRobot={this.props.deleteRobot}
                editRobot={this.props.editRobot}
                updateRobot={this.props.updateRobot}/>
        );
    }
}

const mapStateToProps = (state) => {
    // mapStateToProps: mapping of the props with the state
    return {
        robots: state.robots
    }
};

const mapDispatchToProps = (dispatch) => {
    // mapDispatchToProps: mapping of the eventhandlers with dispatch
    return {
        addRobot : (robot) => {
            dispatch(createRobot(robot));
        },
        deleteRobot : (index) => {
            dispatch(deleteRobot(index));
        },
        editRobot : (index) => {
            dispatch(editRobot(index));
        },
        updateRobot : (index, robot) => {
            dispatch(updateRobot(index, robot));
        }
    }
};

IndexContainer.propTypes = {
    robots: PropTypes.array.isRequired,
    addRobot: PropTypes.func.isRequired,
    deleteRobot: PropTypes.func.isRequired,
    editRobot: PropTypes.func.isRequired,
    updateRobot: PropTypes.func.isRequired
};

export default connect( mapStateToProps, mapDispatchToProps )(IndexContainer);