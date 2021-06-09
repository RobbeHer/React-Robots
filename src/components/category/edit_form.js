import React, { Component } from "react";
import PropTypes from 'prop-types';

import store from '../../store';

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = { 
            categoryID: props.category.categoryID,
            name: props.category.name,
            comment: props.category.comment
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangeComment(event) {
        this.setState({comment: event.target.value});
    }

    render() {
        return (
            <div className="post">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input required className="form-control" id="name" type="text" placeholder="Enter Name" 
                            value={this.state.name} onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="comment" type="text" placeholder="Enter comment" 
                            value={this.state.comment} onChange={this.handleChangeComment}/>
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

        let category = {
            categoryID: this.state.categoryID,
            name: this.state.name,
            comment: this.state.comment,
        };

        console.log(category);
        this.props.updateCategory(category)
    }
}

EditForm.propTypes = {
    category: PropTypes.shape({
        categoryID: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired
    }).isRequired,
    updateCategory: PropTypes.func.isRequired
};

export default EditForm;