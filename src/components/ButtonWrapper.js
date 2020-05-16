import React from 'react';

import LanguageContext from '../LanguageContext'


class ButtonWrapper extends React.Component {
    renderButtonText = language => {
        return language === 'english' ? 'Submit' : 'Voorloggen';
    }

    render() {
        return (
            <div>
                <button className="ui button primary">
                    <LanguageContext.Consumer >
                        {({language}) => this.renderButtonText(language)}
                    </LanguageContext.Consumer>
                </button>
            </div>
        )
    }
}

export default ButtonWrapper;