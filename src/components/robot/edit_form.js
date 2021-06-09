import React, { Component } from "react";
import PropTypes from 'prop-types';

import store from '../../store';

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = { 
            robotID: props.robot.robotID,
            name: props.robot.name,
            serialnumber: props.robot.serialnumber,
            manufacturer: props.robot.manufacturerID,
            category: props.robot.categoryID
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSerialnumber = this.handleChangeSerialnumber.bind(this);
        this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeSerialnumber(event) {
        this.setState({serialnumber: event.target.value});
    }

    handleChangeManufacturer(event) {
        this.setState({manufacturer: parseInt(event.target.value)});
    }

    handleChangeCategory(event) {
        this.setState({category: parseInt(event.target.value)});
    }

    render() {
        let manufacturers = store.getState().manufacturers;
        let categories = store.getState().categories;

        manufacturers.sort((a, b) => (a.manufacturerID > b.manufacturerID) ? 1 : -1)
        categories.sort((a, b) => (a.categoryID > b.categoryID) ? 1 : -1)

        const outputManufacturers = [];
        for (var i = 0 ; i < manufacturers.length; i++) {
            outputManufacturers.push(<option key={i} value={manufacturers[i].manufacturerID}>{manufacturers[i].name}</option>)
        }

        const outputCategories = [];
        for (var i = 0 ; i < categories.length; i++) {
            outputCategories.push(<option key={i} value={categories[i].categoryID}>{categories[i].name}</option>)
        }

        return (
            <div className="post">
                <div className="alright">
                    <img src={"./images/" + this.props.robot.image} height={150} alt="robot" />
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" placeholder="Enter Name" 
                            value={this.state.name} onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="serialnumber" type="text" placeholder="Enter Serialnumber" 
                            value={this.state.serialnumber} onChange={this.handleChangeSerialnumber}/>
                    <br />
                    <select className="form-control" id="manufacturer" value={this.state.manufacturer} onChange={this.handleChangeManufacturer} >
                        {outputManufacturers}
                    </select>
                    <br />
                    <select className="form-control" id="category" value={this.state.category} onChange={this.handleChangeCategory} >
                        {outputCategories}
                    </select>
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

        let robot = {
            robotID: this.state.robotID,
            name: this.state.name,
            serialnumber: this.state.serialnumber,
            manufacturerID: this.state.manufacturer,
            categoryID: this.state.category,
            image: "robot1.jpg"
        };

        console.log(robot);
        this.props.updateRobot(robot)
    }
}

EditForm.propTypes = {
    robot: PropTypes.shape({
        robotID: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        serialnumber: PropTypes.string.isRequired,
        manufacturerID: PropTypes.number.isRequired,
        categoryID: PropTypes.number.isRequired,
        manufacturer: PropTypes.shape({
            manufacturerID: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired
        }).isRequired,
        category: PropTypes.shape({
            categoryID: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    updateRobot: PropTypes.func.isRequired
};

export default EditForm;