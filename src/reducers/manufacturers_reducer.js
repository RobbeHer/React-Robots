import { LOAD_MANUFACTURERS_SUCCESS, FILTER_MANUFACTURERS_USA_SUCCESS, FILTER_MANUFACTURERS_EU_SUCCESS, CREATE_MANUFACTURER_SUCCESS, EDIT_MANUFACTURER, UPDATE_MANUFACTURER_SUCCESS, DELETE_MANUFACTURER_SUCCESS } from '../actions/manufacturers';

const manufacturers = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_MANUFACTURERS_SUCCESS:
            return action.manufacturers;
        case FILTER_MANUFACTURERS_USA_SUCCESS:
            return action.manufacturers;
        case FILTER_MANUFACTURERS_EU_SUCCESS:
            return action.manufacturers;
        case CREATE_MANUFACTURER_SUCCESS:
            return [
                ...newState,
                action.manufacturer
            ];
        case EDIT_MANUFACTURER:
            const indexOfManufacturerToEdit = newState.findIndex(manufacturer => {return manufacturer.manufacturerID === action.manufacturerID});
            newState[indexOfManufacturerToEdit].isEditing = true;
            return newState;
        case UPDATE_MANUFACTURER_SUCCESS:
            const indexOfManufacturerToUpdate = newState.findIndex(manufacturer => {return manufacturer.manufacturerID === action.manufacturer.manufacturerID});
            newState[indexOfManufacturerToUpdate] = action.manufacturer;
            newState[indexOfManufacturerToUpdate].isEditing = false;
            return newState;
        case DELETE_MANUFACTURER_SUCCESS:
            const indexOfManufacturerToDelete = newState.findIndex(manufacturer => {return manufacturer.manufacturerID === action.manufacturer.manufacturerID});
            newState.splice(indexOfManufacturerToDelete, 1);
            return newState;
        default:
            return newState;
    }
};

export default manufacturers;

