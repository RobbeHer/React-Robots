import React from 'react';
import PropTypes from 'prop-types';

import CreateForm from './create_form';
import List from './list';

const Index = ({ categories, addCategory, deleteCategory, editCategory, updateCategory }) => {
    return (
        <div>
            <CreateForm addCategory={addCategory}></CreateForm>
            <List categories={categories}
                addCategory={addCategory}
                deleteCategory={deleteCategory}
                editCategory={editCategory}
                updateCategory={updateCategory}></List>
        </div>
    );
}

Index.propTypes = {
    categories: PropTypes.array.isRequired,
    addCategory: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired,
    updateCategory: PropTypes.func.isRequired
};

export default Index;