import { LOAD_CATEGORIES_SUCCESS, CREATE_CATEGORY_SUCCESS, EDIT_CATEGORY, UPDATE_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS } from '../actions/categories';

const categories = (state = [], action) => {
    let newState = [...state];
    switch(action.type) {
        case LOAD_CATEGORIES_SUCCESS:
            return action.categories;
        case CREATE_CATEGORY_SUCCESS:
            return [
                ...newState,
                action.category
            ];
        case EDIT_CATEGORY:
            const indexOfCategoryToEdit = newState.findIndex(category => {return category.categoryID === action.categoryID});
            newState[indexOfCategoryToEdit].isEditing = true;
            return newState;
        case UPDATE_CATEGORY_SUCCESS:
            const indexOfCategoryToUpdate = newState.findIndex(category => {return category.categoryID === action.category.categoryID});
            newState[indexOfCategoryToUpdate] = action.category;
            newState[indexOfCategoryToUpdate].isEditing = false;
            return newState;
        case DELETE_CATEGORY_SUCCESS:
            const indexOfCategoryToDelete = newState.findIndex(category => {return category.categoryID === action.category.categoryID});
            newState.splice(indexOfCategoryToDelete, 1);
            return newState;
        default:
            return newState;
    }
};

export default categories;