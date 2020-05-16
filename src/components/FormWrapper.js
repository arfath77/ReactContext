import React from 'react';

import InputWrapper from './InputWrapper';
import ButtonWrapper from './ButtonWrapper';

class FormWrapper extends React.Component {
    render() {
        return (
            <div className="ui form">
                <InputWrapper /> 
                <ButtonWrapper />
            </div>
        )
    }
}

export default FormWrapper;