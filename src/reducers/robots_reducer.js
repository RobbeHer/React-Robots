import { LOAD_ROBOTS_SUCCESS, CREATE_ROBOT_SUCCESS, EDIT_ROBOT, UPDATE_ROBOT_SUCCESS, DELETE_ROBOT_SUCCESS } from '../actions/robots';

const robots = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_ROBOTS_SUCCESS:
            return action.robots;
        case CREATE_ROBOT_SUCCESS:
            return [
                ...newState,
                action.robot
            ];
        case EDIT_ROBOT:
            const indexOfRobotToEdit = newState.findIndex(robot => {return robot.robotID === action.robotID});
            newState[indexOfRobotToEdit].isEditing = true;
            return newState;
        case UPDATE_ROBOT_SUCCESS:
            const indexOfRobotToUpdate = newState.findIndex(robot => {return robot.robotID === action.robot.robotID});
            newState[indexOfRobotToUpdate] = action.robot;
            newState[indexOfRobotToUpdate].isEditing = false;
            return newState;
        case DELETE_ROBOT_SUCCESS:
            const indexOfRobotToDelete = newState.findIndex(robot => {return robot.robotID === action.robot.robotID});
            newState.splice(indexOfRobotToDelete, 1);
            return newState;
        default:
            return newState;
    }
};

export default robots;

