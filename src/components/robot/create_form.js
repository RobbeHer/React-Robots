import { object } from "prop-types";
import React, { Component } from "react";
import PropTypes from 'prop-types';

import store from '../../store';

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state = { 
            name: "",
            serialnumber: "",
            manufacturer: 1,
            category: 1
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

    clearState() {
        this.setState({ 
            name: "",
            serialnumber: "",
            manufacturer: 1,
            category: 1
        });
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
            <div className="post-container">
                <h1 className="post_heading">Create Robot</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text"  placeholder="Enter Name" 
                            value={this.state.name} onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="serialnumber" type="text"  placeholder="Enter Serialnumber" 
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
                    <button>Create</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let robot = {
            name: this.state.name,
            serialnumber: this.state.serialnumber,
            manufacturerID: this.state.manufacturer,
            categoryID: this.state.category,
            image: "robot1.jpg"
        };

        console.log(robot);
        this.props.addRobot(robot);

        this.clearState();
    }
}

CreateForm.propTypes = {
    addRobot: PropTypes.func.isRequired
};

export default CreateForm;