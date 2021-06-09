import React, {Component} from "react";
import PropTypes from 'prop-types';

class Item extends Component {
    constructor(props) {
        super()

        this.handleDuplicateCategory = this.handleDuplicateCategory.bind(this);
    }

    handleDuplicateCategory() {
        
        let name = this.props.category.name + " -dupblicated"

        let category = {
            name: name,
            comment: this.props.category.comment
        };

        console.log(category);
        this.props.addCategory(category)
    }

    render() {
        return (
            <div className="post">
                <h3>{this.props.category.name}</h3>
                <p>Comment: {this.props.category.comment}</p>
                <div className="control-buttons">
                    <button className="edit"onClick={() => {this.props.editCategory(this.props.category.categoryID)}} >Edit</button>
                    &nbsp;&nbsp;
                    <button className="delete" onClick={() => {this.props.deleteCategory(this.props.category.categoryID)}}>Delete</button>
                </div>
                
                <button className="edit" onClick={() => {this.handleDuplicateCategory()}} >Duplicate</button>
            </div>
        )
    }
};

Item.propTypes = {
    category: PropTypes.shape({
        categoryID: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
    }).isRequired,
    deleteCategory: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired
};

export default Item;