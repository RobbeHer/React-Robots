import React, { Component } from "react";
import PropTypes from 'prop-types';

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state = { 
            name: "",
            comment: "",
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

    clearState() {
        this.setState({ 
            name: "",
            comment: "",
         });
    }

    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Create Category</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                <input required className="form-control" id="name" type="text" placeholder="Enter Name" 
                            value={this.state.name} onChange={this.handleChangeName}/>
                    <br />
                    <input required className="form-control" id="comment" type="text" placeholder="Enter Comment" 
                            value={this.state.comment} onChange={this.handleChangeComment}/>
                    <br />
                    <button>Create</button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let Category = {
            name: this.state.name,
            comment: this.state.comment,
        };

        console.log(Category);
        this.props.addCategory(Category);

        this.clearState();
    }
}

CreateForm.propTypes = {
    addCategory: PropTypes.func.isRequired
};

export default CreateForm;