import myApi from '../apis/my_api';

/*
* action types
*/

export const LOAD_MANUFACTURERS_SUCCESS = 'LOAD_MANUFACTURERS_SUCCESS';
export const FILTER_MANUFACTURERS_USA_SUCCESS = 'FILTER_MANUFACTURERS_USA_SUCCESS';
export const FILTER_MANUFACTURERS_EU_SUCCESS = 'FILTER_MANUFACTURERS_EU_SUCCESS';
export const CREATE_MANUFACTURER_SUCCESS = 'CREATE_MANUFACTURER_SUCCESS';
export const EDIT_MANUFACTURER = 'EDIT_MANUFACTURER';
export const UPDATE_MANUFACTURER_SUCCESS = 'UPDATE_MANUFACTURER_SUCCESS';
export const DELETE_MANUFACTURER_SUCCESS = 'DELETE_MANUFACTURER_SUCCESS';

/*
 * action creators
 */

export function loadManufacturersSuccess(manufacturers) {
    return {type: LOAD_MANUFACTURERS_SUCCESS, manufacturers};
}

export function filterManufacturersUsaSuccess(manufacturers) {
    return {type: FILTER_MANUFACTURERS_USA_SUCCESS, manufacturers};
}

export function filterManufacturersEuSuccess(manufacturers) {
    return {type: FILTER_MANUFACTURERS_EU_SUCCESS, manufacturers};
}

export function createManufacturerSuccess(manufacturer) {
    return {type: CREATE_MANUFACTURER_SUCCESS, manufacturer}
}

export function editManufacturer(manufacturerID) {
    return {type: EDIT_MANUFACTURER, manufacturerID}
}

export function updateManufacturerSuccess(manufacturer) {
    return {type: UPDATE_MANUFACTURER_SUCCESS, manufacturer}
}

export function deleteManufacturerSuccess(manufacturer) {
    return {type: DELETE_MANUFACTURER_SUCCESS, manufacturer}
}

export function loadManufacturers() {
    return (dispatch) => {
        return myApi.getAllManufacturers().then(
            (result) => {
                dispatch(loadManufacturersSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function filterManufacturersUsa(manufacturers) {
    return (dispatch) => {
        return myApi.getAllManufacturers().then(
            (result) => {
                let usaManufacturers = [];

                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i].location.slice(-3) === "USA") {
                        usaManufacturers.push(result.data[i]);
                    }
                }

                dispatch(filterManufacturersUsaSuccess(usaManufacturers));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function filterManufacturersEu(manufacturers) {
    return (dispatch) => {
        return myApi.getAllManufacturers().then(
            (result) => {
                let euManufacturers = [];

                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i].location.slice(-3) !== "USA") {
                        euManufacturers.push(result.data[i]);
                    }
                }

                dispatch(filterManufacturersEuSuccess(euManufacturers));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function createManufacturer(manufacturer) {
    return (dispatch) => {
        return myApi.createManufacturer(manufacturer).then(
            (result) => {
                dispatch(createManufacturerSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function updateManufacturer(manufacturer) {
    return (dispatch) => {
        return myApi.updateManufacturer(manufacturer).then(
            (result) => {
                dispatch(updateManufacturerSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function deleteManufacturer(manufacturerID) {
    return (dispatch) => {
        return myApi.deleteManufacturer(manufacturerID).then(
            (result) => {
                dispatch(deleteManufacturerSuccess(result.data));
            },
            (error) => {
                    throw(error);
            }
        );
    };
}