import React from "react";
import PropTypes from 'prop-types';

import Item from './item';
import EditForm from './edit_form';

const List = ( { robots, deleteRobot, editRobot, updateRobot } ) => {

    robots.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const output = robots.map ( (robot, i) => {
        return (
            <div key={i} >
                { robot.isEditing ? <EditForm robot={robot} index={i} updateRobot={updateRobot} /> 
                                  : <Item robot={robot} index={i} updateRobot={updateRobot} deleteRobot={deleteRobot} editRobot={editRobot}/> }
            </div>
        )
    });

    return (
        <div>
            <h1 className="post_heading">All Robots</h1>
            {output}
        </div>
    );
};

List.propTypes = {
    robots: PropTypes.array.isRequired,
    deleteRobot: PropTypes.func.isRequired,
    editRobot: PropTypes.func.isRequired,
    updateRobot: PropTypes.func.isRequired
};

export default List;