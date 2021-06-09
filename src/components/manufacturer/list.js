import React from "react";
import PropTypes from 'prop-types';

import Item from './item';
import EditForm from './edit_form';

const List = ( { manufacturers, deleteManufacturer, editManufacturer, updateManufacturer } ) => {
    const output = manufacturers.map ( (manufacturer, i) => {
        return (
            <div key={i} >
                { manufacturer.isEditing ? <EditForm manufacturer={manufacturer} index={i} updateManufacturer={updateManufacturer} /> 
                                  : <Item manufacturer={manufacturer} index={i} deleteManufacturer={deleteManufacturer} editManufacturer={editManufacturer}/>}
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Manufacturers</h1>
            {output}
        </div>
    );
};

List.propTypes = {
    manufacturers: PropTypes.array.isRequired,
    deleteManufacturer: PropTypes.func.isRequired,
    editManufacturer: PropTypes.func.isRequired,
    updateManufacturer: PropTypes.func.isRequired
};


export default List;