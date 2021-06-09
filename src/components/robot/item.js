import React, { Component } from "react";
import PropTypes from 'prop-types';

class Item extends Component {
    constructor (props) {
        super();

        this.handleChangeImage = this.handleChangeImage.bind(this);
    }

    handleChangeImage() {
        let number = Math.floor(Math.random() * 8);
        let image = "robot" + number.toString() + ".jpg";

        let robot = {
            robotID: this.props.robot.robotID,
            name: this.props.robot.name,
            serialnumber: this.props.robot.serialnumber,
            manufacturerID: this.props.robot.manufacturerID,
            categoryID: this.props.robot.categoryID,
            image: image
        };

        console.log(robot);
        this.props.updateRobot(robot)
    }
    
    render() {
        return (
            <div className="post">
                <div className="alright">
                    <button className="edit" onClick={() => {this.handleChangeImage()}} >Image</button>
                    &nbsp;&nbsp;
                    <img src={"images/" + this.props.robot.image} height={150} alt="robot" />
                </div>
                <h3>{this.props.robot.name} ({this.props.robot.category.name})</h3>
                <p>Serial Number: {this.props.robot.serialnumber}<br/>
                    Manufacturer: {this.props.robot.manufacturer.name}</p>
                <div className="control-buttons">
                    <button className="edit" onClick={() => {this.props.editRobot(this.props.robot.robotID)}} >Edit</button>
                    &nbsp;&nbsp;
                    <button className="delete" onClick={() => {this.props.deleteRobot(this.props.robot.robotID)}} >Delete</button>
                </div>
            </div>
        )
    }
};

Item.propTypes = {
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
    deleteRobot: PropTypes.func.isRequired,
    editRobot: PropTypes.func.isRequired
};

export default Item;