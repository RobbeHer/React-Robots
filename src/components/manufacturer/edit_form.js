import React, { Component } from "react";
import PropTypes from 'prop-types';

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = { 
            manufacturerID: props.manufacturer.manufacturerID,
            name: props.manufacturer.name,
            location: props.manufacturer.location
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeLocation(event) {
        this.setState({location: event.target.value});
    }

    render() {
        return (
            <div className="post">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" placeholder="Enter Name" 
                            value={this.state.name} onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="location" type="text" placeholder="Enter Location" 
                            value={this.state.location} onChange={this.handleChangeLocation}/>
                    <br />
                    <div className="control-buttons">
                        <button className="edit">Update</button>
                    </div>
                </form>
            </div>

        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let manufacturer = {
            manufacturerID: this.state.manufacturerID,
            name: this.state.name,
            location: this.state.location,
        };

        console.log(manufacturer);
        this.props.updateManufacturer(manufacturer)
    }
}

EditForm.propTypes = {
    manufacturer: PropTypes.shape({
        manufacturerID: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired,
    updateManufacturer: PropTypes.func.isRequired
};

export default EditForm;