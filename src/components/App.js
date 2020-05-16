import React from 'react';

import FormWrapper from './FormWrapper';
import LanguageSelector from './LanguageSelector';
import {LanguageStore} from '../LanguageContext';

class App extends React.Component {
    
    render () {
        return (
            <div>
                <LanguageStore>
                    {/* <LanguageSelector onLanguageChange={this.onLanguageChange}/> */} 
                    <LanguageSelector />
                    <FormWrapper/>
                    {/* <LanguageContext.Provider value={this.state.language}>
                     <FormWrapper />
                    </LanguageContext.Provider> */}
                </LanguageStore>
            </div>
        )
    }
}

export default App;