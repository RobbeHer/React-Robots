import React from "react";
import PropTypes from 'prop-types';

const Item = ({ manufacturer, index, deleteManufacturer, editManufacturer }) => {
    return (
        <div className="post">
            <h3>{manufacturer.name}</h3>
            <p>Location: {manufacturer.location}</p>
            <div className="control-buttons">
                <button className="edit"onClick={() => {editManufacturer(manufacturer.manufacturerID)}} >Edit</button>
                &nbsp;&nbsp;
                <button className="delete" onClick={() => {deleteManufacturer(manufacturer.manufacturerID)}}>Delete</button>
            </div>
        </div>
    )
};

Item.propTypes = {
    manufacturer: PropTypes.shape({
        manufacturerID: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired,
    deleteManufacturer: PropTypes.func.isRequired,
    editManufacturer: PropTypes.func.isRequired
};

export default Item;