import myApi from '../apis/my_api';

/*
* action types
*/

export const LOAD_ROBOTS_SUCCESS = 'LOAD_ROBOTS_SUCCESS';
export const CREATE_ROBOT_SUCCESS = 'CREATE_ROBOT_SUCCESS';
export const EDIT_ROBOT = 'EDIT_ROBOT';
export const UPDATE_ROBOT_SUCCESS = 'UPDATE_ROBOT_SUCCESS';
export const DELETE_ROBOT_SUCCESS = 'DELETE_ROBOT_SUCCESS';

/*
 * action creators
 */

export function loadRobotsSuccess(robots) {
    return {type: LOAD_ROBOTS_SUCCESS, robots};
}

export function createRobotSuccess(robot) {
    return {type: CREATE_ROBOT_SUCCESS, robot}
}

export function editRobot(robotID) {
    return {type: EDIT_ROBOT, robotID}
}

export function updateRobotSuccess(robot) {
    return {type: UPDATE_ROBOT_SUCCESS, robot}
}

export function deleteRobotSuccess(robot) {
    return {type: DELETE_ROBOT_SUCCESS, robot}
}

export function loadRobots() {
    return (dispatch) => {
        return myApi.getAllRobots().then(
            (result) => {
                dispatch(loadRobotsSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function createRobot(robot) {
    return (dispatch) => {
        return myApi.createRobot(robot).then(
            (result) => {
                dispatch(createRobotSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function updateRobot(robot) {
    return (dispatch) => {
        return myApi.updateRobot(robot).then(
            (result) => {
                dispatch(updateRobotSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function deleteRobot(robotID) {
    return (dispatch) => {
        return myApi.deleteRobot(robotID).then(
            (result) => {
                dispatch(deleteRobotSuccess(result.data));
            },
            (error) => {
                    throw(error);
            }
        );
    };
}