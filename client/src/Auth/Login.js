import React, { Component } from 'react';
import { withContext } from "../AppContext"

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("/todos"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }

    render() {
        return (
            <div className="form-wrapper">
                <h3>Log In</h3>
                <form className='login' onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                    <button className='login-submit' type="submit">Submit</button>
                </form>

                {
                    this.state.errorMessage &&
                    <p style={{color: "red"}}>{this.state.errorMessage}</p>
                }

            </div>
        )
    }
}

export default withContext(LoginForm);