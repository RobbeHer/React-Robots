import React from "react";
import PropTypes from 'prop-types';

import Item from './item';
import EditForm from './edit_form';

const List = ( { categories, addCategory, deleteCategory, editCategory, updateCategory } ) => {
    const output = categories.map ( (category, i) => {
        return (
            <div key={i} >
                { category.isEditing ? <EditForm category={category} index={i} updateCategory={updateCategory} /> 
                                  : <Item category={category} index={i} addCategory={addCategory} deleteCategory={deleteCategory} editCategory={editCategory}/>}
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Categories</h1>
            {output}
        </div>
    );
};

List.propTypes = {
    categories: PropTypes.array.isRequired,
    addCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
};

export default List;