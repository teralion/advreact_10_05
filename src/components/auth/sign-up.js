import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import validator from 'email-validator';
import ErrorField from '../common/error-field';

class SignUpForm extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit = { this.props.handleSubmit }>
                    <Field name = "email" component = { ErrorField } label = "E-mail" />
                    <Field name = "password" component = { ErrorField } label = "Password" type = "password" />
                    <button type = "submit">Sign Up</button>
                </form>
            </div>
        );
    };
};

const validate = ({ email, password}) => {
    const errors = {};

    if (!email) errors.email = "email is required field";
    if (email && !validator.validate(email)) errors.email = "invalid email";

    if (!password) errors.password = "password is required field";
    if (password && password.length < 8) errors.password = "password length must be more than 8 symbols";

    return errors
};

export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm);