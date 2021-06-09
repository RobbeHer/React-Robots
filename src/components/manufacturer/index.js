import React from 'react';
import PropTypes from 'prop-types';

import CreateForm from './create_form';
import SelectList from './select_list';
import List from './list';

const Index = ({ manufacturers, filterManufacturersUsa, filterManufacturersEu, addManufacturer, deleteManufacturer, editManufacturer, updateManufacturer }) => {
    return (
        <div>
            <CreateForm addManufacturer={addManufacturer}></CreateForm>
            <SelectList filterManufacturersUsa={filterManufacturersUsa}
                filterManufacturersEu={filterManufacturersEu}/>
            <List manufacturers={manufacturers}
                deleteManufacturer={deleteManufacturer}
                editManufacturer={editManufacturer}
                updateManufacturer={updateManufacturer}></List>
        </div>
    );
}

Index.propTypes = {
    manufacturers: PropTypes.array.isRequired,
    addManufacturer: PropTypes.func.isRequired,
    deleteManufacturer: PropTypes.func.isRequired,
    editManufacturer: PropTypes.func.isRequired,
    updateManufacturer: PropTypes.func.isRequired
};

export default Index;