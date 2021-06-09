import React from 'react';
import PropTypes from 'prop-types';

import CreateForm from './create_form';
import List from './list';

const Index = ({ robots, addRobot, deleteRobot, editRobot, updateRobot }) => {
    return (
        <div>
            <CreateForm addRobot={addRobot}></CreateForm>
            <List robots={robots}
                deleteRobot={deleteRobot}
                editRobot={editRobot}
                updateRobot={updateRobot}></List>
        </div>
    );
}

Index.propTypes = {
    robots: PropTypes.array.isRequired,
    addRobot: PropTypes.func.isRequired,
    deleteRobot: PropTypes.func.isRequired,
    editRobot: PropTypes.func.isRequired,
    updateRobot: PropTypes.func.isRequired
};

export default Index;