import myApi from '../apis/my_api';

/*
* action types
*/

export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';

/*
 * action creators
 */

export function loadCategoriesSuccess(categories) {
    return {type: LOAD_CATEGORIES_SUCCESS, categories};
}

export function createCategorySuccess(category) {
    return {type: CREATE_CATEGORY_SUCCESS, category}
}

export function editCategory(categoryID) {
    return {type: EDIT_CATEGORY, categoryID}
}

export function updateCategorySuccess(category) {
    return {type: UPDATE_CATEGORY_SUCCESS, category}
}

export function deleteCategorySuccess(category) {
    return {type: DELETE_CATEGORY_SUCCESS, category}
}

export function loadCategories() {
    return (dispatch) => {
        return myApi.getAllCategories().then(
            (result) => {
                dispatch(loadCategoriesSuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function createCategory(category) {
    return (dispatch) => {
        return myApi.createCategory(category).then(
            (result) => {
                dispatch(createCategorySuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function updateCategory(category) {
    return (dispatch) => {
        return myApi.updateCategory(category).then(
            (result) => {
                dispatch(updateCategorySuccess(result.data));
            },
            (error) => {
                throw(error);
            }
        );
    };
}

export function deleteCategory(categoryID) {
    return (dispatch) => {
        return myApi.deleteCategory(categoryID).then(
            (result) => {
                dispatch(deleteCategorySuccess(result.data));
            },
            (error) => {
                    throw(error);
            }
        );
    };
}