import * as React from "react";
import axios from "axios";
import {updateToken} from "../../../common/utils/token";
import {withRouter} from "react-router-dom";
import {backendUrlFor} from "../../../app.constants";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            error: null,
            username: '',
            password: ''
        }
    }

    // username: admin@example.com
    // password: qwerty1234

    submitForm() {
        axios.post(backendUrlFor('login'), {}, {
            auth: {
                username: this.state.username,
                password: this.state.password
            },
        }).then((response) => {
            updateToken(response.data.token);
            this.setState({error: null});
            this.props.history.push("/");
        }).catch((error) => {
            this.setState({error: error.response.data.detail})
        })
    };

    render() {
        return (
            <div>
                <em style={{color: "red"}}>{this.state.error}</em>
                <form className="login-form">
                    <input type="text" onChange={this.onChangeUsername} placeholder="username"/>
                    <input type="password" onChange={this.onChangePassword} placeholder="password"/>
                    <button type="button" onClick={this.submitForm}>login</button>
                </form>
            </div>
        )
    }

    onChangeUsername = (field) => {
        this.setState({username: field.target.value})
    };

    onChangePassword = (field) => {
        this.setState({password: field.target.value})
    };
}

export default withRouter(LoginForm)
