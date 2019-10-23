
import { connect } from 'react-redux';
import React, { Component } from 'react';

class VacaPlanner extends Component {


    state = {
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmitHandle = e => {
        e.preventDefault(); e.preventDefault();
        this.props.newItem(this.state)
    }
    render() {
        return (
            <form onSubmit={this.onSubmitHandle}>
                <input onChange={this.handleChange} name='name' value={this.state.name} />
                <input onChange={this.handleChange} name='date' value={this.state.date} />
                <input onChange={this.handleChange} name='description' value={this.state.description} />

                <button>Submit</button>
            </form>
        );
    }
}
export default connect(null, {})(VacaPlanner);